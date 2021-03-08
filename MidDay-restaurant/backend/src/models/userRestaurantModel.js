const { model, Schema } = require('mongoose');

const userRestaurantSchema = new Schema({
  name: String,
  password: String,
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
});

module.exports = model('UserRestaurant', userRestaurantSchema);
