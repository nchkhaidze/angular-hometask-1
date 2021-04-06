import { Component } from '@angular/core';
import Pokemon from "../../model/pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
    pokemon: Pokemon[] = [
        {
            "name": "bulbasaur",
            "id": "1",
            damage: 228,
            caught: false,
          },
          {
            "name": "ivysaur",
            "id": "2",
            damage: 10,
            caught: false,
          },
          {
            "name": "venusaur",
            "id": "3",
            damage: 70,
            caught: false,
          },
          {
            "name": "charmander",
            "id": "4",
            damage: 3,
            caught: false,
          },
          {
            "name": "charmeleon",
            "id": "5",
            damage: 49,
            caught: false,
          }
    ]

    picturesDisplayed: boolean = true;

    togglePictures() {
        this.picturesDisplayed = !this.picturesDisplayed;
    }

    toggleCaught(id: string) {
        const pokemon = this.pokemon.find(p => p.id === id);
        if (!pokemon) {
            return;
        }
        pokemon.caught = !pokemon.caught;
        console.log(pokemon);
    }
}
