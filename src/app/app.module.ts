import { PokemonService } from './pokemon/pokemon.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonFooterComponent } from './pokemon-footer/pokemon-footer.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonTrainerComponent } from './pokemon-trainer/pokemon-trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonHeaderComponent,
    PokemonFooterComponent,
    PokemonSearchComponent,
    PokemonTrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
