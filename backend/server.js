//Imports
const express = require('express'); //backend framework
const dotenv = require('dotenv').config(); //environment variables
const port = process.env.PORT || 5000; //port

const app = express(); 

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});