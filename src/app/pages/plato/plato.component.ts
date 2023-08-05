import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit{
  constructor( 
    private activated: ActivatedRoute,
    private menus: MenusService
    ) { }

  ngOnInit(): void {
    const {id} = this.activated.snapshot.params;
    console.log(id);
  }
}
