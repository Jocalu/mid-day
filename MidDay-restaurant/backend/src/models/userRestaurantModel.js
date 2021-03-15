const { model, Schema } = require('mongoose');
const md5 = require('md5');

const userRestaurantSchema = new Schema({
  name: String,
  email: String,
  password: String,
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
});

userRestaurantSchema.methods.validPassword = function validPassword(pwd) {
  return this.password === md5(pwd);
};

module.exports = model('UserRestaurant', userRestaurantSchema);
