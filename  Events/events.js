// eventos sao interacoes do usuarios com o site e tambem comportamentos do web site, por exemplo carregar a tela
// ao clicar muda a cor 

let elementoIdCores = document.getElementById ("Cores");
let novoElemento = document.createElement("a");
novoElemento.textContent = "link"   
novoElemento.href = " wepink.com.br/perfumaria?order=OrderByScoreDESC&gad_source=1&gad_campaignid=22888126959&gbraid=0AAAAABIFpOfusYKgCIrVGI7JZDGbKRNb_&gclid=CjwKCAiA3L_JBhAlEiwAlcWO54rQtNQ74lpRyXX2Jo1HSUYLGHy2Qpy6oz3PB889wUdSDaxzJ-xBhhoC1BMQAvD_BwE&utm_source=google&utm_campaign=22888123614&utm_medium=gle_--&utm_content=%7C%7Cnemu_AvAJRLampr" ;                                                                                                               

elementoBtn.addEventListener("clik", () =>{
// alert ("Você apertou o botão");
//elementoBtn.style.backgroundColor = "purple";

document.body.appendChild(novoElemento);
//document.body.removhild( elementoIdCores);
//console.log( document.body.children);
document.body.children[2].removeChild(elementoIdCores)
})