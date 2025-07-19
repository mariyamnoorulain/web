# Namal Alumni Network Backend

A comprehensive backend API for the Namal Alumni Network built with Node.js, Express, and MongoDB.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **User Management**: Complete user profiles with alumni-specific fields
- **Event Management**: Create, manage, and register for alumni events
- **Security**: Rate limiting, data sanitization, XSS protection, and more
- **Email Service**: Automated emails for welcome, password reset, etc.
- **File Upload**: Profile pictures and document uploads
- **Database Seeding**: Sample data for development

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. Clone the repository and navigate to backend:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/namal-alumni
JWT_SECRET=your-super-secret-jwt-key-here
CLIENT_URL=http://localhost:5173
```

5. Start the development server:
```bash
npm run dev
```

### Database Seeding

To populate your database with sample data:

```bash
npm run seed
```

This will create:
- Sample users (including an admin user)
- Sample events
- Test data for development

**Default Admin Credentials:**
- Email: `admin@namal.edu.pk`
- Password: `admin123`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Request password reset
- `PUT /api/auth/reset-password/:token` - Reset password

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update current user profile
- `DELETE /api/users/:id` - Delete user (admin only)

### Alumni
- `GET /api/alumni` - Get all alumni (paginated)
- `GET /api/alumni/:id` - Get alumni by ID
- `GET /api/alumni/search` - Search alumni
- `GET /api/alumni/stats` - Get alumni statistics
- `POST /api/alumni` - Create alumni profile
- `PUT /api/alumni/:id` - Update alumni profile
- `DELETE /api/alumni/:id` - Delete alumni profile

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get event by ID
- `POST /api/events` - Create new event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event
- `POST /api/events/register` - Register for event
- `POST /api/events/ideas` - Submit event idea
- `GET /api/events/registrations/my` - Get user's registrations
- `GET /api/events/ideas/my` - Get user's event ideas

## Security Features

- **Rate Limiting**: Prevents abuse with configurable limits
- **Data Sanitization**: Protection against NoSQL injection
- **XSS Protection**: Cleans user input to prevent XSS attacks
- **CORS**: Configured for secure cross-origin requests
- **Helmet**: Security headers for production
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Comprehensive validation for all inputs

## Development

### Running Tests
```bash
npm test
npm run test:watch
```

### Code Linting
```bash
npm run lint
npm run lint:fix
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/namal-alumni` |
| `JWT_SECRET` | JWT signing secret | Required |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:5173` |
| `EMAIL_HOST` | SMTP host for emails | Optional |
| `EMAIL_USER` | SMTP username | Optional |
| `EMAIL_PASS` | SMTP password | Optional |

## Project Structure

```
backend/
├── config/
│   └── database.js          # Database configuration
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── userController.js    # User management
│   ├── eventController.js   # Event management
│   └── alumniController.js  # Alumni-specific operations
├── middleware/
│   ├── auth.js             # Authentication middleware
│   ├── validation.js       # Input validation
│   ├── rateLimiter.js      # Rate limiting
│   ├── errorHandler.js     # Error handling
│   └── logger.js           # Request logging
├── models/
│   ├── User.js             # User schema
│   ├── Event.js            # Event schema
│   ├── EventRegistration.js # Event registration schema
│   └── EventIdea.js        # Event idea schema
├── routes/
│   ├── authRoutes.js       # Auth endpoints
│   ├── userRoutes.js       # User endpoints
│   ├── eventRoutes.js      # Event endpoints
│   └── alumniRoutes.js     # Alumni endpoints
├── scripts/
│   └── seedDatabase.js     # Database seeding
├── utils/
│   └── email.js            # Email service
├── app.js                  # Express app setup
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Run the test suite
6. Submit a pull request

## License

This project is licensed under the MIT License.