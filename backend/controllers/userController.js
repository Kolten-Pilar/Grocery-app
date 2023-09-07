//imports
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); //for hashing passwords
const asyncHandler = require('express-async-handler'); 
const User = require('../models/userModel'); //import User model
