import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';

@Component({
  selector: 'app-manage-pokemon',
  templateUrl: './manage-pokemon.component.html',
  styleUrls: ['./manage-pokemon.component.scss']
})
export class ManagePokemonComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder, 
    private pokemonService: PokemonsService, 
    private router: Router) {
    
  }
  editMode: boolean = false;
  pokemonForm = this.formBuilder.group({
    id: ["", [Validators.required, Validators.minLength(6)]],
    name: ["", [Validators.required, Validators.minLength(4)]],
    tags: [[], Validators.minLength(2)],
  })

  ngOnInit(): void {
  }
  
  onTagsChange(tags: string[]) {
    this.pokemonForm.controls['tags'].setValue(tags);
  }

  onSubmit() {
    this.pokemonService.addPokemon(this.pokemonForm.value)
      .subscribe(
        response => this.router.navigate(["/pokemons"]),
        error => console.log(error)
      )
  }

}
