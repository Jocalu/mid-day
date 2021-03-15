const md5 = require('md5');
const UserRestaurant = require('../models/userRestaurantModel');

function register(req, res) {
  const { email, password, name } = req.body;
  const user = new UserRestaurant({
    name,
    email,
    password: md5(password),
  });

  try {
    user.save();

    req.login(user, () => {
      res.json(user);
    });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function login(req, res) {
  res.status(200);
  res.json(req.body);
}

function logout(req, res) {
  res.status(200);
  req.logout();
}

module.exports = { register, login, logout };
