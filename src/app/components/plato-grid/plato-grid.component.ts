import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/interfaces/menu-response';


@Component({
  selector: 'app-plato-grid',
  templateUrl: './plato-grid.component.html',
  styleUrls: ['./plato-grid.component.css']
})
export class PlatoGridComponent implements OnInit {

  @Input() menu: Meal[];
  pageStart: number;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.menu);
  }

  onPlatoClick( item ){
    this.router.navigate(['/plato', item.idMeal])
    console.log(item.idMeal);
  }

}
