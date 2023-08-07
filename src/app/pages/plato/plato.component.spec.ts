import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoComponent } from './plato.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('PlatoComponent', () => {
  let component: PlatoComponent;
  let fixture: ComponentFixture<PlatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatoComponent],
      imports: [RouterModule,HttpClientModule],
      providers: [
                // Agregar el proveedor ActivatedRoute aquí
                { provide: ActivatedRoute, useValue: {} },
              ]
    });
    fixture = TestBed.createComponent(PlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
