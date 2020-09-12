const express = require('express')
const server = express()
const port = 3000

server.use(express.static('dist'))
server.get('/', (req, res) => {
    res.send('Hello World!')
})


server.listen(port, () => {
    console.log(`The J-bot is listening on port: ${port}`)
})