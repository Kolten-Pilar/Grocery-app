//Imports
const path = require('path'); //path module
const express = require('express'); //backend framework
const dotenv = require('dotenv').config(); //environment variables
const colors = require('colors'); //colors for console
const port = process.env.PORT || 5000; //port
const {errorHandler} = require('./middleware/errorMiddleware'); //error handler
const connectDB = require('./config/db'); //database connection

connectDB(); //connect to database

const app = express(); 

//Middleware - used to parse the request body as JSON
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 

//Routes
app.use('/api/users', require('./routes/userRoutes')); //use userRoutes 

app.use('/api/items', require('./routes/itemRoutes')); //use itemRoutes

// Serve frontend build files in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => {
    res.send('Please set to production mode');
  })
}

//Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});