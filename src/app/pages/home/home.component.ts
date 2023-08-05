import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CategoriaResponse } from 'src/app/interfaces/categoria-response';
import { Meal, MenuResponse } from 'src/app/interfaces/menu-response';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public menu: MenuResponse;
  public categorias: CategoriaResponse;

  constructor(private menuService: MenusService) {
    this.menuService.getMenu()
      .subscribe(res => {
        this.menu = res;
      });
  }


  ngOnInit(): void {
    this.menuService.getCategorias()
    .subscribe(res => {
      this.categorias = res;
    })
  }

}
