import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component'

@NgModule({
  declarations: [HomepageComponent, PokemonListComponent, PokemonListItemComponent, SearchComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [HomepageComponent]
})
export class PokemonModule { }
