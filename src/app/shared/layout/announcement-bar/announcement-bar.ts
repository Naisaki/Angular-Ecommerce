import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

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

  ngAfterViewInit(): void {
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

      this.animationFrameId = requestAnimationFrame(step);
    };

    this.animationFrameId = requestAnimationFrame(step);
  }

  private stopAnimation(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}
