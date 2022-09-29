import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonSearchService {

  public searchString: string = ''
  public searchTrigger: any = new EventEmitter<string>()

  constructor() { }

  public listSearch(value: string) {
    this.searchString = value
    this.searchTrigger.emit(this.searchString)
  }
}
