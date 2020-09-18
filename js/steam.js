const requestURL =  '../data/top100jogosSteam.json'
var request = new XMLHttpRequest()

request.open('GET', requestURL)
request.responseType ='json'
request.send()

request.onload = function(){
  var top100jogosSteam = request.response

  showTop100(top100jogosSteam)
}

//Site

const body = document.querySelector('body')
body.classList.add('body')
const tableDiv = document.createElement('div')






function showTop100(jsonObj){
  let top100 = jsonObj['0']
  console.log(top100)
  console.log(top100.length)


}