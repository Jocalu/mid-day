const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
  name: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  capacity: Number,
  phone: Number,
  street: String,
  number: Number,
  city: String,
  zip: Number,
});

module.exports = model('Restaurant', restaurantSchema);
