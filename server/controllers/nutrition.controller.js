const Nutrition = require('../models/nutrition.model');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const User = require('../models/user.model');
module.exports = {
    findAllNutritions: (req, res) => {
    Nutrition.find({})
      .populate('createdBy', 'firstName lastName age email')
      .then((nutritions) => {
        res.json(nutritions);
      })
      .catch((err) => {
        console.log('ERROR IN Get all', err);
        res.status(400).json({ message: 'something went wrong in find all nutrition goals', error: err });
      });
  },
};