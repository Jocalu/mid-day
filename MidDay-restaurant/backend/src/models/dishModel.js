const { model, Schema } = require('mongoose');

const dishSchema = new Schema({
  type: String,
  name: String,
  ingredients: { type: Schema.Types.ObjectId, ref: 'Ingredient' },
  extra: Number,
});

module.exports = model('Dish', dishSchema);
