# Project 2
#### By Rob Bock

## Project Summary

For my second project I've created a Holiday Gift List app, which allows users to create a list of gifts to buy for their loved ones during the holiday season. The app features user authentication and authorization, has CRUD functionality allowing users to create, edit, update, and delete gifts, and also displays useful information about each gift (i.e., who it's for, how much it costs, where to buy, etc.)

## Models

The main model is intended for showing/creating/updating/deleting gifts, and uses the schema below: 

giftsSchema = {
    giftName: { type: String, required: true },
    recipient: { type: String, required: true },
    price: { type: Number, min: 0 },
    img: String,
    whereToBuy: String,
    isBought: Boolean,
    isWrapped: Boolean,
    username: String
}

I also have a simple user model for user authentication/authorization, seen below: 

userSchema =  ({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

## Route Table

Here are my gift routes, in the table below:

| url | method | action |
|-----|--------|--------|
| /gift | get | display all gifts (index)|
| /gift/new | get | display form to make a new gift (new)|
| /gift/ | post | add a new gift to database (create)|
| /gift/:id | get | show info about a particular gift (show)|
| /gift/:id/edit | get | show edit form for a particular gift (edit)|
| /gift/:id | put | update a gift's data then redirect somewhere (update)|
| /gift/:id | delete | delete a gift's data then redirect somewhere (destroy)|


## User Stories

- Users are able create unique usernames with passwords, log in and log out, and save their lists in a database.
- The main index page of the app will show a list of all the user's created gifts.
- Users are able to look at gifts using their app and adjust info about each gift as needed.
- Individual gift pages display information about where to buy, price, etc.
- Certain information will be displayed differently if a gift has been bought and/or wrapped.
- If users choose to delete a gift, a modal will display double-checking that the user wants to delete a gift. A user must confirm via the modal before the gift is deleted.

## Challenges

- Creating the backend CRUD functionality was a relatively straightforward process based on what we've covered so far in our Software Engineering Immersive boot camp. Having worked on CRUD apps with RESTful routes for the past two weeks was great preparation for this project.
- I'd say the most challenging part was creating the visual layer of the app -- there were a lot of design desicions I had to make on my own, but I believe I ultimately created a straightforward and easy-to-understand app that users can quickly grasp without being bogged down by interpreting unnecessary visual details.

## List of Technologies

- Node.js, Express, Liquid, Mongoose, MongoDB for backend
- HTML, CSS, Javascript for frontend

## Other notes
- The snowfall effect was created by @pajasevi, and taken from their webpage here: https://pajasevi.github.io/CSSnowflakes/