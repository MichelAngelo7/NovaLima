import menuPrincipal from './menuPrincipal'
import '../assets/scss/vereadores.scss'


//importação do menu
const menu = new menuPrincipal

const body = document.querySelector('body')

//Div com os dado dos veriadores
const dadoVereador = document.createElement('div')
dadoVereador.classList.add('dadosVereador')

//Div com a foto do veriador
const dadoVereadorImg = document.createElement('div')
dadoVereadorImg.classList.add('dadoVereadorImg')

//div com textos
const dadoVereadorTexto = document.createElement('div')
dadoVereadorTexto.classList.add('dadoVereadorTexto')


//imagem  vereador
const fotoVereador = document.createElement('img')
fotoVereador.src = 'https://www.cmnovalima.mg.gov.br//wp-content//uploads//2015//11//tiago-195x260.jpg'
dadoVereadorImg.appendChild(fotoVereador)

//texto veriador
const nomeVereador = document.createElement('spam')
const partido = document.createElement('spam')
const numeroDeVotos = document.createElement('spam')
const salario = document.createElement('spam')
const idade = document.createElement('spam')
const pontos = document.createElement('spam')
dadoVereadorTexto.appendChild(nomeVereador).innerHTML = `Nome:`
dadoVereadorTexto.appendChild(partido).innerHTML = `Partido:`
dadoVereadorTexto.appendChild(numeroDeVotos).innerHTML = `Numero de votos:`
dadoVereadorTexto.appendChild(salario).innerHTML = `Salario:`
dadoVereadorTexto.appendChild(idade).innerHTML = `Idade:`
dadoVereadorTexto.appendChild(pontos).innerHTML = `Pontos: `

dadoVereador.appendChild(dadoVereadorImg)
dadoVereador.appendChild(dadoVereadorTexto)

body.appendChild(menu.nav())
body.appendChild(dadoVereador)

