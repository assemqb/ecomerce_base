# E-Commerce Platform with MongoDB

A fully functional e-commerce web application built using Node.js, Express, and MongoDB. This project implements CRUD operations for products, user registration and login, and order management. It demonstrates a well-structured project design and is deployed on Render.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running the Application Locally](#running-the-application-locally)
- [API Endpoints](#api-endpoints)
- [Database Design](#database-design)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Management:** Create, read, update, and delete products.
- **User Management:** User registration and login.
- **Order Management:** Create and retrieve orders.
- **MongoDB Integration:** NoSQL database design with collections for products, users, and orders.
- **RESTful API:** Standard API endpoints for data interactions.
- **Deployment:** Deployed on Render with a live URL.

## Project Structure

```
ecommerce-app/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── controllers/              # Controllers for handling API logic
│   ├── authController.js
│   ├── orderController.js
│   └── productController.js
├── middlewares/
│   └── errorMiddleware.js    # Global error handling middleware
├── models/                   # Mongoose models (database design)
│   ├── Order.js
│   ├── Product.js
│   └── User.js
├── routes/                   # API route definitions
│   ├── authRoutes.js
│   ├── orderRoutes.js
│   └── productRoutes.js
├── .env                      # Environment variables (not committed to GitHub)
├── package.json               # Project configuration and dependencies
├── server.js                  # Application entry point
└── README.md                  # Project documentation
```

## Installation & Setup

### Clone the repository:
```bash
git clone https://github.com/<your-github-username>/ecommerce-app.git
cd ecommerce-app
```

### Install dependencies:
```bash
npm install
```

### Configure Environment Variables:
Create a `.env` file in the root directory with the following content:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.bnfce.mongodb.net/ecommerce?retryWrites=true&w=majority
```
Replace `<username>` and `<password>` with your MongoDB Atlas credentials. Replace `ecommerce` with your desired database name.


## Running the Application Locally

### Start the server:
For development with auto-reload (using nodemon):
```bash
npm run dev
```
Or for production:
```bash
npm start
```

### Access the API:
Open your browser or use Postman to visit `http://localhost:5000`.

## API Endpoints

### Authentication

#### Register User
**POST /api/auth/register**
```json
{
  "name": "Your name",
  "email": "name@example.com",
  "password": "secret"
}
```

#### Login User
**POST /api/auth/login**
```json
{
  "email": "name@example.com",
  "password": "secret"
}
```

### Products

#### Get Products (with optional pagination & filtering)
**GET /api/products?page=1&limit=10&category=electronics**

#### Get Single Product
**GET /api/products/:id**

#### Create Product
**POST /api/products**
```json
{
  "name": "Laptop",
  "price": 999.99,
  "description": "High-performance laptop",
  "category": "electronics",
  "stock": 10
}
```

#### Update Product
**PUT /api/products/:id**
```json
{
  "price": 899.99,
  "stock": 8
}
```

#### Delete Product
**DELETE /api/products/:id**

### Orders

#### Create Order
**POST /api/orders**
```json
{
  "user": "user_id_here",
  "products": [
    {
      "product": "product_id_here",
      "quantity": 2
    }
  ]
}
```

#### Get Orders for a User
**GET /api/orders?user=user_id_here**

## Database Design

### Products:
- Fields: `name`, `price`, `description`, `category`, `stock`.

### Users:
- Fields: `name`, `email`, `password`, `role`.

### Orders:
- Fields: `user` (reference to User), `products` (array of product references and quantities), `orderStatus`.

You can view the actual collections and documents using MongoDB Atlas or a tool like MongoDB Compass.

## Deployment

This application is deployed on Render.

**Live URL:** [https://assems-ecomerce.onrender.com](https://assems-ecomerce.onrender.com)


