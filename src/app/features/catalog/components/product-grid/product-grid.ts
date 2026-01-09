import { Component, Input } from '@angular/core';
import { ProductCard } from '@shared/ui/product-card/product-card';
import { Product } from '@features/catalog/models/product';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {
  @Input() products: Product[] = [];
  isLoading = false;

  clearFilters() {
    // lógica para resetear filtros
  }
}
