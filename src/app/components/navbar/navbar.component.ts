import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaResponse } from 'src/app/interfaces/categoria-response';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public categorias: CategoriaResponse;
  constructor(
    private router: Router,
    private menuService: MenusService){}

  
  ngOnInit(): void {
    this.menuService.getCategorias()
    .subscribe(res => {
      this.categorias = res;
    })
  }

  buscarPlato(txt: string){
    txt = txt.trim();
    if (txt.length === 0) {
      return;
    } 
    this.router.navigate(['/buscar', txt]);
  }
  
  capturarCategoria(item) {
   console.log(item.strCategory);
  }

}
