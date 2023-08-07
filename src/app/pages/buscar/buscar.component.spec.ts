// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { BuscarComponent } from './buscar.component';
// import { ActivatedRoute, RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { PlatoGridComponent } from 'src/app/components/plato-grid/plato-grid.component';
// import { NgxPaginationModule } from 'ngx-pagination/public-api';

// describe('BuscarComponent', () => {
//   let component: BuscarComponent;
//   let fixture: ComponentFixture<BuscarComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [BuscarComponent,PlatoGridComponent],
//       imports: [RouterModule,HttpClientModule],
//       providers: [
//         // Agregar el proveedor ActivatedRoute aquí
//         { provide: ActivatedRoute, useValue: {} },
//       ],
//     });
//     fixture = TestBed.createComponent(BuscarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('metodo getDataBuscar', async () => {
//     // Arrange
//     const spyMethod = spyOn(component,'getDataBuscar').and.callThrough();
//     // Act
//     component.getDataBuscar(null);
//     // Assert
//     expect(spyMethod).toHaveBeenCalled();
//   });
// });
