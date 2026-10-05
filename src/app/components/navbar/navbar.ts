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
  public progresso = 0;

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
  @HostListener('window:resize')
  public atualizarRolagem(): void {
    const alturaRolavel = document.documentElement.scrollHeight - window.innerHeight;

    this.rolada = window.scrollY > 50;
    this.progresso =
      alturaRolavel > 0
        ? Math.min(100, Math.max(0, (window.scrollY / alturaRolavel) * 100))
        : 0;
  }
}
