const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 3000

// Apply CSS to localhost: 3000
app.use(express.static("public"))

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))

// index.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
  const userURL = String(req.body.userURL)

  if (userURL === "") {
    console.log("User URl is empty")
  } else {
    console.log("User URL is: " + userURL)
  }
})

// Listener
app.listen(port, function () {
  console.log("Started server on port " + port)
})

// URL Shortener API
