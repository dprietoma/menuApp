import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoGridComponent } from './plato-grid.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Meal } from 'src/app/interfaces/menu-response';

describe('PlatoGridComponent', () => {
  let component: PlatoGridComponent;
  let fixture: ComponentFixture<PlatoGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatoGridComponent],
      imports: [NgxPaginationModule]
    });
    fixture = TestBed.createComponent(PlatoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validar metodo incrementar undefined', () => {
    component.contador = 1
    component.menu = [{
      strMeal:      '',
      strMealThumb: '',
      idMeal:       '',
      strArea:     '',
      strCategory: '',
      like:         undefined,
      start:        0,
      }]
       
    component.incrementar(0)
    expect(component.contador == 2).toBeTrue()
  });

  it('Validar metodo incrementar con valor ', () => {
    component.contador = 5
    component.menu = [{
      strMeal:      '',
      strMealThumb: '',
      idMeal:       '',
      strArea:     '',
      strCategory: '',
      like:         1,
      start:        0,
      }]
    component.incrementar(0)
    expect(component.contador == 6).toBeTrue()
  });

});
