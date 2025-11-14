const mongoose = require('mongoose');

const insuredSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  phone: String
});

module.exports = mongoose.model('Insured', insuredSchema);