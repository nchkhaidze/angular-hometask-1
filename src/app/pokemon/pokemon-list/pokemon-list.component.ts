import { Component, OnInit } from '@angular/core';
import Pokemon from "../../../model/pokemon";
import {PokemonsService} from "../../services/pokemons/pokemons.service";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
    constructor(private pokemonsService: PokemonsService) {}

    ngOnInit() {
        this.pokemons = this.pokemonsService.getPokemons();
    }

    pokemons: Pokemon[];

    picturesDisplayed: boolean = true;

    togglePictures() {
        this.picturesDisplayed = !this.picturesDisplayed;
    }

    toggleCaught(id: string) {
        const pokemon = this.pokemons.find(p => p.id === id);
        if (!pokemon) {
            return;
        }
        pokemon.caught = !pokemon.caught;
    }

    onSearch(searchValue: string) {
        console.log(searchValue);
    }
}
