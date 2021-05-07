import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PokemonFullCardComponent} from './pokemon/pokemon-full-card/pokemon-full-card.component';
import {PokemonListComponent} from './pokemon/pokemon-list/pokemon-list.component';

const routes: Routes = [
    {path: "pokemons", component: PokemonListComponent},
    {path: "caught", component: PokemonListComponent},
    {path: "pokemon/:id", component: PokemonFullCardComponent},
    {path: "", component: PokemonListComponent},
    {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
