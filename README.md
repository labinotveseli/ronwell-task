# E-commerce Backend Application

<b>This project is a backend application for e-commerce platform built using
TypeScript, PostgreSQL for data storage, and TypeORM as the ORM library. It
implements MVC architecture and provides CRUD operations for managing
products.</b>

## Branches

### This project is organized into three main branches:

<b>Production (Default):</b> This branch contains the final version of the
codebase that is ready for deployment to a production environment.

<b>Staged:</b> The staged branch is used for incorporating changes and features
into the project.

<b>Initial-Boilerplate:</b> This branch contains the initial boilerplate
codebase for the project. It includes the basic project setup, configuration
files, and initial directory structure.

## Setup

<h4>Prerequisites</h4>
 - Node.js installed on your machine
 - Docker installed (if using Docker for PostgreSQL)

## Clone the Repository

- git clone https://github.com/labinotveseli/ronwell-task.git
- cd ronwell-task

## Install Dependencies

- npm install

## Run the Application

- npm start
- The application will start on <b>port 3000</b> by default:
  http://localhost:3000/products

## Start the PostgreSQL database using Docker Compose

- Docker should be installed, and you can use the provided Docker Compose file
  to set up a PostgreSQL database locally: <b>docker compose up -d</b>
- This command will start a PostgreSQL container with the default credentials
  ('postgres' username and 'postgres' password) on port 5432.

## Start the PostgreSQL database using Docker Compose

- Docker should be installed, and you can use the provided Docker Compose file
  to set up a PostgreSQL database locally: <b>docker compose up -d</b>
- This command will start a PostgreSQL container with the default credentials
  ('postgres' username and 'postgres' password) on port 5432.

## API Documentation

### Endpoints

- **GET /products:**: Get a list of all products.
- **GET /products/:id**: Get details for a specific product.
- **POST /products**: Create a new product.
- **PUT /products/:id**: Update/Edit product information.
- **DELETE /products/:id**: Remove a product.

## Sample API Calls

- **Get all products**: <b>http://localhost:3000/products</b>
- **Get Product by Id**: <b>http://localhost:3000/products/1</b>

## Chosen ORM: TypeORM; simplifies database interactions BY:

- **Entity Definition:** TypeORM allows defining entities using TypeScript
  classes. In the Product class, the @Entity() decorator marks it as an entity,
  and each property corresponds to a column in the database table.
- **Decorators:** Annotations like @PrimaryGeneratedColumn() and @Column()
  simplify column definition.
- **CRUD Operations:** Built-in methods handle CRUD tasks without manual SQL
  writing. In the ProductController class, methods like all(), one(), save(),
  update(), and remove() interact with the database using the productRepository
  obtained from the AppDataSource.
- **Query Building:** TypeORM's query builder API allows constructing complex
  SQL queries using a fluent interface. For example, in the ProductController
  class, the find() and findOne() methods fetch products from the database based
  on specified conditions.
- **Entity Manager:** Centralized interface for managing entities and
  transactions, ensuring data consistency.
