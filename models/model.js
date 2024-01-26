const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  text: { type: String, required: true },
  fileUrl: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('Data', dataSchema);