//Imports
const express = require('express'); //backend framework
const dotenv = require('dotenv').config(); //environment variables
const port = process.env.PORT || 5000; //port

const app = express(); 

//Middleware - used to parse the request body as JSON
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 

//Routes
app.use('/api/users', require('./routes/userRoutes')); //use userRoutes 

app.use('/api/items', require('./routes/itemRoutes')); //use itemRoutes

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});