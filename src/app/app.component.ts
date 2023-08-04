import { Component } from '@angular/core';
import { MenusService } from './services/menus.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private menuService: MenusService) {
      this.menuService.getMenu().subscribe(res => {
          console.log(res);
      });
  }
}