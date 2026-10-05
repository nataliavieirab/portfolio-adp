import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Sobre } from './components/sobre/sobre';
import { Habilidades } from './components/habilidades/habilidades';

@Component({
  imports: [Navbar, Sobre, Habilidades],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
