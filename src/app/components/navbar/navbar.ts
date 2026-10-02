import { Component, HostListener, OnInit } from '@angular/core';
import 'bootstrap/js/dist/collapse';

interface ItemNavbar {
  titulo: string;
  url: string;
}

@Component({
  imports: [],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  public rolada = false;

  public readonly itens: ItemNavbar[] = [
    {
      titulo: 'Sobre',
      url: '#sobre',
    },
    {
      titulo: 'Habilidades',
      url: '#habilidades',
    },
    {
      titulo: 'Projetos',
      url: '#projetos',
    },
  ];

  ngOnInit(): void {
    this.atualizarRolagem();
  }

  @HostListener('window:scroll')
  public atualizarRolagem(): void {
    this.rolada = window.scrollY > 50;
  }
}
