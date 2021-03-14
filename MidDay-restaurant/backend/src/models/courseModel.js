const { model, Schema } = require('mongoose');

const courseSchema = new Schema({
  type: String,
  name: String,
  ingredients: Array,
  extra: Number,
});

module.exports = model('Course', courseSchema);
