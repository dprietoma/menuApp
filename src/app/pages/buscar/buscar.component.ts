import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Meal } from 'src/app/interfaces/menu-response';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})

export class BuscarComponent implements OnInit {
  
  public menu: Meal[];
  public texto: string;

  constructor(
    private activated: ActivatedRoute,
    private menus: MenusService) {
   }

  ngOnInit(): void {
    this.activated.params.subscribe( params => {
      this.texto = params['texto'];
      if (params != null  || params != undefined) {
        this.getDataBuscar(params);
      }
    })
  }

  getDataBuscar(params: Params) {
    this.menus.getBuscar(params['texto']).subscribe(menu =>{
     this.menu = menu.meals;
    });
    
  }

}
