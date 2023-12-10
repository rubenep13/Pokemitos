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

  getPokemonByName(name: string): Observable<PokemonCard>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name).pipe(
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

  getPokemonByType(type: string): Observable<PokemonCard[]>{
    return this.http.get('https://pokeapi.co/api/v2/type/' + type).pipe(
      // Manipula los datos
      map((response: any) => {
        let pokemons: PokemonCard[] = [];
        response.pokemon.forEach((pokemon_item: any) => {
          this.getPokemon(pokemon_item.pokemon.url).subscribe((pokemon: PokemonCard) => {
            pokemons.push(pokemon);
          })
        });
        return pokemons;
      })
    );
  }

  getPokemonByAbility(ability: string): Observable<PokemonCard[]>{
    return this.http.get('https://pokeapi.co/api/v2/ability/' + ability).pipe(
      // Manipula los datos
      map((response: any) => {
        let pokemons: PokemonCard[] = [];
        response.pokemon.forEach((pokemon_item: any) => {
          this.getPokemon(pokemon_item.pokemon.url).subscribe((pokemon: PokemonCard) => {
            pokemons.push(pokemon);
          })
        });
        return pokemons;
      })
    );
  }

  getPokemonByMove(move: string): Observable<PokemonCard[]>{
    return this.http.get('https://pokeapi.co/api/v2/move/' + move).pipe(
      // Manipula los datos
      map((response: any) => {
        let pokemons: PokemonCard[] = [];
        response.pokemon.forEach((pokemon_item: any) => {
          this.getPokemon(pokemon_item.pokemon.url).subscribe((pokemon: PokemonCard) => {
            pokemons.push(pokemon);
          })
        });
        return pokemons;
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
