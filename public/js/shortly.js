const input = document.getElementById("input-form")
const button = document.getElementById("button-form")

function sendData(data) {
  const XHR = new XMLHttpRequest()
  const FD = new FormData()

  // Push our data into our FormData object
  for (const [name, value] of Object.entries(data)) {
    FD.append(name, value)
  }

  // Define what happens on successful data submission
  XHR.addEventListener("load", (event) => {
    // alert('Yeah! Data sent and response loaded.');
    if (input.value === "") {
      input.placeholder = "Paste a link here!"
      button.textContent = "Paste a link!"
      button.style.background = "red"
      window.stop()
    } else {
      button.textContent = "Shorten it!"
      button.style.background = "hsl(180, 66%, 49%)"
      window.stop()
    }
  })

  // Define what happens in case of an error
  XHR.addEventListener("error", (event) => {
    alert("Oops! Something went wrong.")
  })

  // Set up our request
  XHR.open("POST", "http://localhost:3000/cors.php")

  // Send our FormData object; HTTP headers are set automatically
  XHR.send(FD)
}

button.addEventListener("click", () => {
  sendData({ test: "ok" })
})
