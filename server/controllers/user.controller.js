const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
console.log('SECRET:', SECRET);

const register = async (req, res) => {
    try {
        const user = new User(req.body);
        const newUser = await user.save();
        console.log('User Created:', newUser);
        const userToken = jwt.sign(
            {_id: newUser._id, email: newUser.email, firstName: newUser.firstName, lastName: newUser.lastName, age: newUser.age}, SECRET
        );
        console.log('JWT:', userToken);
        res.status(201)
        .cookie('userToken', userToken, {expires: new Date(Date.now() + 90000000000000)})
        .json({successMessage: 'user created', user: newUser});
    } catch (error) {
        console.log('Register Error:', error);
        res.status(400).json(error);
    }
};

const login = async (req,res) => {
    const userDocument = await User.findOne({ email: req.body.email });
    console.log('USERDOC:', userDocument);
    if (!userDocument) {
        res.status(400).json({ error: 'Invalid Email/Password' });
    } else {
        try{
            const isPasswordValid = await bcrypt.compare(req.body.password, userDocument.password);
            if(!isPasswordValid) {
                res.status(400).json({error: 'Invalid Email/Password' });
            } else {
                const userToken = jwt.sign(
                    {_id: userDocument._id, email: userDocument.email, firstName: userDocument.firstName, lastName: userDocument.lastName, age: userDocument.age}, SECRET
                );
                console.log('JWT:', userToken);
                res.status(201)
                .cookie('userToken', userToken, { expires: new Date(Date.now() + 90000000000000) })
                .json({ successMessage: 'user loggedin', user: userDocument});
            }
        } catch (error) {
            console.log('Login Error:', error);
            res.status(400).json({error: 'Invalid Email/Password'});
        }
    }
};

const logout = (req, res) => {
    res.clearCookie('userToken');
    res.json({ successMessage: 'User logged out' });
};

const getLoggedInUser = async (req, res) => {
    try {
        const user = jwt.verify(req.cookies.userToken, SECRET);
        const currentUser = await User.findOne({ _id: user._id });
        res.json(currentUser);
    } catch (error) {
        res.status(401).json({ error });
    }
};

const findAllUsers = (req, res) => {
    User.find()
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        })
};

const deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log('ERROR IN delete user', err);
        res.status(400).json({ message: 'something went wrong in delete user', error: err });
      });
  };

module.exports = {
    register,
    login,
    logout,
    getLoggedInUser,
    findAllUsers,
    deleteUser,
};