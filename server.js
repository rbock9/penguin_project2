////////////////////////////////////
// Import Dependencies
////////////////////////////////////
require("dotenv").config() // brings in .env vars
const express = require("express") // web framework
const morgan = require("morgan") // logger
const methodOverride = require("method-override") // to swap request methods
const path = require("path") // helper functions for file paths
const GiftsRouter = require("./controllers/gift") // router for gifts routes
// const UserRouter = require("./controllers/user") // router for user routes
// const session = require("express-session") // session middleware
// const MongoStore = require("connect-mongo") // save sessions in mongo

////////////////////////////////////
// App Object
////////////////////////////////////
// import liquid
const liquid = require("liquid-express-views")
// absolute path to views folder
const viewsFolder = path.resolve(__dirname, "views/")

// create an app object with liquid, passing the path to the views folder
const app = liquid(express(), {root: viewsFolder})


////////////////////////////////////
// Middleware
////////////////////////////////////
// logging
app.use(morgan("tiny"))
// ability to override request methods
app.use(methodOverride("_method"))
// ability to parse urlencoded from for submission
app.use(express.urlencoded({extended: true}))
// setup our public folder to serve files statically
app.use(express.static("public"))
// // middleware to create sessions (req.session)
// app.use(session({
//     secret: process.env.SECRET,
//     store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
//     resave: false
// }))


////////////////////////////////////
// Routing
////////////////////////////////////

app.get("/", (req, res) => {
    res.send("This App is working")  // change this line after adding sessions
})

// Register Gifts Router
app.use("/gifts", GiftsRouter)

// // Register User Router
// app.use("/user", UserRouter)



/////////////////////////////////////////////
// Setup Server Listener
/////////////////////////////////////////////
const PORT = process.env.PORT || 3000 // grabbing the port number from env
app.listen(PORT, console.log(`listening on port ${PORT}`))