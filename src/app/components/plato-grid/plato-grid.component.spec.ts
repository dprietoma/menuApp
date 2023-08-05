import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoGridComponent } from './plato-grid.component';

describe('PlatoGridComponent', () => {
  let component: PlatoGridComponent;
  let fixture: ComponentFixture<PlatoGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatoGridComponent]
    });
    fixture = TestBed.createComponent(PlatoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
