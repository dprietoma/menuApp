import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowComponent } from './slideshow.component';
import { RouterModule } from '@angular/router';

describe('SlideshowComponent', () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideshowComponent],
      imports: [RouterModule]
    });
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo onSlidePrev', async () => {
    // Arrange
    const spyMethod = spyOn(component,'onSlidePrev').and.callThrough();
    // Act
    component.onSlidePrev();
    // Assert
    expect(spyMethod).toHaveBeenCalled();
  });

  it('metodo onSlideNext', async () => {
    // Arrange
    const spyMethod = spyOn(component,'onSlideNext').and.callThrough();
    // Act
    component.onSlideNext();
    // Assert
    expect(spyMethod).toHaveBeenCalled();
  });
});
