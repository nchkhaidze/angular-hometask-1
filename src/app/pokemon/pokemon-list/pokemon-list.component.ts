import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import Pokemon from "../../../model/pokemon";
import {PokemonsService} from "../../services/pokemons/pokemons.service";
import { Observable, of, Subject, Subscription, pipe } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
    constructor(private pokemonsService: PokemonsService, private activatedRoute: ActivatedRoute) {}

    private unsubscribe$ = new Subject<void>();

    ngOnInit() {
        (this.activatedRoute.routeConfig?.path === "caught" 
        ? this.pokemonsService.getCaughtPokemons() 
        : this.pokemonsService.getAllPokemons())
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(pokemons => this.pokemons = pokemons);
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
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => this.pageOfItems.forEach((pokemon, index) => {
                if (pokemon.id === id) {
                    this.pageOfItems[index] = {...this.pageOfItems[index], caught: !this.pageOfItems[index].caught};
                } 
            }))
    }

    onChangePage(pageOfItems: Pokemon[]) {
        this.pageOfItems = pageOfItems;
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}

