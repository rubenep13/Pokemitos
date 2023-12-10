import { Component, Input } from '@angular/core';
import { PokemonCard } from '../../services/pokeapi.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {

  @Input() pokemonCard!: PokemonCard;
  
  getStatName(stat:string){
    switch(stat){
      case 'hp':
        return 'HP';
      case 'attack':
        return 'ATK';
      case 'defense':
        return 'DEF';
      case 'special-attack':
        return 'SpA';
      case 'special-defense':
        return 'SpD';
      case 'speed':
        return 'VEL';
    }
    return null;
  }


}
