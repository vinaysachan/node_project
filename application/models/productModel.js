const mongoose  = require('mongoose');

var prodcutSchema = new mongoose.Schema({
    name: String,
    price: Number,
    photo: String
  }, { collection: 'product' });

var ProductModel = mongoose.model('product', prodcutSchema);

module.exports = ProductModel;