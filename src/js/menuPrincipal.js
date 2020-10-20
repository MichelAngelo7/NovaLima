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
    const vereadores = document.createElement('li')
    vereadores.innerHTML =  '<a href="vereadores.html">Vereadores</a>'
    

    //tramitacaoDeProjetos
    const tramitacaoDeProjetos = document.createElement('li')
    tramitacaoDeProjetos.innerHTML =
    '<a href="tramitacaoDeProjetos.html">Tramitação De Projetos</a>' 
    
    //adiciona os elementos
    lista.appendChild(home)
    lista.appendChild(vereadores)
    lista.appendChild(tramitacaoDeProjetos)

    return nav


  }
}