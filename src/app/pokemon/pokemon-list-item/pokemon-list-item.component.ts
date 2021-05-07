import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import Pokemon from "../../../model/pokemon"

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListItemComponent {

    @Input() pokemon: Pokemon;
    @Input() pictureDisplayed: boolean;

    @Output() caughtEvent = new EventEmitter();

    toggleCaught() {
        this.caughtEvent.emit(this.pokemon.id);
    }
}
