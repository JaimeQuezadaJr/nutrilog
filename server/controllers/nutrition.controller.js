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
  findNutritionByUser: (req, res) => {
    console.log('IS THIS WORKING', req.params.id);
    User.findOne({ _id: req.params.id }).then((user) => {
      console.log('USERID', user._id);
      Nutrition.find({ createdBy: user._id })
        .populate('createdBy', 'firstName lastName age email') 
        .then((nutritions) => {
          console.log('nutritionsSS', nutritions);
          res.json(nutritions);
        })
        .catch((err) => {
          console.log('ERROR IN Get all nutrition by user', err);
          res.status(400).json({ message: 'something went wrong in find all nutrition by user', error: err });
        })
    })
    .catch((err) => {
      console.log('ERROR IN Get all nutrition by user', err);
      res.status(400).json({ message: 'something went wrong in find all nutrition by user', error: err });
    });
  },
};