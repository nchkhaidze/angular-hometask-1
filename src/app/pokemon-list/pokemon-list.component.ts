import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
    pokemon = [
        {
            "name": "bulbasaur",
            "id": 1,
            damage: 228,
          },
          {
            "name": "ivysaur",
            "id": 2,
            damage: 10
          },
          {
            "name": "venusaur",
            "id": 3,
            damage: 70,
          },
          {
            "name": "charmander",
            "id": 4,
            damage: 3
          },
          {
            "name": "charmeleon",
            "id": 5,
            damage: 49
          }
    ]

    picturesDisplayed: boolean = true;

    togglePictures() {
        this.picturesDisplayed = !this.picturesDisplayed;
    }
}
