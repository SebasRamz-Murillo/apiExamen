import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {
  console.log(socket.id)
})

Ws.io.on('monitores', (monitores) => {
  console.log(monitores)
})

