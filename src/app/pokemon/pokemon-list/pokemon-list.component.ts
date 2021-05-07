import { Component, DoCheck, OnInit } from '@angular/core';
import Pokemon from "../../../model/pokemon";
import {PokemonsService} from "../../services/pokemons/pokemons.service";
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
    constructor(private pokemonsService: PokemonsService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        if (this.activatedRoute.routeConfig?.path === "caught") {
            this.pokemonsService.getCaughtPokemons()
                .subscribe(pokemons => this.pokemons = pokemons)
        } else {
            this.pokemonsService.getAllPokemons()
                .subscribe(pokemons => this.pokemons = pokemons);
        }
    }

    pokemons: Pokemon[];
    pageOfItems: Pokemon[];
    currentPage: number = 1; 
    picturesDisplayed: boolean = true;

    togglePictures() {
        this.picturesDisplayed = !this.picturesDisplayed;
    }

    toggleCaught(id: string) {
        const pokemon = this.pokemons.find(p => p.id === id);
        if (!pokemon) {
            return;
        }
        this.pokemonsService.toggleCaught(pokemon)
            .subscribe(() => this.pageOfItems.forEach((pokemon, index) => {
                if (pokemon.id === id) {
                    this.pageOfItems[index] = {...this.pageOfItems[index], caught: !this.pageOfItems[index].caught};
                } 
            }))
    }

    onSearch(searchValue: string) {
        console.log(searchValue);
    }

    onChangePage(pageOfItems: Pokemon[]) {
        this.pageOfItems = pageOfItems;
    }
}
