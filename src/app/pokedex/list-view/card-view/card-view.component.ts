import { Component, Input } from '@angular/core';
import { PokemonCard } from '../../services/pokeapi.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {

  @Input() pokemonCard!: PokemonCard;



}
