import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PokemonsService {

    constructor() { }

    getPokemons() {
        return [
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
    }
}
