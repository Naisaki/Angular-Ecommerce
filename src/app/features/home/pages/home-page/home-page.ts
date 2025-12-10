import { Component } from '@angular/core';
import { AnnouncementBar } from '@shared/layout/announcement-bar/announcement-bar';
import { Navbar } from '@shared/layout/navbar/navbar';
import { Hero } from '@features/home/components/hero/hero';
import { FeaturesBar } from '@shared/layout/features-bar/features-bar';

@Component({
  selector: 'app-home-page',
  imports: [AnnouncementBar, Navbar, Hero, FeaturesBar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
