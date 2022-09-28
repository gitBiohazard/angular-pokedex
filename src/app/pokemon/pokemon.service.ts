import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

const API = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = []

  constructor(private httpClient: HttpClient) { }

  get apiListAllPokemons(): Observable<any> {
    return this.httpClient.get<any>(API).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.httpClient.get<any>(resPokemons.url).pipe(
            map(res => res)
          ).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }
}
