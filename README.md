<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).


Coursey: https://roadmap.sh/projects/expense-tracker-api

# Expense Tracker API

A RESTful API for tracking personal expenses built with NestJS and PostgreSQL.

## Features

- 👤 User authentication with JWT
- 💰 CRUD operations for expenses
- 📊 Filter expenses by date ranges
- 🏷️ Categorize expenses
- 📝 Detailed expense tracking
- 🔒 Secure endpoints
- 📚 Swagger documentation

## Tech Stack

- NestJS
- PostgreSQL
- TypeORM
- JWT Authentication
- Swagger/OpenAPI

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd expense-tracker-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=expense_tracker
JWT_SECRET=your_jwt_secret
```

4. Run the application:
```bash
# development
npm run start:dev

# production
npm run build
npm run start:prod
```

## API Documentation

### Authentication Endpoints

#### Sign Up
- **POST** `/auth/signup`
- Creates a new user account
- Request Body:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```
- Response:
```json
{
  "token": "jwt_token",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

#### Login
- **POST** `/auth/login`
- Authenticates a user
- Request Body:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- Response:
```json
{
  "token": "jwt_token",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

### Expense Endpoints

All expense endpoints require an Authorization header:
```
Authorization: Bearer <jwt_token>
```

#### Create Expense
- **POST** `/expenses`
- Creates a new expense
- Request Body:
```json
{
  "description": "Grocery shopping",
  "amount": 150.50,
  "category": "GROCERIES"
}
```

#### Get All Expenses
- **GET** `/expenses`
- Retrieves all expenses for the authenticated user
- Query Parameters:
  - `startDate`: ISO date string (optional)
  - `endDate`: ISO date string (optional)
- Example: `/expenses?startDate=2024-11-01&endDate=2024-11-30`

#### Get Single Expense
- **GET** `/expenses/:id`
- Retrieves a specific expense by ID

#### Update Expense
- **PUT** `/expenses/:id`
- Updates an existing expense
- Request Body:
```json
{
  "description": "Updated description",
  "amount": 175.50,
  "category": "GROCERIES"
}
```

#### Delete Expense
- **DELETE** `/expenses/:id`
- Deletes an expense

### Available Expense Categories

```typescript
enum ExpenseCategory {
  GROCERIES = 'GROCERIES',
  LEISURE = 'LEISURE',
  ELECTRONICS = 'ELECTRONICS',
  UTILITIES = 'UTILITIES',
  CLOTHING = 'CLOTHING',
  HEALTH = 'HEALTH',
  OTHERS = 'OTHERS'
}
```

## Error Responses

### 401 Unauthorized
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": ["validation error messages"],
  "error": "Bad Request"
}
```

### 404 Not Found
```json
{
  "statusCode": 404,
  "message": "Expense not found"
}
```

## API Documentation UI

The API documentation is available through Swagger UI at:
```
http://localhost:3000/api
```

## Development

### Running Tests
```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

### Database Migrations
```bash
# generate migration
npm run typeorm:generate-migration

# run migrations
npm run typeorm:run-migrations
```

## Example Requests

### Create an Expense
```bash
curl -X POST http://localhost:3000/expenses \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Grocery shopping",
    "amount": 150.50,
    "category": "GROCERIES"
  }'
```

### Get Filtered Expenses
```bash
curl -X GET "http://localhost:3000/expenses?startDate=2024-11-01&endDate=2024-11-30" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, email iyanudina@gmail.com or create an issue in the repository.
