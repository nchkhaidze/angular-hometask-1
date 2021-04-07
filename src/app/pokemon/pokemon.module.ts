import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from "@angular/forms"



@NgModule({
  declarations: [HomepageComponent, PokemonListComponent, PokemonListItemComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
   
  ],
  exports: [HomepageComponent]
})
export class PokemonModule { }
