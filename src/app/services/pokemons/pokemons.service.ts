import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import Pokemon from "../../../model/pokemon";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PokemonsService {

    constructor(private http: HttpClient) {}

    private url: string = "http://localhost:3030/pokemons/";
    private pokemons: Pokemon[];

    getAllPokemons(): Observable<Pokemon[]> {
        // const params = new HttpParams().append('_page', page);
        // return this.http.get<Pokemon[]>(this.url.slice(0, this.url.length - 1), {params});
        return this.http.get<Pokemon[]>(this.url);
    }

    getCaughtPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.url)
            .pipe(
                map(pokemons => pokemons.filter(pokemon => pokemon.caught))
            );
    }

    getPokemon(id: string) {
        return this.http.get<Pokemon>(this.url + id);
    }

    toggleCaught(pokemon: Pokemon) {
        return this.http.put<Pokemon>(this.url + pokemon.id, {...pokemon, caught: !pokemon.caught})
    }

    addPokemon(pokemon: Pokemon) {
        return this.http.post<Pokemon>(this.url, pokemon);
    } 

    editPokemon(pokemon: Pokemon) {
        return this.http.put<Pokemon>(this.url + pokemon.id, pokemon)
    }
}