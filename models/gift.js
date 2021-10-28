///////////////////////////////////
// Import Dependencies
///////////////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection")

///////////////////////////////////////////
// Create our Gifts Model
///////////////////////////////////////////
// destructuring Schema and model from mongoose
const {Schema, model} = mongoose 

// make a gifts schema
// const giftSchema = new Schema({
//     name: String,
//     color: String,
//     readyToEat: Boolean,
//     username: String
// })

// Make the Gift Model
const Gift = model("Gift", giftSchema)

// log the model to make sure it exists
// console.log(Gift)

///////////////////////////////////////
// Export the gift model
///////////////////////////////////////
module.exports = Gift
