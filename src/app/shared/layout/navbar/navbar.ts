import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isDarkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Leer tema guardado (si existe)
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        document.documentElement.classList.add('dark');
      } else {
        this.isDarkMode = false;
        document.documentElement.classList.remove('dark');
      }
    }
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;

      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
