const { model, Schema } = require('mongoose');

const dishSchema = new Schema({
  type: String,
  name: String,
  ingredients: Array,
  extra: Number,
});

module.exports = model('Dish', dishSchema);
