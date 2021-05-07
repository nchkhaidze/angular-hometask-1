import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {PokemonsService} from 'src/app/services/pokemons/pokemons.service';
import Pokemon from "../../../model/pokemon"

@Component({
  selector: 'app-pokemon-full-card',
  templateUrl: './pokemon-full-card.component.html',
  styleUrls: ['./pokemon-full-card.component.scss']
})
export class PokemonFullCardComponent implements OnInit {

  constructor(private pokemonsService: PokemonsService, private activatedRoute: ActivatedRoute) { }

  pokemon: Pokemon;

  ngOnInit(): void {
    const pokemonId = this.activatedRoute.snapshot.paramMap.get("id");
    this.pokemonsService.getPokemon(pokemonId ?? "")
        .subscribe(pokemon => this.pokemon = pokemon); 
  }

  toggleCaught() {
      if (!this.pokemon) {
          return;
      }

      this.pokemonsService.toggleCaught(this.pokemon)
        .subscribe(() => this.pokemon.caught = !this.pokemon.caught);
  }

}
