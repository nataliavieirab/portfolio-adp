import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Sobre } from './components/about/sobre';

// Componente raiz (root) da aplicação, tudo carrega através dele
@Component({
  imports: [Navbar, Sobre],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
