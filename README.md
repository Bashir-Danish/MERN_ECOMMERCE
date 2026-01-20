# First MERN E-Commerce Application

A full-stack e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). This application provides a complete shopping experience with product browsing, cart management, user authentication, and order processing.

## Features

### User Management
- User registration and authentication
- Secure login/logout functionality
- User profile management
- Password change functionality
- Order history tracking

### Product Catalog
- Browse products with detailed information
- Product filtering by category and subcategory
- Price range filtering
- Star rating system
- Product search functionality
- Multiple product images per item

### Shopping Experience
- Add products to cart
- Wishlist functionality
- Real-time cart management
- Checkout process
- Order placement and tracking

### Blog System
- Blog post creation and management
- Blog listing with pagination
- Detailed blog post views
- Blog categorization

### Admin Features
- Product management
- Category and subcategory management
- Order management
- Blog post management
- User management

## Tech Stack

### Frontend
- **React** - UI library
- **Redux** - State management
- **CSS** - Styling
- **React Router** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### Development Tools
- **ESLint** - Code linting
- **npm** - Package manager

## Project Structure

```
first-mern-ecomm/
├── front-end/                 # React frontend application
│   ├── public/               # Static assets
│   │   └── assets/
│   │       ├── fonts/        # Custom fonts
│   │       └── images/       # Product and UI images
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   └── filtersPartials/  # Filter components
│   │   ├── pages/            # Page components
│   │   ├── App.js            # Main app component
│   │   ├── Store.js          # Redux store configuration
│   │   └── index.js          # Entry point
│   └── package.json
│
└── back-end/                  # Express backend application
    ├── src/
    │   ├── models/           # Mongoose schemas
    │   │   ├── userModel.js
    │   │   ├── productModel.js
    │   │   ├── orderModel.js
    │   │   ├── blogModel.js
    │   │   ├── category.js
    │   │   ├── subcategory.js
    │   │   └── rating.js
    │   ├── routes/           # API routes
    │   ├── middleware/       # Custom middleware
    │   ├── app.js            # Express app setup
    │   ├── db.js             # Database connection
    │   ├── index.js          # Server entry point
    │   └── data.js           # Seed data
    └── package.json
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd back-end
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `back-end` directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

4. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd front-end
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `front-end` directory:
```
REACT_APP_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Available Scripts

### Backend
- `npm start` - Start the server
- `npm run dev` - Start with nodemon (development mode)
- `npm run lint` - Run ESLint

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (admin)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

### Blog
- `GET /api/blogs` - Get all blog posts
- `GET /api/blogs/:id` - Get blog post details
- `POST /api/blogs` - Create blog post (admin)

## Database Models

### User
- Email, password, name
- Address information
- Order history
- Wishlist

### Product
- Title, description, price
- Category and subcategory
- Images
- Stock quantity
- Ratings and reviews

### Order
- User reference
- Products and quantities
- Total price
- Order status
- Shipping address

### Blog
- Title, content
- Author
- Category
- Publication date

## Features in Detail

### Authentication
- JWT-based authentication
- Secure password hashing
- Protected routes

### Shopping Cart
- Add/remove items
- Update quantities
- Persistent cart storage

### Wishlist
- Save favorite products
- Move items to cart

### Product Filtering
- Filter by category
- Filter by price range
- Filter by rating
- Search functionality

### Order Management
- Order placement
- Order tracking
- Order history

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email [your-email@example.com] or open an issue on GitHub.

## Acknowledgments

- MongoDB documentation
- Express.js guides
- React documentation
- Community contributors

---

**Note:** This is a learning project. For production use, ensure proper security measures, environment variable management, and error handling are in place.
