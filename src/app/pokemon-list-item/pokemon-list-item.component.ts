import { Component, Input } from '@angular/core';
import Pokemon from "../../model/pokemon"

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent {

    @Input() pokemon: Pokemon;

    private _pictureDisplayed: boolean;
    @Input() set pictureDisplayed(value: boolean) {
        this._pictureDisplayed = value;
        console.log(this._pictureDisplayed)
    }
    get showPicture() {
        return this._pictureDisplayed;
    }
}
