const express = require('express')
const WebSocket = require('ws')

const app = express()
const port = 3000


app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/message/:message', (req, res) =>{
    if(wss && wss.clients) {
        wss.clients.forEach(
            client => {
                client.send(req.params.message)
            })
    }
    res.end()
})

const server = app.listen(port, () => {
    console.log(`The J-bot is listening on port: ${port}`)
})

//add the WebSocket to the server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');
});