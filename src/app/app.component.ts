import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { menuItems } from './menu';
import { PokeapiService } from './pokedex/services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private pokeapi: PokeapiService) {}

  private breakpointObserver = inject(BreakpointObserver);
  elements = menuItems;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    prueba(){
      //this.pokeapi.getPokemon('https://pokeapi.co/api/v2/pokemon/1/').subscribe((response)=>{console.log(response)});
      this.pokeapi.getPokemonList(0).subscribe((response)=>{console.log(response)});
    }
}
