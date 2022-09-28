import { PokemonService } from './../pokemon/pokemon.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  constructor(public pokemonService: PokemonService) { }
  @Output() public pokemonsResponse: any

  ngOnInit(): void {
    this.pokemonService.apiListAllPokemons.subscribe(res => {
      this.pokemonsResponse = res.results
      console.log(this.pokemonsResponse)
    })
  }
}


