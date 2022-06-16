const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true}, 
    description: {type: String, required: true},   
    element: {type: String, required: true},  
    date: {type: Date, default: Date.now}
})

module.exports = model('Hero', schema);