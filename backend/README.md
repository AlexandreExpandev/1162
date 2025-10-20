# Timer Simples - Backend API

Backend REST API for Timer Simples application.

## Description

Um timer que inicia a contagem de tempo ao clicar em um botão.

## Features

- Decrementar Tempo: Permite ao usuário definir um tempo inicial e iniciar uma contagem regressiva até zero, exibindo o tempo restante em formato claro e legível.

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API

## Project Structure

```
src/
├── api/                    # API controllers (to be implemented)
├── routes/                 # Route definitions
│   └── v1/                # API Version 1
│       ├── externalRoutes.ts
│       ├── internalRoutes.ts
│       └── index.ts
├── middleware/            # Express middleware
│   ├── errorMiddleware.ts
│   └── index.ts
├── services/              # Business logic (to be implemented)
├── utils/                 # Utility functions
│   └── response/         # Response helpers
├── constants/            # Application constants
└── server.ts             # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in `.env`

### Development

Run the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in `.env`).

### Build

Build for production:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

## API Endpoints

### Health Check

- **GET** `/health` - Server health status

### API Version 1

Base URL: `/api/v1`

- External (public) routes: `/api/v1/external/...`
- Internal (authenticated) routes: `/api/v1/internal/...`

*Feature-specific endpoints will be documented as they are implemented.*

## Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `API_VERSION` - API version (default: v1)
- `CORS_ORIGINS` - Allowed CORS origins (comma-separated for production)

## Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "metadata": {
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Development Guidelines

- Follow TypeScript strict mode
- Use path aliases (`@/`) for imports
- Implement proper error handling
- Document all API endpoints
- Write clean, maintainable code

## License

ISC