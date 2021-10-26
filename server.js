// Import Dependencies
const express = require("express")


// App Object
const app = express()


// Route
app.get("/", (req, res) => {
    res.send("This App is working")
})

// Server Listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))
