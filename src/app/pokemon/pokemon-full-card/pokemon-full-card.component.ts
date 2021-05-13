import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {PokemonsService} from 'src/app/services/pokemons/pokemons.service';
import Pokemon from "../../../model/pokemon"

@Component({
    selector: 'app-pokemon-full-card',
    templateUrl: './pokemon-full-card.component.html',
    styleUrls: [ './pokemon-full-card.component.scss' ]
})
export class PokemonFullCardComponent implements OnInit, OnDestroy {

    constructor(private pokemonsService: PokemonsService, private activatedRoute: ActivatedRoute) { }

    pokemon: Pokemon;
    imageUrl: string;
    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        const pokemonId = this.activatedRoute.snapshot.paramMap.get("id");
        this.subscription.add(this.pokemonsService.getPokemon(pokemonId ?? "")
            .subscribe(pokemon => {
                this.pokemon = pokemon;
                this.imageUrl = this.pokemon.imageUrl ?? `https://raw.githubusercontent.com/js-training-dec-2019/final-project/master/pokemons/${this.pokemon.id}.png`
            })
        )
    }

    toggleCaught() {
        if (!this.pokemon) {
            return;
        }

        this.subscription.add(this.pokemonsService.toggleCaught(this.pokemon)
            .subscribe(() => this.pokemon.caught = !this.pokemon.caught)
        )
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
