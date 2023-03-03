const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

const topNavWidth = () => {
  var x = document.getElementById("top-Nav")
  if (x.className === "top-Nav") {
    x.className += " responsive"
  } else {
    x.className = "top-Nav"
  }
}

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))

// index.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

// Listener
app.listen(port, function () {
  console.log("Started server on port " + port)
})
