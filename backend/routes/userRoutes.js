//Imports
const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) => {
  res.json({message: 'Get Users'});
})

module.exports = router; //export router