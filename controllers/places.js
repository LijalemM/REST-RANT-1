//const router = require('express').Router()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/cafeplace.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffeebar.jpg'
      }]
      
    res.render('places/index',{places})
})

app.get('/new', (req, res) => {
  res.render('places/new')
})


module.exports = app
//module.exports = router
