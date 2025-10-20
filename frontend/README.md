# Timer Simples

Um timer que inicia a contagem de tempo ao clicar em um botão.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Entry point
│   ├── providers.tsx      # Providers globais
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
├── domain/               # Domínios de negócio
├── core/                 # Componentes e utilitários core
│   ├── components/       # Componentes genéricos
│   ├── lib/             # Configurações de bibliotecas
│   ├── utils/           # Funções utilitárias
│   └── types/           # Tipos globais
└── assets/              # Assets estáticos
    └── styles/          # Estilos globais
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente conforme necessário.

## Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3001`

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Arquitetura

Este projeto segue uma arquitetura baseada em domínios funcionais:

- **app/**: Configuração e inicialização da aplicação
- **pages/**: Componentes de página para roteamento
- **domain/**: Lógica de negócio organizada por domínio
- **core/**: Componentes e utilitários reutilizáveis
- **assets/**: Recursos estáticos

### Princípios

1. **Separação de Responsabilidades**: Cada módulo tem uma responsabilidade clara
2. **Reutilização**: Componentes core são genéricos e reutilizáveis
3. **Escalabilidade**: Estrutura preparada para crescimento
4. **Type Safety**: TypeScript em todo o projeto
5. **Performance**: Lazy loading e code splitting

## Features

- [x] Estrutura base da aplicação
- [x] Roteamento configurado
- [x] Integração com backend REST API
- [x] Gerenciamento de estado com TanStack Query
- [x] Componentes core (Loading, Error Boundary, etc.)
- [ ] Feature: Timer com contagem regressiva

## Contribuindo

1. Crie uma branch para sua feature
2. Faça commit das suas alterações
3. Push para a branch
4. Abra um Pull Request