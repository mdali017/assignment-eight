# Library Management Assignment

A simple backend project for managing a library system, built with Express and Prisma. This project enables basic CRUD operations on library resources and provides a solid foundation for a scalable library management backend.

## Live URL
- [Live Deployment](https://library-management-assignment-gamma.vercel.app) _(Replace this with the actual live URL once deployed)_

## Technology Stack & Packages
- **Node.js**: JavaScript runtime environment
- **Express**: Web framework for handling HTTP requests
- **Prisma**: ORM (Object-Relational Mapper) for database management
- **TypeScript**: Adds type safety to JavaScript
- **ts-node-dev**: TypeScript development environment with hot-reloading
- **CORS**: Middleware for Cross-Origin Resource Sharing

### Key Packages
- `@prisma/client`: Client-side library for Prisma
- `@types/cors`, `@types/express`, `@types/node`: TypeScript type definitions for Node.js, CORS, and Express

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- PostgreSQL or any Prisma-supported database

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/mdali017/assignment-eight.git
   cd library_management_assignment

#### 2. Install dependencies:
yarn


#### 3. Set up the database:
*** Configure your database connection in .env file (refer to .env.example for required variables).

npx prisma migrate dev --name init

#### 4. Generate Prisma client:
run:  npx prisma generate
#### 4. Start the server in development mode:
run:  yarn dev
#### 4. For production build::
run: npm run build
     npm start
#### 4. For GUI:
run:  npx prisma studio

## Key Features & Functionality
User Management: CRUD operations for managing library users
Book Inventory: Manage a catalog of books, including details like title, author, and availability
Lending System: Tracks which users have borrowed which books and when they’re due for return
Middleware for CORS: Ensures secure cross-origin requests



