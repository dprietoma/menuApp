import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {
  public plato: any;
  constructor(
    private activated: ActivatedRoute,
    private menus: MenusService
  ) { }

  ngOnInit(): void {
    if (this.activated?.snapshot?.params) {
      const { id = null} = this.activated?.snapshot?.params;
      this.menus.getDetalleId(id).subscribe(plato => {
        if (plato != null  || plato != undefined) {
          this.getInfoPlato(plato);
        }
      });
    }
      
  }

  getInfoPlato(plato: any){
    this.plato = plato.meals[0];
  }
}
