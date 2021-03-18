const { model, Schema } = require('mongoose');

const menuSchema = new Schema({
  firstCourse: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  secondCourse: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  dessert: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  price: Number,
  date: { type: Date, default: Date.now },
});

module.exports = model('Menu', menuSchema);
