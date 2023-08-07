import { AfterViewInit, Component, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/categoria-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements AfterViewInit {

  @Input() categorias: Category[];

  public swiper: Swiper;

  constructor() {
    this.swiper = new Swiper('',{});
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  onSlideNext() {
    this.swiper?.slideNext();
  }

  onSlidePrev(){
    this.swiper?.slidePrev();
  }

}
