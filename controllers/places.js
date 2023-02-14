//const router = require('express').Router();
const express = require('express');
const app = express();
const db = require('../models')
const places = require ('../models/places.js')

//const router = require('express').Router()

app.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err) 
    res.render('error404')
  })
})

app.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

app.get('/new', (req, res) => {
  res.render('places/new')
})

app.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

app.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

app.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

app.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

app.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

app.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})










module.exports = app
//module.exports = router
