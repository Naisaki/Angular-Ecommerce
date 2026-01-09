import { Component, Input } from '@angular/core';
export type ButtonVariant = 'icon' | 'pill' | 'link' | 'primary';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() href?: string;
  @Input() label = false;
  @Input() underline = false;
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() ariaLabel?: string;

  // para mostrar el contenedor de iconos solo si mandas algo
  @Input() hasIcons = false;

  get btnClass(): string {
    const classes = [`btn--${this.variant}`, `btn--${this.size}`];
    if (this.disabled) classes.push('btn--disabled');
    return classes.join(' ');
  }
}
