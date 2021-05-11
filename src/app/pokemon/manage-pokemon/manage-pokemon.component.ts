import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';
import Pokemon from 'src/model/pokemon';

@Component({
  selector: 'app-manage-pokemon',
  templateUrl: './manage-pokemon.component.html',
  styleUrls: ['./manage-pokemon.component.scss']
})
export class ManagePokemonComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder, 
    private pokemonService: PokemonsService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }
  editMode: boolean = false;
  pokemon: Pokemon;
  pokemonForm = this.formBuilder.group({
    id: ["", [Validators.required, Validators.minLength(6)]],
    name: ["", [Validators.required, Validators.minLength(4)]],
    damage: ["", [Validators.required, Validators.min(1)]],
    tags: [[]],
  })

  ngOnInit(): void {
    const pokemonId = this.activatedRoute.snapshot.paramMap.get("id");
    if (pokemonId) {
        this.editMode = true;
        this.pokemonForm.controls["id"].disable();
    }
    this.pokemonService.getPokemon(pokemonId ?? "")
        .subscribe(pokemon => {
            this.pokemon = pokemon;
            this.pokemonForm.controls["id"].setValue(this.pokemon.id);
            this.pokemonForm.controls["name"].setValue(this.pokemon.name);
            this.pokemonForm.controls["damage"].setValue(this.pokemon.damage);
            this.pokemonForm.controls["tags"].setValue(this.pokemon.tags ?? []);
        }); 
  }
  
  onTagsChange(tags: string[]) {
    this.pokemonForm.controls['tags'].setValue(tags);
  }

  onSubmit() {
    if (this.editMode) {
        this.pokemonService.editPokemon({caught: this.pokemon.caught, ...this.pokemonForm.getRawValue()})
            .subscribe(
                response => this.router.navigate(["/pokemons"]),
                error => console.log(error)
            )
    } else {
        this.pokemonService.addPokemon(this.pokemonForm.value)
            .subscribe(
                response => this.router.navigate(["/pokemons"]),
                error => console.log(error)
            )
    }
  }

}
