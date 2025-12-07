// src/app/features/catalog/catalog.routes.ts
import { Routes } from '@angular/router';

export const CATALOG_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/catalog-page/catalog-page').then(
        (m) => m.CatalogPage
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/product-detail-page/product-detail-page').then(
        (m) => m.ProductDetailPage
      ),
  },
];
