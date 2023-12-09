import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokemonList(offset: number) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + offset).pipe(
      map((response: any) => {
        let pokemons: PokemonCard[] = [];
        response.results.forEach((pokemon_item: any) => {
          this.getPokemon(pokemon_item.url).subscribe((pokemon: PokemonCard) => {
            pokemons.push(pokemon);
          })
        });
        return pokemons;
      })
    );
  }

  getPokemon(url: string): Observable<PokemonCard>{
    return this.http.get(url).pipe(
      // Manipula los datos
      map((pokemon: any) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          stats: pokemon.stats,
          types: pokemon.types,
          sprite: pokemon.sprites.other!['official-artwork'].front_default
        }
      })
    );
  }


}

export interface PokemonCard {
  id: number,
  name: string,
  stats: any,
  types: any,
  sprite: string
}
