export default class MenuPrincipal{
  nav(){
    //menu principal
    const nav = document.createElement('nav')
    nav.classList.add('menuPrincipal')

    //div menu principal
    const menuPrincipal = document.createElement('div')
    const menuPrincipalUl = document.createElement('ul')
    const home = document.createElement('li')

    menuPrincipal.appendChild(home).innerHTML = "home"

    nav.appendChild(menuPrincipal)
    menuPrincipal.appendChild(menuPrincipalUl)

    return nav


  }
}