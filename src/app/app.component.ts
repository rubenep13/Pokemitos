import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { menuItems } from './menu';
import { PokeapiService } from './pokedex/services/pokeapi.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  darkTheme = false;

  constructor(private overlayContainer: OverlayContainer) {}

  private breakpointObserver = inject(BreakpointObserver);
  elements = menuItems;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeWrapperClassList = document.getElementsByClassName('theme-wrapper')[0].classList;
    if (this.darkTheme) {
      overlayContainerClasses.add('dark-theme');
      themeWrapperClassList.add('dark-theme');
    } else {
      overlayContainerClasses.remove('dark-theme');
      themeWrapperClassList.remove('dark-theme');
    }
  }
}
