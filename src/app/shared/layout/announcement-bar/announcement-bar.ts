import { AfterViewInit, OnDestroy, ElementRef, ViewChild, inject, PLATFORM_ID, Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-announcement-bar',
  imports: [],
  templateUrl: './announcement-bar.html',
  styleUrl: './announcement-bar.css',
})
export class AnnouncementBar implements AfterViewInit, OnDestroy {
  @ViewChild('marqueeList') marqueeList!: ElementRef<HTMLUListElement>;

  private animationFrameId: number | null = null;
  private lastTimestamp = 0;
  private offset = 0;

  // velocidades en px/segundo
  private readonly normalSpeed = 30; // normal
  private readonly slowSpeed = 20; // hover
  private currentSpeed = this.normalSpeed;

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;   // ⬅ evita correr en SSR
  this.startAnimation();
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  // Hover: más lento
  onMarqueeEnter(): void {
    this.currentSpeed = this.slowSpeed;
  }

  // Sale del hover: velocidad normal
  onMarqueeLeave(): void {
    this.currentSpeed = this.normalSpeed;
  }

  private startAnimation(): void {
    if (!this.isBrowser) return;

    const step = (timestamp: number) => {
      if (!this.lastTimestamp) {
        this.lastTimestamp = timestamp;
      }

      const delta = (timestamp - this.lastTimestamp) / 1000; // segundos
      this.lastTimestamp = timestamp;

      const distance = this.currentSpeed * delta; // px a mover en este frame
      this.offset -= distance;

      const listEl = this.marqueeList.nativeElement;
      const totalWidth = listEl.scrollWidth / 2; // porque duplicaste los items

      // cuando se desplazó más de la mitad, reseteamos el offset
      if (Math.abs(this.offset) >= totalWidth) {
        this.offset += totalWidth;
      }

      listEl.style.transform = `translateX(${this.offset}px)`;

      this.animationFrameId = window.requestAnimationFrame(step);
    };

    this.animationFrameId = window.requestAnimationFrame(step);
  }

  private stopAnimation(): void {
    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}
