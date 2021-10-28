/////////////////////////////
// Import Dependencies
/////////////////////////////
const mongoose = require("./connection")
const Gift = require("./gift")

/////////////////////////////
// Seed Code
/////////////////////////////

// save the connection in a variable
const db = mongoose.connection

// make sure code doesn't run till connection is open
db.on("open", () => {
    // array of starter gifts
    // const startGifts = [
    //     { name: "Orange", color: "orange", readyToEat: false },
    //     { name: "Grape", color: "purple", readyToEat: false },
    //   ];

    // delete all gifts
    Gift.deleteMany({}).then((data) => {
        // seed the starter gifts
        Gift.create(startGifts).then((data) => {
            console.log(data)
            db.close()
        })
    })
})