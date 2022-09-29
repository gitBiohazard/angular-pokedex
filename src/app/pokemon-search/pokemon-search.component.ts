import { PokemonSearchService } from './pokemon-search.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

  @Output() public emitSearch: EventEmitter<string> = new EventEmitter()

  constructor(private PokemonSearchService: PokemonSearchService) { }

  ngOnInit(): void { }

  public search(value: string) {
    this.PokemonSearchService.listSearch(value)
  }
}
