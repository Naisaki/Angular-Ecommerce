import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '@shared/layout/navbar/navbar';
import { AnnouncementBar } from '@shared/layout/announcement-bar/announcement-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, AnnouncementBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Khalil-Details');
}
