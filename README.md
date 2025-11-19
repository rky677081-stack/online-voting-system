# Indian Online Voting System

A secure, full-stack online voting system designed for the Indian government with modern web technologies.

## Features

### 🔐 Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting to prevent abuse
- Input validation and sanitization
- Secure vote casting with one-vote-per-user enforcement

### 👥 User Management
- Voter registration with Indian-specific validation
- Voter ID format validation (ABC1234567)
- Aadhar number validation (12 digits)
- Indian mobile number validation
- State and constituency-based voting

### 🗳️ Voting System
- Constituency-based candidate display
- Secure vote casting
- Vote confirmation process
- Prevention of multiple voting
- Real-time vote counting

### 👨‍💼 Admin Dashboard
- Candidate management (Add/Edit/Delete)
- Election results viewing
- Constituency-wise result filtering
- Vote statistics and analytics

## Technology Stack

### Backend
- **Node.js** with Express.js framework
- **MongoDB** for database storage
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Helmet** for security headers
- **CORS** for cross-origin requests
- **Rate limiting** for API protection

### Frontend
- **HTML5** with semantic markup
- **CSS3** with modern styling and animations
- **Vanilla JavaScript** for interactivity
- **Responsive design** for all devices
- **Indian flag color scheme** (Saffron, White, Green)

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Git

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start MongoDB:**
   - Make sure MongoDB is running on your system
   - Default connection: `mongodb://localhost:27017/indian_voting_system`

4. **Configure environment variables:**
   - Update `.env` file with your settings
   - Change `JWT_SECRET` to a secure random string

5. **Start the backend server:**
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Serve the files:**
   - Use any static file server
   - For development, you can use Live Server extension in VS Code
   - Or use Python: `python -m http.server 3000`
   - Or use Node.js: `npx serve .`

3. **Access the application:**
   - Open `http://localhost:3000` (or your server port)
   - Or open `index.html` directly in your browser

## Usage Guide

### For Voters

1. **Registration:**
   - Click "Register" on the homepage
   - Fill in all required details:
     - Full Name
     - Voter ID (format: ABC1234567)
     - Email address
     - Phone number (10 digits starting with 6-9)
     - Aadhar number (12 digits)
     - Constituency and State
     - Password (minimum 6 characters)

2. **Login:**
   - Use your Voter ID and password
   - You'll be redirected to the voting page

3. **Voting:**
   - View candidates for your constituency
   - Click "Vote" on your preferred candidate
   - Confirm your choice
   - Vote is cast securely (one vote per user)

### For Administrators

1. **Admin Login:**
   - Use admin credentials to access admin dashboard
   - Default admin account needs to be created manually in database

2. **Manage Candidates:**
   - Add new candidates with all required information
   - Edit existing candidate details
   - Remove candidates if needed

3. **View Results:**
   - See real-time voting results
   - Filter by constituency
   - View vote counts and percentages

## Database Schema

### User Collection
```javascript
{
  voterId: String (unique, format: ABC1234567),
  name: String,
  email: String (unique),
  phone: String (10 digits),
  aadharNumber: String (unique, 12 digits),
  password: String (hashed),
  constituency: String,
  state: String,
  hasVoted: Boolean,
  isVerified: Boolean,
  role: String (voter/admin)
}
```

### Candidate Collection
```javascript
{
  name: String,
  party: String,
  symbol: String,
  constituency: String,
  state: String,
  age: Number (min: 25),
  education: String,
  criminalRecord: Boolean,
  assets: Number,
  manifesto: String,
  voteCount: Number,
  isActive: Boolean
}
```

### Vote Collection
```javascript
{
  voterId: String (unique),
  candidateId: ObjectId,
  constituency: String,
  state: String,
  timestamp: Date,
  ipAddress: String
}
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new voter
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Candidates
- `GET /api/candidates/constituency/:constituency` - Get candidates by constituency
- `GET /api/candidates/all` - Get all candidates (admin only)
- `POST /api/candidates/add` - Add new candidate (admin only)
- `PUT /api/candidates/:id` - Update candidate (admin only)
- `DELETE /api/candidates/:id` - Delete candidate (admin only)

### Voting
- `POST /api/votes/cast` - Cast a vote
- `GET /api/votes/results/:constituency` - Get results by constituency (admin only)
- `GET /api/votes/results` - Get overall results (admin only)

## Security Measures

1. **Authentication & Authorization:**
   - JWT tokens for secure authentication
   - Role-based access control (voter/admin)
   - Token expiration (24 hours)

2. **Input Validation:**
   - Server-side validation for all inputs
   - Indian-specific format validation
   - SQL injection prevention

3. **Rate Limiting:**
   - API rate limiting (100 requests per 15 minutes)
   - Prevents brute force attacks

4. **Data Protection:**
   - Password hashing with bcrypt
   - Secure HTTP headers with Helmet
   - CORS configuration

5. **Vote Integrity:**
   - One vote per voter enforcement
   - Vote anonymity (no direct link between voter and choice)
   - Immutable vote records

## Customization

### Adding New States/Constituencies
1. Update the state dropdown in HTML files
2. Add constituency validation in backend
3. Update database with new geographical data

### Styling Customization
- Modify `frontend/css/style.css`
- Colors follow Indian flag theme
- Responsive design for all screen sizes

### Adding Features
- Extend API endpoints in backend
- Add new frontend pages
- Update database models as needed

## Deployment

### Backend Deployment
1. Set up MongoDB Atlas or cloud database
2. Update environment variables for production
3. Deploy to services like Heroku, AWS, or DigitalOcean
4. Configure HTTPS and security headers

### Frontend Deployment
1. Build static files
2. Deploy to CDN or static hosting (Netlify, Vercel)
3. Update API URLs for production
4. Configure domain and SSL

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for educational purposes. Please ensure compliance with local election laws and regulations before any real-world deployment.

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review API documentation
3. Check browser console for errors
4. Verify MongoDB connection

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error:**
   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Verify database permissions

2. **CORS Errors:**
   - Check frontend URL in backend CORS configuration
   - Ensure proper headers are set

3. **Authentication Issues:**
   - Verify JWT secret is set
   - Check token expiration
   - Clear browser localStorage if needed

4. **Voting Errors:**
   - Ensure user is verified
   - Check if user has already voted
   - Verify candidate exists in constituency

---

**Note:** This is a demonstration system. For production use in actual elections, additional security measures, legal compliance, and extensive testing would be required.