var express = require('express')
var server = express()
var path = require('path')

var config = require('./knexfile').development
var db = require('knex')(config)

var PORT = process.env.PORT || 3000
server.use(express.static(path.join(__dirname, 'public')))

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})

// ----------------  API ROUTES   ------------------------------------

// get category data. It's dope yo!
server.get('/data/:topic', (req, res) => {
  const topic = req.params.topic
  db(`${topic}`)
    .then((topicItems) => {
      res.json(topicItems)
    })
})

server.get('/data/categories', (req, res) => {
  // db call to get categories.
  db('categories').then((categoriesData) => {
    res.send(categoriesData)
  })
})
