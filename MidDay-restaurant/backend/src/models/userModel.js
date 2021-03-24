const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  phone: Number,
  isNewUser: Boolean,
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
  allergies: [String],
  foodTastes: [String],
});

module.exports = model('User', userSchema);
