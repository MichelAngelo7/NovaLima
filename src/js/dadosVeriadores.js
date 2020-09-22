export default class DadosVeriadores {
  div() {
    //Div com os dado dos veriadores
    const dadoVeriador = document.createElement('div')
    dadoVeriador.classList.add('dadosVeriador')

    //Div com a foto do veriador
    const dadoVeriadorImg = document.createElement('div')
    dadoVeriadorImg.classList.add('dadoVeriadorImg')

    //div com textos
    const dadoVeriadorTexto = document.createElement('div')
    dadoVeriadorTexto.classList.add('dadoVeriadorTexto')


    //imagem  veriador
    const fotoVeriador = document.createElement('img')
    fotoVeriador.src = 'https://www.cmnovalima.mg.gov.br//wp-content//uploads//2015//11//tiago-195x260.jpg'
    dadoVeriadorImg.appendChild(fotoVeriador)

    //texto veriador
    const nomeVerereador = document.createElement('spam')
    const partido = document.createElement('spam')
    const numeroDeVotos = document.createElement('spam')
    const salario = document.createElement('spam')
    const idade = document.createElement('spam')
    const pontos = document.createElement('spam')
    dadoVeriadorTexto.appendChild(nomeVerereador).innerHTML = `Nome:`
    dadoVeriadorTexto.appendChild(partido).innerHTML = `Partido:`
    dadoVeriadorTexto.appendChild(numeroDeVotos).innerHTML = `Numero de votos:`
    dadoVeriadorTexto.appendChild(salario).innerHTML = `Salario:`
    dadoVeriadorTexto.appendChild(idade).innerHTML = `Idade:`
    dadoVeriadorTexto.appendChild(pontos).innerHTML = `Pontos: `
  
    dadoVeriador.appendChild(dadoVeriadorImg)
    dadoVeriador.appendChild(dadoVeriadorTexto)

    return dadoVeriador
  }
}