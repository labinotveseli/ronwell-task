# E-commerce Backend Application

<p>This project is a backend application for e-commerce platform built using TypeScript, PostgreSQL for data storage, and TypeORM as the ORM library. It implements MVC architecture and provides CRUD operations for managing products.</p>

## Branches

### This project is organized into three main branches:

<b>Production (Default):</b> This branch contains the final version of the
codebase that is ready for deployment to a production environment. It represents
the stable and tested version of the application.

<b>Staged:</b> The staged branch is used for incorporating changes and features
into the project. Developers create feature branches from this branch, implement
their changes, and then submit pull requests back to the staged branch for
review and integration.

<b>Initial-Boilerplate:</b> This branch contains the initial boilerplate
codebase for the project. It includes the basic project setup, configuration
files, and initial directory structure. Developers branch off from this branch
to start working on new features or fixes.

## Setup

<h4>Prerequisites</h4>
 - Node.js installed on your machine
 - Docker installed (if using Docker for PostgreSQL)

## Clone the Repository

- git clone https://github.com/labinotveseli/ronwell-task.git
- cd ronwell-task

## Set Up PostgreSQL

- If you have Docker installed, you can use the provided Docker Compose file to
  set up a PostgreSQL database: <b>docker-compose up -d</b> This command will
  start a PostgreSQL container with the default credentials (postgres username
  and postgres password) on port 5432.

## Install Dependencies

- npm install

## Run the Application

- npm start
- The application will start on <b>port 3000</b> by default.

## API Documentation

### Endpoints

- **GET /products**: Get a list of all products.
- **GET /products/:id**: Get details for a specific product.
- **POST /products**: Create a new product.
- **PUT /products/:id**: Update product information.
- **DELETE /products/:id**: Delete a product.

## Sample API Calls

- **Get all products**: <b>http://localhost:3000/products</b>
- **Get Product by Id**: <b>http://localhost:3000/products/1</b>
