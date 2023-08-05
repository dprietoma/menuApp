import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PlatoGridComponent } from './plato-grid/plato-grid.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PlatoGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports:[
    NavbarComponent,
    SlideshowComponent,
    PlatoGridComponent
  ]
})
export class ComponentsModule { }
