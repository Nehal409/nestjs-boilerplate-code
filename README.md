# NestJS Boilerplate Project

This project is a boilerplate setup for building a NestJS application with Docker, MySQL, TypeORM, and various other configurations and tools. It is intended to provide a solid starting point for future projects.

## Features

1. **Docker Setup**: Includes Docker configuration for containerizing the application.
2. **MySQL Database Setup**: Configured to use a MySQL database.
3. **TypeORM Setup with Migrations**: Integrated TypeORM for database interactions, including initial migrations for the `users` table.
4. **Middleware Setup**: Includes error handling and response formatting middleware.
5. **Swagger API Docs Setup**: Automatically generates API documentation using Swagger.
6. **Configurations Setup**: Centralized configuration management.
7. **.env.sample File**: Template for environment variables. Users must create a `.env` file in the root directory and copy contents from `.env.sample`.

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-repo/nestjs-boilerplate.git
cd nestjs-boilerplate
```

### Setup Environment Variables

1. Copy the contents of `.env.sample` to a new `.env` file in the root directory:

    ```bash
    cp .env.sample .env
    ```

2. Update the `.env` file with your specific environment variables.

### Running the Application

To build and run the application using Docker, execute the following command:

```bash
docker-compose up --build
```

This will start the NestJS application and MySQL database in Docker containers.

## TypeORM and Migrations

This boilerplate uses TypeORM for database interactions. Initial migrations include the setup for a `users` table. To run migrations, use the following commands:

```bash
# Run migrations
npm run migrate:run

# Revert migrations
npm run migrate:revert

# Generate a new migration
npm run migrate:create MigrationName
```

## Swagger API Documentation

API documentation is automatically generated using Swagger. After starting the application, you can access the Swagger UI at `http://localhost:8000/api/v1/docs`.