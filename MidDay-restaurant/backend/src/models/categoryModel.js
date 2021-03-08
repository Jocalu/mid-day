const { model, Schema } = require('mongoose');

const categorySchema = new Schema({
  name: String,
  photo: String,
});

module.exports = model('Category', categorySchema);
