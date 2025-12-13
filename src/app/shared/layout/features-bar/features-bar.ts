import { Component } from '@angular/core';
interface Feature {
  icon: string;   // luego lo puedes cambiar a SVG, lucide, etc.
  label: string;
}
@Component({
  selector: 'app-features-bar',
  imports: [],
  templateUrl: './features-bar.html',
  styleUrl: './features-bar.css',
})
export class FeaturesBar {
  features: Feature[] = [
    { icon: 'assets/sprite.svg#truck', label: 'Free Shipping over 500€' },
    { icon: 'assets/sprite.svg#world', label: 'Worldwide Shipping' },
    { icon: 'assets/sprite.svg#delivery', label: 'Free Returns' },
    { icon: 'assets/sprite.svg#chair', label: '5-Year Warranty' },
  ];
}
