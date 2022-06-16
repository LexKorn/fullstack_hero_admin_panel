const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true}, 
    label: {type: String, required: true},   
    className: {type: String, required: true}
})

module.exports = model('Filter', schema);