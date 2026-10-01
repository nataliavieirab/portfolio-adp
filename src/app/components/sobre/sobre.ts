import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sobre',
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre implements OnInit, OnDestroy {
  public readonly frases = [
    'Desenvolvedora Full-Stack em formação',
    'C# ⭒ TypeScript ⭒ JavaScript',
    '.NET ⭒ ASP.NET Core ⭒ Node.js',
  ];

  public readonly textoVisivel = signal('');

  private indiceFrase = 0;
  private indiceLetra = 0;
  private apagando = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private tick(): void {
    const atual = this.frases[this.indiceFrase];

    if (!this.apagando) {
      this.indiceLetra += 1;
      this.textoVisivel.set(atual.slice(0, this.indiceLetra));

      if (this.indiceLetra === atual.length) {
        this.timer = setTimeout(() => {
          this.apagando = true;
          this.tick();
        }, 1800);
        return;
      }

      this.timer = setTimeout(() => this.tick(), 90);
      return;
    }

    this.indiceLetra -= 1;
    this.textoVisivel.set(atual.slice(0, this.indiceLetra));

    if (this.indiceLetra === 0) {
      this.apagando = false;
      this.indiceFrase = (this.indiceFrase + 1) % this.frases.length;
    }

    this.timer = setTimeout(() => this.tick(), 45);
  }
}
