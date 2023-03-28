const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")

const app = express()
const port = 3000

// URL Shortener API
const apiKey = "08b97c08dcmsh34f462cf45051eap1ca922jsnab77675da636"
const encodedParams = new URLSearchParams()

const options = {
  method: "POST",
  url: "https://url-shortener-service.p.rapidapi.com/shorten",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
  },
  data: encodedParams,
}

// Apply CSS to localhost: 3000
app.use(express.static("public"))

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))

// GET METHOD
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

// POST METHOD
app.post("/", function (req, res) {
  const userURL = String(req.body.userURL)

  if (userURL !== "") {
    encodedParams.append("url", userURL)
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.result_url)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
})

// LISTENER METHOD
app.listen(port, function () {
  console.log("Started server on port " + port)
})
