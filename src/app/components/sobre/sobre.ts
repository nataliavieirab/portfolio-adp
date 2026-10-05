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
import {
  siAngular,
  siCsharp,
  siDocker,
  siDotnet,
  siGit,
  siJavascript,
  siNodedotjs,
  siPostgresql,
  siRabbitmq,
  siReact,
  siTypescript,
} from 'simple-icons';

gsap.registerPlugin(DrawSVGPlugin);

type Tecnologia = {
  nome: string;
  x: number;
  y: number;
  path: string;
  viewBox?: string;
};

const pathSql =
  'M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525';

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

  public readonly tecnologiasDireita: Tecnologia[] = [
    { nome: 'C#', x: 368, y: 48, path: siCsharp.path },
    { nome: '.NET', x: 348, y: 72, path: siDotnet.path },
    { nome: 'TypeScript', x: 392, y: 40, path: siTypescript.path },
    { nome: 'JavaScript', x: 356, y: 88, path: siJavascript.path },
    { nome: 'Angular', x: 380, y: 62, path: siAngular.path },
    { nome: 'React', x: 334, y: 54, path: siReact.path },
    { nome: 'Node.js', x: 404, y: 78, path: siNodedotjs.path },
  ];

  public readonly tecnologiasEsquerda: Tecnologia[] = [
    { nome: 'ASP.NET Core', x: 633, y: 118, path: siDotnet.path },
    { nome: 'SQL', x: 612, y: 148, path: pathSql, viewBox: '0 0 16 16' },
    { nome: 'PostgreSQL', x: 652, y: 132, path: siPostgresql.path },
    { nome: 'Docker', x: 620, y: 108, path: siDocker.path },
    { nome: 'RabbitMQ', x: 648, y: 160, path: siRabbitmq.path },
    { nome: 'Git', x: 636, y: 142, path: siGit.path },
  ];

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

    const notasDom = raiz.querySelectorAll('.tech') as NodeListOf<Element>;
    notasDom.forEach((tech) => {
      tech.parentElement?.appendChild(tech.cloneNode(true));
      tech.parentElement?.appendChild(tech.cloneNode(true));
    });

    const notas = selecionar('.music .tech');
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

    const cor = gsap.utils.random([verde, rosa, azul, laranja, ciano], true);
    const rotacao = gsap.utils.random(-18, 18, 1, true);
    const direcao = (valor: number) => `${gsap.utils.random(['-', '+'])}=${valor}`;

    const animarNotas = (els: Element[]): gsap.core.Tween => {
      els.forEach((el) => {
        gsap.set(el, {
          fill: cor(),
          stroke: 'none',
          rotation: rotacao(),
          x: gsap.utils.random(-45, 45, 1),
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
          rotation: direcao(gsap.utils.random(8, 16, 1)),
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
