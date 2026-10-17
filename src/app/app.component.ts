import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  protected readonly appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Catálogo',
      url: '/catalog',
      icon: 'grid'
    },
    {
      title: 'Pedidos',
      url: '/orders',
      icon: 'receipt'
    },
    {
      title: 'Cerrar sesion',
      url: '/login',
      icon: 'log-out'
    }
  ];

  protected readonly labels: string[] = [];

  constructor() { }

}