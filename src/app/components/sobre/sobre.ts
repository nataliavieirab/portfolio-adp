import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { gsap } from 'gsap';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

@Component({
  imports: [],
  selector: 'app-sobre',
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre implements OnInit, AfterViewInit, OnDestroy {
  public readonly frases = [
    'Desenvolvedora Full-Stack em formação',
    'C# ⭒ TypeScript ⭒ JavaScript',
    '.NET ⭒ ASP.NET Core ⭒ Node.js',
  ];

  public readonly icones = ['bi bi-code-slash', 'bi bi-braces', 'bi bi-stack'];

  public readonly textoVisivel = signal('');

  private readonly host = inject(ElementRef<HTMLElement>);
  private contexto?: gsap.Context;
  private bongoAtivo = false;
  private indiceFrase = 0;
  private indiceLetra = 0;
  private apagando = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.tick();
  }

  ngAfterViewInit(): void {
    this.bongoAtivo = true;
    this.contexto = gsap.context(() => {
      this.iniciarBongo();
    }, this.host.nativeElement);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
    this.bongoAtivo = false;
    this.contexto?.revert();
  }

  private iniciarBongo(): void {
    const raiz = this.host.nativeElement;
    const selecionar = (selector: string) => `#bongo-cat ${selector}`;

    const notasDom = raiz.querySelectorAll('.note') as NodeListOf<Element>;
    notasDom.forEach((note) => {
      note.parentElement?.appendChild(note.cloneNode(true));
      note.parentElement?.appendChild(note.cloneNode(true));
    });

    const notas = selecionar('.music .note');
    const patas = {
      direita: {
        cima: selecionar('.paw-right .up'),
        baixo: selecionar('.paw-right .down'),
      },
      esquerda: {
        cima: selecionar('.paw-left .up'),
        baixo: selecionar('.paw-left .down'),
      },
    };

    const estilo = getComputedStyle(raiz.querySelector('.sobre-bongo') ?? raiz);
    const verde = estilo.getPropertyValue('--green').trim();
    const rosa = estilo.getPropertyValue('--pink').trim();
    const azul = estilo.getPropertyValue('--blue').trim();
    const laranja = estilo.getPropertyValue('--orange').trim();
    const ciano = estilo.getPropertyValue('--cyan').trim();

    gsap.set(notas, { scale: 0, autoAlpha: 1 });

    const animarPata = (selector: string) =>
      gsap.fromTo(
        selector,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.01,
          repeatDelay: 0.19,
          yoyo: true,
          repeat: -1,
        },
      );

    const linhaDoTempo = gsap.timeline();

    linhaDoTempo
      .add(animarPata(patas.esquerda.cima), 'start')
      .add(animarPata(patas.direita.baixo), 'start')
      .add(animarPata(patas.esquerda.baixo), 'start+=0.19')
      .add(animarPata(patas.direita.cima), 'start+=0.19')
      .timeScale(1.6);

    gsap.from(raiz.querySelectorAll('.terminal-code line'), {
      drawSVG: '0%',
      duration: 0.1,
      stagger: 0.1,
      ease: 'none',
      repeat: -1,
    });

    const listarNotas = gsap.utils.pipe(gsap.utils.toArray<Element>, gsap.utils.shuffle);
    const elementos = listarNotas(notas);
    const quantidade = elementos.length / 3;
    const grupo1 = elementos.splice(0, quantidade);
    const grupo2 = elementos.splice(0, quantidade);
    const grupo3 = elementos;

    const cor = gsap.utils.random(
      [verde, rosa, azul, laranja, ciano],
      true,
    );
    const rotacao = gsap.utils.random(-50, 50, 1, true);
    const direcao = (valor: number) => `${gsap.utils.random(['-', '+'])}=${valor}`;

    const animarNotas = (els: Element[]): gsap.core.Tween => {
      els.forEach((el) => {
        gsap.set(el, {
          stroke: cor(),
          rotation: rotacao(),
          x: gsap.utils.random(-25, 25, 1),
        });
      });

      return gsap.fromTo(
        els,
        {
          autoAlpha: 1,
          y: 0,
          scale: 0,
        },
        {
          duration: 2,
          autoAlpha: 0,
          scale: 1,
          ease: 'none',
          stagger: {
            from: 'random',
            each: 0.5,
          },
          rotation: direcao(gsap.utils.random(20, 30, 1)),
          x: direcao(gsap.utils.random(40, 60, 1)),
          y: gsap.utils.random(-200, -220, 1),
          onComplete: () => {
            if (!this.bongoAtivo) {
              return;
            }

            this.contexto?.add(() => animarNotas(els));
          },
        },
      );
    };

    linhaDoTempo
      .add(animarNotas(grupo1))
      .add(animarNotas(grupo2), '>0.05')
      .add(animarNotas(grupo3), '>0.25');
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
