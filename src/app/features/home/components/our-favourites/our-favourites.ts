import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from '@features/catalog/models/product';
import { ProductCard } from '@shared/ui/product-card/product-card';

@Component({
  selector: 'app-our-favourites',
  imports: [ProductCard],
  templateUrl: './our-favourites.html',
  styleUrl: './our-favourites.css',
})
export class OurFavourites implements AfterViewInit {
  @Input() products: Product[] = [];
  @ViewChild('sliderTrack') sliderTrack!: ElementRef<HTMLDivElement>;

  private readonly transitionMs = 800;
  private readonly animation = 'ease-in-out';

  currentIndex = 0;

  ngAfterViewInit(): void {
    if (!this.sliderTrack) return;
    const track = this.sliderTrack.nativeElement;
    track.style.transition = `transform ${this.transitionMs}ms ${this.animation}`;
    this.updateTransform();
  }

  nextSlide(): void {
    if (!this.sliderTrack) return;
    if (this.currentIndex < ((this.products.length - 1) / 4)) {
      this.currentIndex++;
      this.updateTransform();
    }
  }

  prevSlide(): void {
    if (!this.sliderTrack) return;
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTransform();
    }
  }

  private updateTransform(): void {
    if (!this.sliderTrack) return;
    const track = this.sliderTrack.nativeElement;
    track.style.transition = `transform ${this.transitionMs}ms ${this.animation}`;
    const offset = -(this.currentIndex * 100);
    track.style.transform = `translateX(${offset}%)`;
  }
}
