import menuPrincipal from './menuPrincipal'
import dadosVeriadores from './dadosVeriadores'
import '../assets'

//importação dos elementos
const menu = new menuPrincipal 
const dados = new dadosVeriadores


//corpo do site
const body = document.querySelector('body')

body.appendChild(menu.nav())
body.appendChild(dados.div())