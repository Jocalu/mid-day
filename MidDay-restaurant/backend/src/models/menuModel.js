const { model, Schema } = require('mongoose');

const menuSchema = new Schema({
  firstCourse: Array,
  secondCourse: Array,
  dessert: Array,
  price: Number,
});

module.exports = model('Menu', menuSchema);
