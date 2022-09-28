import { Component, Input } from '@angular/core';
// import { Pokemon } from '../pokemon/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() public pokemon: any;

  leadingZero(str: number, size: number = 3): string {
    let s = String(str)
    while (s.length < (size || 2)) {
      s = '0' + s
    }
    return s
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
