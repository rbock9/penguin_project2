/////////////////////////
// Import Dependencies
/////////////////////////
const express = require("express") // express for Router function
const Gift = require("../models/gift.js") // gift model

/////////////////////////
// Create Router
/////////////////////////
const router = express.Router()

///////////////////////////////
// Router Middleware
///////////////////////////////
// middleware to check if user is logged in
// router.use((req, res, next) => {
//     // check if logged in
//     if (req.session.loggedIn){
//         // send to routes
//         next()
//     } else {
//         res.redirect("/user/login")
//     }
// })

////////////////////////////////////////////
// Gifts Routes
////////////////////////////////////////////

// //seed route - seed our starter data
// router.get("/seed", (req, res) => {
//     // array of starter gifts
//     // const startGifts = [
//     //     { name: "Orange", color: "orange", readyToEat: false },
//     //     { name: "Grape", color: "purple", readyToEat: false }
//     //   ];

//     // delete all gifts
//     Gift.deleteMany({}).then((data) => {
//         // seed the starter gifts
//         Gift.create(startGifts)
//         .then((data) => {
//             // send created gifts back as JSON
//             res.json(data)
//         })
//     })
// })

//////////////////////////////////////////
// Index route - get request - /gifts
router.get("/", (req, res) => {
    //find all the gifts
    Gift.find({})
    .then((gifts) => {
        // render the index template with the gifts
        res.render("gifts/index.liquid", {gifts})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})


//////////////////////////////////////////
// New route - get request - /gifts/new
router.get("/new", (req, res) => {
    res.render("gifts/new.liquid")
})


//////////////////////////////////////////
// Create route - post request - /gifts
router.post("/", (req, res) => {
    // create the new product
    Gift.create(req.body)
    .then((gift) => {
        // redirect the user back to the index route
        res.redirect("/gifts")
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })

})

//////////////////////////////////////////
// Edit route - get request - /gifts/:id/edit
router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get the gift with the matching id
    Gift.findById(id)
    .then((gift) => {
        // render the edit page template with the gift data
        res.render("gifts/edit.liquid", { gift })
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

//////////////////////////////////////////
// Update route - put request - "/gifts/:id"
router.put("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id
    
    // update the item with the matching id
    Gift.findByIdAndUpdate(id, req.body, {new: true})
    .then((gift) => {
        // redirect user back to index
        res.redirect("/gifts")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
}
)


//////////////////////////////////////////
// Destroy route - delete request - /gifts/:id
router.delete("/:id", (req, res) => {
    // grab the id from params
    const id = req.params.id
    // delete the gift
    Gift.findByIdAndRemove(id)
    .then((gift) => {
        // redirect user back to index
        res.redirect("/gifts")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
})


//////////////////////////////////////////
// Show route - get - /gifts/:id
router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get that particular gift from the database
    Gift.findById(id)
    .then((gift) => {
        // render the show template with the gift
        res.render("gifts/show.liquid", {gift})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})



/////////////////////////////
// export the router
/////////////////////////////
module.exports = router