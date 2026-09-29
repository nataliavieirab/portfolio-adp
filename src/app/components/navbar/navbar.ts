import { Component } from '@angular/core';

// Define um modelo de objeto dentro do componente
interface ItemNavbar {
  titulo: string;
  url: string;
  icone: string;
}

@Component({
  imports: [],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  public readonly itens: ItemNavbar[] = [
    {
      titulo: 'Sobre',
      url: '#sobre',
      icone: 'bi-person',
    },
    {
      titulo: 'Habilidades',
      url: '#habilidades',
      icone: 'bi-award',
    },
    {
      titulo: 'Portfólio',
      url: '#portfolio',
      icone: 'bi-card-list',
    },
  ];
}
