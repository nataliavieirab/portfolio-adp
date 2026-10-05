import { Component } from '@angular/core';

interface Habilidade {
  imagem: string;
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.scss',
})
export class Habilidades {
  public readonly habilidades: Habilidade[] = [
    {
      imagem: 'https://skillicons.dev/icons?i=cs&theme=dark',
      titulo: 'C#',
      descricao: 'Desenvolvimento de aplicações robustas e soluções orientadas a objetos.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=html&theme=dark',
      titulo: 'HTML',
      descricao: 'Estruturação semântica e acessível de páginas e aplicações web.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=scss&theme=dark',
      titulo: 'SCSS',
      descricao: 'Criação de estilos organizados, reutilizáveis e responsivos.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=ts&theme=dark',
      titulo: 'TypeScript',
      descricao: 'Desenvolvimento de código JavaScript tipado e mais fácil de manter.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=angular&theme=dark',
      titulo: 'Angular',
      descricao: 'Construção de aplicações web escaláveis com componentes e TypeScript.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=rxjs&theme=dark',
      titulo: 'RxJS',
      descricao: 'Composição e gerenciamento de fluxos assíncronos e eventos.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=cypress&theme=dark',
      titulo: 'Cypress',
      descricao: 'Automação de testes de ponta a ponta para aplicações web.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=git&theme=dark',
      titulo: 'Git',
      descricao: 'Versionamento de código e colaboração segura em projetos de software.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=docker&theme=dark',
      titulo: 'Docker',
      descricao: 'Criação de ambientes isolados e consistentes para desenvolvimento e entrega.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=postgres&theme=dark',
      titulo: 'Postgres',
      descricao: 'Persistência de dados relacionais com confiabilidade e flexibilidade.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=azure&theme=dark',
      titulo: 'Azure',
      descricao: 'Hospedagem e operação de aplicações e serviços em nuvem.',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=vscode&theme=dark',
      titulo: 'VSCode',
      descricao: 'Ambiente de desenvolvimento extensível para produtividade e qualidade de código.',
    },
  ];
}
