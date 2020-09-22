export default class MenuPrincipal{
  nav(){
    //menu principal
    const nav = document.createElement('nav')
    nav.classList.add('menuPrincipal')

    //lista
    const lista = document.createElement('ul')
    nav.appendChild(lista)
    

    //cria o elemento home
    const home = document.createElement('li')
    const homeTexto = document.createTextNode('Home')
    home.appendChild(homeTexto)
  
    //cria o elemento veriadores
    const veriadores = document.createElement('li')
    const veriadoresTexto = document.createTextNode('Veriadores')
    veriadores.appendChild(veriadoresTexto)
    
    //adiciona os elementos
    lista.appendChild(home)
    home.appendChild(veriadores)
    

    return nav


  }
}