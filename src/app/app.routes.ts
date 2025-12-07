// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Home
  {
    path: '',
    loadComponent: () =>
      import('@features/home/pages/home-page/home-page').then(
        (m) => m.HomePage
      ),
  },

  // Catálogo
  {
    path: 'catalog',
    loadComponent: () =>
      import(
        '@features/catalog/pages/catalog-page/catalog-page'
      ).then((m) => m.CatalogPage),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import(
        '@features/catalog/pages/product-detail-page/product-detail-page'
      ).then((m) => m.ProductDetailPage),
  },

  // Carrito
  {
    path: 'cart',
    loadComponent: () =>
      import('@features/cart/pages/cart-page/cart-page').then(
        (m) => m.CartPage
      ),
  },

  // Checkout
  {
    path: 'checkout',
    loadComponent: () =>
      import(
        '@features/checkout/pages/checkout-page/checkout-page'
      ).then((m) => m.CheckoutPage),
  },

  // Auth
  {
    path: 'login',
    loadComponent: () =>
      import('@features/auth/pages/login-page/login-page').then(
        (m) => m.LoginPage
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import(
        '@features/auth/pages/register-page/register-page'
      ).then((m) => m.RegisterPage),
  },

  // Fallback
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
