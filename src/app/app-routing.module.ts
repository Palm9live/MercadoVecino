import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./catalog/catalog.module').then(m => m.CatalogPageModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'Cerrar sesion',
    loadChildren: () =>
      import('./orders/orders.module').then(m => m.OrdersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      bindToComponentInputs: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }