import { Component } from '@angular/core';
import { PokeapiService, PokemonCard } from '../services/pokeapi.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {

  pokemonList: PokemonCard[] = [];
  offset = 0;

  constructor(private pokeapi: PokeapiService) {};

  ngOnInit(): void {
    this.getPage(0);
  }

  getPage(move: number) {
    this.offset += move;
    console.log(this.offset);
    this.pokeapi.getPokemonList(this.offset).subscribe((result:PokemonCard[]) => {
      this.pokemonList = result;
    });
  }

}
