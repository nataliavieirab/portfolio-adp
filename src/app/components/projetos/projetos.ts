import { Component } from '@angular/core';

interface Projeto {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlRepositorio: string;
  tecnologias: string[];
}

@Component({
  imports: [],
  selector: 'app-projetos',
  templateUrl: './projetos.html',
})
export class Projetos {
  public readonly projetos: Projeto[] = [
    {
      titulo: 'Gerador de Certificados Online',
      descricao:
        'A aplicação permite cadastrar cursos e alunos, gerar certificados em lote de forma assíncrona e acompanhar o processamento dos certificados. O projeto utiliza autenticação JWT, persistência relacional e mensageria para organizar o fluxo de geração e download dos arquivos.',
      urlImagem: '',
      urlRepositorio:
        'https://github.com/academiadoprogramador-fullstack/gerador-de-certificados-2026',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework',
        'ASP.NET Core',
        'MassTransit',
        'RabbitMQ',
        'SQL Server',
      ],
    },
    {
      titulo: 'DeliveryApp',
      urlImagem: '',
      urlRepositorio: 'https://github.com/academiadoprogramador-fullstack/delivery-app-2026',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework',
        'ASP.NET Core',
        'MassTransit',
        'RabbitMQ',
        'PostgreSQL',
        'JWT',
      ],
      descricao: `A API REST gerencia clientes, estabelecimentos e cardápios de uma plataforma de pedidos e entregas. O sistema oferece autenticação JWT, cadastro de produtos e complementos, ativação de estabelecimentos e consulta pública do cardápio vigente.`,
    },
    {
      titulo: 'Gerador de Provas',
      urlImagem: '?',
      urlRepositorio: 'https://github.com/academiadoprogramador-fullstack/gerador-de-provas-2026',
      tecnologias: ['HTML', 'CSS', 'C#', '.NET 10', 'Entity Framework'],
      descricao: `A aplicação organiza disciplinas, matérias e questões para permitir a criação de testes personalizados. Os testes podem ser gerados com questões selecionadas aleatoriamente, duplicados e exportados em PDF junto com seus respectivos gabaritos.`,
    },
  ];
}
