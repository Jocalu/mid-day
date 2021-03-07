const { model, Schema } = require('mongoose');

const userRestaurantSchema = new Schema({
  name: String,
  password: String,
});

module.exports = model('UserRestaurant', userRestaurantSchema);
