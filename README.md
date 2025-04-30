# Try Before You Buy

A modern e-commerce platform that allows customers to try products at home before committing to purchase.

## Features

- Browse and select products to try at home
- Try 3-5 items in the comfort of your home
- Keep what you love, return the rest
- Only pay for items you decide to keep
- Hassle-free return process

## Tech Stack

- Frontend: React.js with Material-UI
- Backend: Node.js with Express
- Database: MongoDB
- Payment Processing: Stripe

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd try-before-you-buy
```

2. Install backend dependencies
```bash
npm install
```

3. Install frontend dependencies
```bash
cd client
npm install
```

4. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/try-before-buy
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

5. Start the development servers
```bash
# Start backend server
npm run dev

# In a new terminal, start frontend server
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
try-before-you-buy/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── pages/         # Page components
│       └── App.js         # Main application component
├── server.js              # Express server
├── models/                # MongoDB models
├── routes/                # API routes
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 