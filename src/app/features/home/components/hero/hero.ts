import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  src: string;
  alt: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  slides: Slide[] = [
    { src: 'hero-image-1.avif', alt: 'Look 1', title: 'Natural Elegance in Every Detail', description: 'Crafted from solid oak with a smooth finish, timeless and durable.' },
    { src: 'hero-image-2.avif', alt: 'Look 2', title: 'Modern Minimalism, Maximum Comfort', description: 'Simple, sleek, and built for a cozy, stylish lifestyle.' },
    { src: 'hero-image-3.avif', alt: 'Look 3', title: 'Crafting Comfort, Inspired by the North', description: 'Crafted for style and lasting durability, perfect for any space.' },
  ];
  // Array extendido: [último, ...reales, primero]
  extendedSlides: Slide[] = [];

  @ViewChild('sliderTrack') sliderTrack!: ElementRef<HTMLDivElement>;

  private readonly transitionMs = 1000;
  private readonly overshoot = 2;
  private readonly index = 3;
  private readonly animation = 'ease-out';

  currentSlideIndex = 0;

  constructor() {
    const first = this.slides[0];
    const second = this.slides[1];
    const third = this.slides[2];
    const last = this.slides[this.slides.length - 1];
    const previousLast = this.slides[this.slides.length - 2];
    const previousPreviousLast = this.slides[this.slides.length - 3];

    this.extendedSlides = [previousPreviousLast, previousLast, last, ...this.slides, first, second, third];
    
  }

  ngAfterViewInit(): void {
    const track = this.sliderTrack.nativeElement;
    track.style.transform = `translateX(-${this.index*100}%)`;
    track.style.transition = `transform ${this.transitionMs}ms ${this.animation}`;
  }

  nextSlide(): void {
    const track = this.sliderTrack.nativeElement;

    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    
    const first = this.extendedSlides.shift();
    if (first) {
      this.extendedSlides.push(first);
    }
    // 3) Reseteamos el track sin animación en 0
    track.style.transition = 'none';
    track.style.transform = `translateX(-${this.index*100-100}%)`;

    // Forzamos reflow
    void track.offsetWidth;

    // 4) Dejamos lista la transición para el próximo click
    track.style.transition = `transform ${this.transitionMs}ms ${this.animation}`;
    track.style.transform = `translateX(-${300+this.overshoot}%)`;
    setTimeout(() => {
      track.style.transform = `translateX(-${this.index*100}%)`;
    }, this.transitionMs);
  }

  prevSlide(): void {
    const track = this.sliderTrack.nativeElement;

    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;

    // 1) Reordenamos ANTES de animar: último al inicio → equivalente a prependTo
    const last = this.extendedSlides.pop();
    if (last) {
      this.extendedSlides.unshift(last);
    }

    // 2) Colocamos el track en -100% SIN transición (como si ya estuviera a la izquierda)
    track.style.transition = 'none';
    track.style.transform = `translateX(-${this.index*100+100}%)`;
    void track.offsetWidth; // forzar reflow

    // 3) Animamos de -100% a 0 (entra el slide anterior)
    track.style.transition = `transform ${this.transitionMs}ms ${this.animation}`;
    track.style.transform = `translateX(-${this.index*100-this.overshoot}%)`;
    setTimeout(() => {
      track.style.transform = `translateX(-${this.index*100}%)`;
    }, this.transitionMs);
  }

  goToSlide(targetIndex: number): void {
    const track = this.sliderTrack.nativeElement;

    const diff =
      targetIndex - this.currentSlideIndex;

    if (diff === 0) return;

    // decidimos si vamos hacia adelante o atrás
    const steps = Math.abs(diff);
    const direction = diff > 0 ? 'next' : 'prev';

    for (let i = 0; i < steps; i++) {
      if (direction === 'next') {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

}