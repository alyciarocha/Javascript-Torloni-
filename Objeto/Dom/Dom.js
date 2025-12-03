//Dom é a arvore/fluxo do meu documento HTML 
// Serve para que o javascript consiga manipular ( editar, vizualizar, criar e deltar )
// tornar os elementos do HTML em objetos para que o Javascript consiga acessar de fato 

// existe para o javascripit 

 let elementoBody = document.getElementsByTagName("body");

 console.log(elementoBody);



 let elementoH1 = document.getElementsByTagName("h1");

 console.log(elementoH1[0]);

 //acessando o elemento pela sua posição[]
 (elementoH1[0].textContent) = "Alycia Rocha"


// exibe o id feliz 

let exibeId = document.getElementById("Feliz");
console.log(exibeId);


// exiba os elementos que possuem a class cores
 

let exibeClass = document.getElementsByClassName("Cores")
console.log(exibeClass);


// exiba o item 2 dos elementos que possuema class cores 
console.log(exibeClass[2]);


// mude o texto do conteudo item 3 posicao dos elementos que possuem a class cores

 exibeClass[3].textContent = "Azul"



 // mudar a estilizacao de um elemento

exibeId.style.color = "pink";
exibeId.style.fontSize = "22px"


// mude a cor da fonte do item da 2 posicao dos elementos que possuem a class Cores 

exibeClass[2].style.color = "red"


