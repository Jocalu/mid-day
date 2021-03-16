const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
  admin: { type: Schema.Types.ObjectId, ref: 'UserRestaurant' },
  name: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  capacity: Number,
  phone: Number,
  street: String,
  number: Number,
  city: String,
  zipcode: String,
  image: String,
  menuprice: Number,
  bookings: Array,
  menu: { type: Schema.Types.ObjectId, ref: 'Menu' },
});

module.exports = model('Restaurant', restaurantSchema);
