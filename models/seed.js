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
    const startGifts = [
        {
          giftName: 'Beans',
          recipient: 'Mom',
          price: 5,
          img: 'https://imgur.com/LEHS8h3.png',
          whereToBuy: 'Amazon',
          isWrapped: true
        }, {
          giftName: 'Bones',
          recipient: 'Dad',
          price: 25,
          img: 'https://imgur.com/dalOqwk.png',
          whereToBuy: 'Macys',
          isWrapped: false
        }, {
          giftName: 'Bins',
          recipient: 'Son',
          price: 200,
          img: 'https://imgur.com/ptWDPO1.png',
          whereToBuy: 'Container Store',
          isWrapped: false
        }
    ]

    // delete all gifts
    Gift.deleteMany({}).then((data) => {
        // seed the starter gifts
        Gift.create(startGifts).then((data) => {
            console.log(data)
            db.close()
        })
    })
})