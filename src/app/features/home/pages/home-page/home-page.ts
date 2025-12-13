import { Component } from '@angular/core';
import { AnnouncementBar } from '@shared/layout/announcement-bar/announcement-bar';
import { Navbar } from '@shared/layout/navbar/navbar';
import { Hero } from '@features/home/components/hero/hero';
import { FeaturesBar } from '@shared/layout/features-bar/features-bar';
import { OurFavourites } from '@features/home/components/our-favourites/our-favourites';
import { Product } from '@features/catalog/models/product';

@Component({
  selector: 'app-home-page',
  imports: [AnnouncementBar, Navbar, Hero, FeaturesBar, OurFavourites],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  favourites: Product[] = [
    {
      id: 1,
      name: 'Soft minimal tote bag',
      description: 'Everyday tote with clean lines and soft-touch finish.',
      category: 'Bags',
      price: 590.00,
      discount: 200.00,
      tags: ['Editor’s pick'],
      imageUrl: 'product-image-1.avif',
      stock: 10,
    },
    {
      id: 2,
      name: 'Oversized wool blazer',
      description: 'Relaxed fit with sharp shoulders for day-to-night looks.',
      category: 'Outerwear',
      price: 120,
      tags: ['Best seller'],
      imageUrl: 'product-image-1.avif',
      stock: 5,
    },
    {
      id: 3,
      name: 'Oversized wool blazer',
      description: 'Relaxed fit with sharp shoulders for day-to-night looks.',
      category: 'Outerwear',
      price: 120,
      tags: ['Best seller'],
      imageUrl: 'product-image-1.avif',
      stock: 5,
    },
    {
      id: 4,
      name: 'Oversized wool blazer',
      description: 'Relaxed fit with sharp shoulders for day-to-night looks.',
      category: 'Outerwear',
      price: 120,
      tags: ['Best seller'],
      imageUrl: 'product-image-1.avif',
      stock: 5,
    },
    {
      id: 5,
      name: 'Oversized wool blazer',
      description: 'Relaxed fit with sharp shoulders for day-to-night looks.',
      category: 'Outerwear',
      price: 120,
      tags: ['Best seller'],
      imageUrl: 'product-image-1.avif',
      stock: 5,
    },
  ];
}
