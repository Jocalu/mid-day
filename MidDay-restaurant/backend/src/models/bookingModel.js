const { model, Schema } = require('mongoose');

const bookingSchema = new Schema({
  date: String,
  hour: String,
  bookingAdmin: { type: Schema.Types.ObjectId, ref: 'User' },
  pax: Number,
  people: [{ user: { type: Schema.Types.ObjectId, ref: 'User' }, selections: [String] }],
});

module.exports = model('Booking', bookingSchema);
