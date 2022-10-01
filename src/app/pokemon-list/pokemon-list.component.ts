import { PokemonSearchService } from './../pokemon-search/pokemon-search.service';
import { PokemonService } from './../pokemon/pokemon.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  constructor(
    public pokemonService: PokemonService,
    public PokemonSearchService: PokemonSearchService
  ) { }


  private subscription: Subscription = new Subscription()
  private setPokemonsResponse: any
  public pokemonsResponse: any

  ngOnInit(): void {
    this.subscription = this.pokemonService.apiListAllPokemons.subscribe(res => {
      this.setPokemonsResponse = res.results
      this.pokemonsResponse = this.setPokemonsResponse
    })

    this.PokemonSearchService.searchTrigger.subscribe((searchString: string) => {
      this.getSearch(searchString)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public getSearch(value: string): void {
      const filter = this.setPokemonsResponse.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })
    this.pokemonsResponse = filter
  }
}


