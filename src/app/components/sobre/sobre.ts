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

  private readonly ladoMiraPx = 70;

  private indiceFrase = 0;
  private indiceLetra = 0;
  private apagando = false;
  private timer?: ReturnType<typeof setTimeout>;

  public moverFoco(evento: PointerEvent): void {
    const kicker = evento.currentTarget;

    if (!(kicker instanceof HTMLElement) || !this.efeitoLigado()) {
      return;
    }

    const nitido = kicker.querySelector('.sobre-kicker-nitido');
    const mira = kicker.querySelector('.sobre-kicker-mira');

    if (!(nitido instanceof HTMLElement) || !(mira instanceof HTMLElement)) {
      return;
    }

    const caixa = nitido.getBoundingClientRect();
    const metade = this.ladoMiraPx / 2;
    const x = this.limitar(evento.clientX - caixa.left, metade, caixa.width);
    const y = this.limitar(evento.clientY - caixa.top, metade, caixa.height);
    const esquerda = Math.max(0, x - metade);
    const direita = Math.max(0, caixa.width - x - metade);
    const cima = Math.max(0, y - metade);
    const baixo = Math.max(0, caixa.height - y - metade);
    const origem = kicker.getBoundingClientRect();
    const miraX = caixa.left - origem.left + x - metade;
    const miraY = caixa.top - origem.top + y - metade;

    nitido.style.opacity = '1';
    nitido.style.clipPath = `inset(${cima}px ${direita}px ${baixo}px ${esquerda}px)`;
    mira.style.opacity = '1';
    mira.style.transform = `translate(${miraX}px, ${miraY}px)`;
  }

  public sairFoco(evento: PointerEvent): void {
    const kicker = evento.currentTarget;

    if (!(kicker instanceof HTMLElement)) {
      return;
    }

    const nitido = kicker.querySelector('.sobre-kicker-nitido');
    const mira = kicker.querySelector('.sobre-kicker-mira');

    if (nitido instanceof HTMLElement) {
      nitido.style.removeProperty('opacity');
      nitido.style.removeProperty('clip-path');
    }

    if (mira instanceof HTMLElement) {
      mira.style.removeProperty('opacity');
      mira.style.removeProperty('transform');
    }
  }

  ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private efeitoLigado(): boolean {
    return window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    ).matches;
  }

  private limitar(valor: number, metade: number, tamanho: number): number {
    return Math.min(Math.max(valor, metade), Math.max(metade, tamanho - metade));
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
