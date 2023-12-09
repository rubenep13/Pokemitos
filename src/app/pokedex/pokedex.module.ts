import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { PokedexComponent } from './pokedex.component';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './list-view/card-view/card-view.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

export const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListViewComponent },
    ]
  }
];

@NgModule({
  declarations: [
    ListViewComponent,
    PokedexComponent,
    CardViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatCardModule,
    MatIconModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
  ]
})
export class PokedexModule { }
