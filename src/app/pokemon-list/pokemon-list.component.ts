import { PokemonSearchService } from './../pokemon-search/pokemon-search.service';
import { PokemonService } from './../pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  constructor(
    public pokemonService: PokemonService,
    public PokemonSearchService: PokemonSearchService
    ) { }

  private setPokemonsResponse: any
  public pokemonsResponse: any

  ngOnInit(): void {
    this.pokemonService.apiListAllPokemons.subscribe(res => {
      this.setPokemonsResponse = res.results
      this.pokemonsResponse = this.setPokemonsResponse
    })

    this.PokemonSearchService.searchTrigger.subscribe((searchString: string) => {
      this.getSearch(searchString)
    })
  }

  public getSearch(value: string): void {
    const filter = this.setPokemonsResponse.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })
    this.pokemonsResponse = filter
  }
}


