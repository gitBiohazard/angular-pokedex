import { PokemonSearchService } from './pokemon-search.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent implements OnInit {

  @Output() public emitSearch: EventEmitter<string> = new EventEmitter()
  public form!: FormGroup

  constructor(
    private PokemonSearchService: PokemonSearchService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      searchField: new FormControl(null)
    })
  }

  public search(value: string) {
    this.PokemonSearchService.listSearch(value)
  }

  public clear(): void {
    this.form.reset()
    this.search('')
  }
}
