var express = require('express')
var server = express()
var path = require('path')

var config = require('./knexfile').development
var db = require('knex')(config)

var PORT = process.env.PORT || 3000
server.use(express.static(path.join(__dirname, 'public')));


server.listen(PORT, function() {
    console.log('Listening on port', PORT)
})

server.get('/finData', (req, res) => {
    db('fins')
        .then((fins) => {
            res.json(fins)
        })
})

server.get('/maskData', (req, res) => {
    db('masks')
        .then((fins) => {
            res.json(fins)
        })
})