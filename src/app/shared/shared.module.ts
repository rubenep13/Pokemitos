import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidenavComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
