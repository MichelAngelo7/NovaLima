export default class MenuPrincipal{
  nav(){
    //menu principal
    const nav = document.createElement('nav')
    nav.classList.add('menuPrincipal')
    //div para conter os elementos isso ajuda no layout
    const div = document.createElement('div')
    nav.appendChild(div)


    //lista
    const lista = document.createElement('ul')
    div.appendChild(lista)
    

    //cria o elemento home
    const home = document.createElement('li')
    home.innerHTML= '<a href="index.html">Home</a>'
  
    //cria o elemento veriadores
    const veriadores = document.createElement('li')
    veriadores.innerHTML =  '<a href="#">Veriadores</a>'
    

    //tramitacaoDeProjetos
    const tramitacaoDeProjetos = document.createElement('li')
    tramitacaoDeProjetos.innerHTML =
    '<a href="#">Tramitação De Projetos</a>' 
    
    //adiciona os elementos
    lista.appendChild(home)
    lista.appendChild(veriadores)
    lista.appendChild(tramitacaoDeProjetos)

    return nav


  }
}