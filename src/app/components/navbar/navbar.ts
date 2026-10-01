import { Component } from '@angular/core';

interface ItemNavbar {
  titulo: string;
  url: string;
  // icone: string;
}

@Component({
  imports: [],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  public readonly itens: ItemNavbar[] = [
    {
      titulo: 'SOBRE',
      url: '#sobre',
      // icone: 'bi-person',
    },
    {
      titulo: 'HABILIDADES',
      url: '#habilidades',
      // icone: 'bi-award',
    },
    {
      titulo: 'PORTFÓLIO',
      url: '#portfolio',
      // icone: 'bi-card-list',
    },
  ];
}
