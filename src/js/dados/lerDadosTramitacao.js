export default class LerDadosTramitacao{
  lerDados(){
    //requisição dos dados via json
    const  requestURL = 'https:raw.githubusercontent.com/MichelAngelo7/NovaLima/\
    master/src/assets/data/tramitacaoDeProjetos.json'
    let request = new XMLHttpRequest()
    
    request.open('GET', requestURL)
    request.responseType = 'json'
    request.send()

    request.onload = function(){
      const tramitacaoDeProjetos = request.response
      
      return tramitacaoDeProjetos
    }      
  }
}