import { Component } from '@angular/core';

// Define um modelo de objeto dentro do componente
interface ItemNavbar {
  titulo: string;
  url: string;
  icone: string;
}

// Componente raiz (root) da aplicação, tudo carrega através dele
@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
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
