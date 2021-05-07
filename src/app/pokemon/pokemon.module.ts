import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component'
import {RouterModule} from '@angular/router';
import { PokemonFullCardComponent } from './pokemon-full-card/pokemon-full-card.component';
import {JwPaginationModule} from 'jw-angular-pagination';
import { ManagePokemonComponent } from './manage-pokemon/manage-pokemon.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [PokemonListComponent, PokemonListItemComponent, SearchComponent, PokemonFullCardComponent, ManagePokemonComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    JwPaginationModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: []
})
export class PokemonModule { }
