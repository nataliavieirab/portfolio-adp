import { Component } from '@angular/core';

type CategoriaProjeto = 'dotnet' | 'node' | 'angular';
type ValorFiltro = 'todos' | CategoriaProjeto;

interface LinkExtra {
  rotulo: string;
  url: string;
}

interface Projeto {
  id: string;
  titulo: string;
  contexto: string;
  descricao: string;
  // destaques: string[];
  tecnologias: string[];
  categoria: CategoriaProjeto;
  linksExtras: LinkExtra[];
  urlRepositorio: string;
  urlDemo: string;
  urlImagem: string;
}

interface FiltroProjeto {
  rotulo: string;
  valor: ValorFiltro;
}

@Component({
  selector: 'app-projetos',
  imports: [],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos {
  public readonly filtros: FiltroProjeto[] = [
    { rotulo: 'Todos', valor: 'todos' },
    { rotulo: '.NET', valor: 'dotnet' },
    { rotulo: 'Node.js', valor: 'node' },
    { rotulo: 'Angular', valor: 'angular' },
  ];

  public filtroAtivo: ValorFiltro = 'todos';

  public readonly projetos: Projeto[] = [
    {
      id: 'controle-de-bar',
      titulo: 'Controle de Bar',
      contexto: 'Academia do Programador',
      descricao:
        'Sistema fullstack multi-tenant de bar: mesas, garçons, produtos, contas e pedidos, com Identity, filtros por tenant e deploy no Azure.',
      // destaques: [
      //   'ASP.NET Identity (cookies + roles) e query filters por usuário',
      //   'Testes de unidade, integração (EF InMemory) e E2E com Playwright',
      //   'CI/CD no GitHub Actions com migrate e Azure Web App',
      // ],
      tecnologias: ['.NET 10', 'ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Playwright', 'Azure'],
      categoria: 'dotnet',
      linksExtras: [],
      urlRepositorio: 'https://github.com/nataliavieirab/bar-management-system',
      urlDemo:
        'https://controle-de-bar-dotsisters-c5a3dng5a2b9gahm.canadacentral-01.azurewebsites.net/',
      urlImagem: '/projects/controle-de-bar.gif',
    },
    {
      id: 'escola-de-cursos',
      titulo: 'Escola de Cursos',
      contexto: 'Academia do Programador',
      descricao:
        'Gestão acadêmica de cursos, módulos e aulas, instrutores, categorias, turmas, alunos e matrículas — arquitetura em camadas e SQL Server.',
      // destaques: [
      //   'Camadas Domínio / Aplicação / Infra / Presentation',
      //   'EF Core Code First, AutoMapper e FluentResults',
      //   'Deploy no Azure App Service',
      // ],
      tecnologias: ['.NET 10', 'MVC', 'EF Core', 'SQL Server', 'Azure'],
      categoria: 'dotnet',
      linksExtras: [],
      urlRepositorio: '',
      urlDemo: '',
      urlImagem: '',
    },
    {
      id: 'francheasy',
      titulo: 'FranchEasy API',
      contexto: 'TCC UFSC 2024',
      descricao:
        'API REST multi-tenant para software comercial, com foco em delivery: hierarquia Sistema → Organização (schema PostgreSQL isolado) → Lojas, com catálogo, pedidos, caixas e RBAC.',
      // destaques: [
      //   'Multi-tenancy por schema isolado no PostgreSQL',
      //   'JWT + Passport, bcrypt e RBAC (papéis de sistema e customizados)',
      //   'NestJS, TypeORM e Docker Compose para o banco local',
      // ],
      tecnologias: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'JWT', 'RBAC'],
      categoria: 'node',
      linksExtras: [
        {
          rotulo: 'Monografia UFSC',
          url: 'https://repositorio.ufsc.br/handle/123456789/262497',
        },
      ],
      urlRepositorio: '',
      urlDemo: '',
      urlImagem: '',
    },
  ];

  private readonly imagensQuebradas = new Set<string>();

  public selecionarFiltro(valor: ValorFiltro): void {
    this.filtroAtivo = valor;
  }

  public get projetosVisiveis(): Projeto[] {
    if (this.filtroAtivo === 'todos') {
      return this.projetos;
    }

    return this.projetos.filter((projeto) => projeto.categoria === this.filtroAtivo);
  }

  public imagemQuebrada(id: string): boolean {
    return this.imagensQuebradas.has(id);
  }

  public registrarImagemQuebrada(id: string): void {
    this.imagensQuebradas.add(id);
  }
}
