const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user.model');
const CourseRoutes = require('./routes/course.routes');
const Lesson = require('./model/lesson.model');
const Progress = require('./model/progress.model');
const Resource = require('./model/resource.model');
const DB_URL = 'mongodb://127.0.0.1:27017/E-Learning_System';

const app = express();

// Middleware to parse JSON and url-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/course', CourseRoutes);
app.use('/user', User);
app.use('/lesson', Lesson);
app.use('/progress', Progress);
app.use('/resource', Resource);

// Connect to MongoDB
mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected to the database');
    // Start the Express app after successfully connecting to MongoDB
    app.listen(8002, () => {
      console.log('Server is running at port 8002');
    });
  })
  .catch((error) => {
    console.error(`Failed to connect to the database: ${error.message}`);
  });

// Event listener for MongoDB connection error
mongoose.connection.on('error', (error) => {
  console.error(`MongoDB connection error: ${error.message}`);
});

// Event listener for MongoDB connection close
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB connection disconnected');
});
