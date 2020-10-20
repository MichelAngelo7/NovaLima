import menuPrincipal from './menuPrincipal'
import '../assets'

//importação dos elementos
const menu = new menuPrincipal 

//corpo do site
const body = document.querySelector('body')

body.appendChild(menu.nav())
