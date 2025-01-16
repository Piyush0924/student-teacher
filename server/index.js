const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToMongo = require('./db');

// Import routes
const adminRoutes = require('./routes/adminRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const messageRoutes = require('./routes/messageRoutes');

dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'https://student-teacher-appointment-booking-omega.vercel.app'], // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Enable cookies or authorization headers
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 



// MongoDB connection
connectToMongo();

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Tutor-Time API!');
});

// Mount routes
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/teachers', teacherRoutes);
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/messages', messageRoutes);

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
