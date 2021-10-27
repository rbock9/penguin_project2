# Project 2
#### By Rob Bock

## Project Summary

For my second project I'd like to create a Christmas List app, which allows users to create a list of gifts to buy for their loved ones during the holiday season. The app will allow users to enter multiple gifts, along with useful information about the gift (i.e., who it's for, how much it costs, where to buy, etc.)

## Models

Still a work in progress, but here's the current idea:

const giftsSchema = {
    to: String,
    from: String,
    whereToBuy: String,
    img: String,
    price: Number,
    maker: String,
    wrapped: Boolean
}

## Route Table

List your routes in a table

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

- users should be able to look at gifts using their app and adjust info about each gift as needed
- each gift should display information about where to buy, price, etc
- certain information will be displayed differently if a gift has been bought and/or wrapped

## Challenges

- detail roadblocks here and anything you did to overcome whether you did or didn't

## List of Technologies

- Node.js, Express, Mongoose, Liquid
- Javascript, jQuery, HTML, CSS
- and more!