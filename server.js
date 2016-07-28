const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const connections = [];

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/bower_components'))

io.on('connection', (socket) => {
  console.log('a user has connected')
  //new connection,
  socket.on('disconnect', () => {
    console.log('a user has disconnected')
  })
  socket.on('send msg', function (data) {
    console.log(data)
    // console.log(data.userName, data.msgText)
    io.sockets.emit('get msg', data)
  })
})

app.get('/', (req, res) => {
  res.sendFile('/public/index.html', {root: __dirname})
})

server.listen(port, () => {
  console.log(`server listening on port: ${port}`)
})
