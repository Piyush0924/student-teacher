const express = require('express');
const app = express();
// mouting routes
const adminRoutes = require('./routes/adminRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const messageRoutes = require('./routes/messageRoutes');

// cors
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

// middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
const connectToMongo = require('./db');
connectToMongo();

app.get('/', (req, res) => {
  res.send('Welcome to the Tutor!');
});

// mouting routes
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/teachers', teacherRoutes);
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/messages', messageRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('App listening on port ' + port);
});