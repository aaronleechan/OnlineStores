const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    about:{type:String}
})

module.exports = mongoose.model('Food_dependencies',foodSchema);