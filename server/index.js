const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToMongo = require('./db'); // Importing the MongoDB connection function

// Importing routes
const adminRoutes = require('./routes/adminRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const messageRoutes = require('./routes/messageRoutes');

// Load environment variables
dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all origins

// Connect to MongoDB
connectToMongo()
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit if MongoDB connection fails
  });

// Test route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Tutor-Time API!');
});

// Mount routes
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/teachers', teacherRoutes);
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/messages', messageRoutes);

// Start server
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
