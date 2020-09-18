const requestURL = '../data/tramitacaoDeProjetos.json'
var request = new XMLHttpRequest()

request.open('GET', requestURL)

request.responseType = 'json'
request.send()


request.onload = function () {
  var tramitacaoDeProjetos = request.response

  showTramitacaoDeProjeto(tramitacaoDeProjetos)
}

//criar o body do site
const body = document.querySelector('body')
const div1 = document.createElement('div')


const tabelaVeriadores = document.createElement('table')
tabelaVeriadores.classList.add('tabelaVeriadores')


const p = document.createElement('p')
p.innerHTML = 'Terceiro'

function showTramitacaoDeProjeto(jsonObj) {
  let tramitacao = jsonObj['0']
  console.log(tramitacao)
  console.log(tramitacao.length)

  //conta o numero de leis em tramitação
  div1.classList.add('cont_tramitacao')
  div1.innerHTML = `Número de leis em tramitação:  ${tramitacao.length + 1}`


  var vereador_Tiago_Tito = 0
  var vereador_Ederson_Sebastião_Pinto = 0
  var vereador_Álvaro_Alonso_Perez_Morais_de_Azevedo = 0
  var Vereador_Alessandro_Luiz_Bonifácio = 0
  var vereador_Wesley_de_Jesus_Silva = 0
  var vereador_José_Geraldo_Guedes = 0
  var vereador_Fausto_Niquini_Ferreira = 0
  var vereador_Silvânio_Aguiar_Silva = 0
  var vereador_Flávio_de_Almeida = 0
  var vereador_José_Carlos_de_Oliveira = 0

  for (var j = 0; j < tramitacao.length; j++) {
    if (tramitacao[j]['Autoria'] == "Vereador Tiago Tito.") {
      vereador_Tiago_Tito++
    }
    if (tramitacao[j]['Autoria'] == "Vereador Ederson Sebastião Pinto.") {
      vereador_Ederson_Sebastião_Pinto++
    }
    if (tramitacao[j]['Autoria'] == "Vereador Álvaro Alonso Perez Morais de Azevedo.") {
      vereador_Álvaro_Alonso_Perez_Morais_de_Azevedo++
    }
    if (tramitacao[j]['Autoria'] == "Vereador Alessandro Luiz Bonifácio.") {
      Vereador_Alessandro_Luiz_Bonifácio++
    }
    if (tramitacao[j]['Autoria'] == "Vereador Wesley de Jesus Silva.") {
      vereador_Wesley_de_Jesus_Silva++
    }
    if (tramitacao[j]['Autoria'] == "Vereador José Geraldo Guedes.") {
      vereador_José_Geraldo_Guedes++
    }
    if (tramitacao[j]['Autoria'] == "Vereador Fausto Niquini Ferreira.") {
      vereador_Fausto_Niquini_Ferreira++
    }
    if (tramitacao[j]['Autoria'] == "Vereador Silvânio Aguiar Silva.") {
      vereador_Silvânio_Aguiar_Silva++
    }
    if (tramitacao[j]['Autoria'] == "Vereador Flávio de Almeida.") {
      vereador_Flávio_de_Almeida++
    }
    if (tramitacao[j]['Autoria'] == "Vereador José Carlos de Oliveira.") {
      vereador_José_Carlos_de_Oliveira++
    }


    











    // var texto = document.createTextNode(tramitacao[j]['Autoria'] + '\n' +'\n' + tramitacao[j]['Identificação'])
    // div3.insertBefore(texto, div3.childNodes[0])

  }
  tabelaVeriadores.appendChild(document.createElement('tr'))
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `<img src="https://www.cmnovalima.mg.gov.br//wp-content//uploads//2015//11//tiago-195x260.jpg">`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Vereador Tiago Tito`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Número de projetos: ${vereador_Tiago_Tito}`
  tabelaVeriadores.appendChild(document.createElement('tr'))
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `<img src="https://www.cmnovalima.mg.gov.br//wp-content//uploads//2015//11//ederson-195x260.jpg">`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Vereador Ederson Sebastião Pinto.`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Número de projetos: ${vereador_Ederson_Sebastião_Pinto}`
  tabelaVeriadores.appendChild(document.createElement('tr'))
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `<img src="https://www.cmnovalima.mg.gov.br/wp-content/uploads/2015/11/alvaro-2-195x260.jpg">`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Vereador Álvaro Alonso Perez Morais de Azevedo.`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Número de projetos: ${vereador_Álvaro_Alonso_Perez_Morais_de_Azevedo}`
  tabelaVeriadores.appendChild(document.createElement('tr'))
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `<img src="https://www.cmnovalima.mg.gov.br//wp-content//uploads//2015//11//alessandro-1-195x260.jpg">` 
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Vereador Alessandro Luiz Bonifácio.`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Número de projetos: ${Vereador_Alessandro_Luiz_Bonifácio}`
  tabelaVeriadores.appendChild(document.createElement('tr'))
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `<img src="https://www.cmnovalima.mg.gov.br//wp-content//uploads//2015//11//wesley-195x260.jpg">` 
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Vereador Wesley de Jesus Silva.`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Número de projetos: ${vereador_Wesley_de_Jesus_Silva}`
  tabelaVeriadores.appendChild(document.createElement('tr'))
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Vereador José Geraldo Guedes.`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Número de projetos: ${vereador_José_Geraldo_Guedes}`
  tabelaVeriadores.appendChild(document.createElement('tr'))
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Vereador Fausto Niquini Ferreira.`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Número de projetos: ${vereador_Fausto_Niquini_Ferreira}`
  tabelaVeriadores.appendChild(document.createElement('tr'))
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Vereador Silvânio Aguiar Silva.`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Número de projetos: ${vereador_Silvânio_Aguiar_Silva}`
  tabelaVeriadores.appendChild(document.createElement('tr'))
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Vereador Flávio de Almeida.`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Número de projetos: ${vereador_Flávio_de_Almeida}`
  tabelaVeriadores.appendChild(document.createElement('tr'))
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Vereador José Carlos de Oliveira.`
  tabelaVeriadores.appendChild(document.createElement('td')).innerHTML = `Número de projetos: ${vereador_José_Carlos_de_Oliveira}`

}


body.appendChild(div1)
body.appendChild(tabelaVeriadores)