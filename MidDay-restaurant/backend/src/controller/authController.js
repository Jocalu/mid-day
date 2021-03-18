const md5 = require('md5');
const UserRestaurant = require('../models/restaurantModel');

function register(req, res) {
  const { password } = req.body;
  const user = new UserRestaurant({
    ...req.body,
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
  res.json(req.user);
}

module.exports = { register, login };
