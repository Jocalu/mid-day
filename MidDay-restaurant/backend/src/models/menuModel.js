const { model, Schema } = require('mongoose');

const menuSchema = new Schema({
  firstCourse: Array,
  secondCourse: Array,
  dessert: Array,
});

module.exports = model('Menu', menuSchema);
