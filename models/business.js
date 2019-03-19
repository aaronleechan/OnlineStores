const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const businessSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    address: {type: String, required: true},
    owner: {type: String, required: true}
})
module.exports = mongoose.model('Business_dependencies',businessSchema);