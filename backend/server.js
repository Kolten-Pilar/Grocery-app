//Imports
const express = require('express'); //backend framework
const dotenv = require('dotenv').config(); //environment variables
const port = process.env.PORT || 5000; //port

const app = express(); 

//Routes
app.get('/api/users', (req, res) => {
  res.json({message: 'Get Users'});
})

app.get('/api/items', (req, res) => {
  res.json({message: 'Get Items'});
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});