//Imports
const express = require('express');
const router = express.Router();
const {} = require('../controllers/userController'); //import user controller
const {protect} = require('../middleware/authMiddleware'); //import protect middleware

//Create user Routes
router.get('/', (req, res) => {
  res.json({message: 'Get Users'});
})

router.post('/', (req, res) => {
  res.json({message: 'Create User'});
});

router.post('/login', (req, res) => {
  res.json({message: 'Login User'});
});

module.exports = router; //export router