const requestURL = 'https://raw.githubusercontent.com/MichelAngelo7/NovaLima/master/data/salary2values.json'
var request = new XMLHttpRequest()

request.open('GET', requestURL)

request.responseType = 'json'
request.send()


request.onload = function poc() {
  var salary = request.response
  document.getElementById("app").innerHTML =
    `
  ${salary}

    `

}

