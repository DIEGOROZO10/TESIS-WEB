const express = require('express')
const app = express()
const port = 3000
const serialPort = require('./serialport')
app.get('/', async (req, res) => {
  let result = await serialPort()  
  res.send('data: ' + result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})