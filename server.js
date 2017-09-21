var express = require('express')
var server = express()
var path = require('path')

var config = require('./knexfile').development
var db = require('knex')(config)

var port = process.env.PORT || 3000
server.use(express.static(path.join(__dirname, 'public')))

server.listen(port, function () {
  console.log('Listening on port', port)
})

// ----------------  API ROUTES   --------------- //

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
