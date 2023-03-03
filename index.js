const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

// Apply css to localhost: 3000
app.use(express.static("public"))

// index.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

// Listener
app.listen(port, function () {
  console.log("Started server on port " + port)
})
