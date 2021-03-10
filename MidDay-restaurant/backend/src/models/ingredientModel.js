const { model, Schema } = require('mongoose');

const ingredientSchema = new Schema({
  name: String,
  category: String,
});

module.exports = model('Ingredient', ingredientSchema);
