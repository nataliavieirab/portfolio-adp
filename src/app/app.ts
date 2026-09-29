import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';

// Componente raiz (root) da aplicação, tudo carrega através dele
@Component({
  imports: [Navbar],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
