import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PlatoComponent } from './plato/plato.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    HomeComponent,
    PlatoComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
