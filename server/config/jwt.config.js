const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRETKEY = process.env.JWT_SECRET;