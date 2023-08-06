import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/interfaces/menu-response';


@Component({
  selector: 'app-plato-grid',
  templateUrl: './plato-grid.component.html',
  styleUrls: ['./plato-grid.component.css']
})
export class PlatoGridComponent  {

  @Input() menu: Meal[];
  pageStart: number;
  contador: number = 1;
  maximo: number = 5;
  minimo: number = 1;
  aumentando: boolean = true;
  constructor(private router: Router) { 

  }



  onPlatoClick( item ){
    this.router.navigate(['/plato', item.idMeal])
  }

  incrementar(i) {
    if(this.menu[i].like === undefined){
      this.contador = 1;
      this.menu[i].like = this.contador++;
    } else {
      this.menu[i].like = this.contador++;

    }
  }

  actualizarContador(i) {
    if (this.aumentando) {
      this.menu[i].start = this.minimo++;
      if (this.minimo === this.maximo) {
        this.aumentando = false;
      }
    } else {
      this.menu[i].start = this.minimo--;
      if (this.minimo === 1) {
        this.aumentando = true;
      }
    }
  }

}
