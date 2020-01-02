let app = require('express')()
let http = require('http').createServer(app)
var io = require('socket.io')(http)

http.listen(3000, () => {
    console.log('Running...')
})

io.on('connection', (socket) => {
    console.log('User connected...')
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
  })