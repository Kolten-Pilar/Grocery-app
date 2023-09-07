//Imports
const express = require('express');
const router = express.Router();
const { getMe, registerUser, loginUser } = require('../controllers/userController'); //import user controller
const {protect} = require('../middleware/authMiddleware'); //import protect middleware



//Create user Routes
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router; //export router