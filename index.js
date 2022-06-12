const express = require('express')
const app = express()
const port = 3001

app.get('/tin-tuc', (req, res) => {
    var a;
    var b;
    var c = a + b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})