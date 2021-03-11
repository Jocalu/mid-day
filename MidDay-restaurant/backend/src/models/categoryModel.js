const { model, Schema } = require('mongoose');

const categorySchema = new Schema({
  name: String,
  image: String,
});

module.exports = model('Category', categorySchema);
