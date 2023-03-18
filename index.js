const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World! This is just something I edited.</h1>')
})

const PORT = 8080

console.log("Small change");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})