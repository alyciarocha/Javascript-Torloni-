
////////// EXERCICIO 01 PESO E ALTURA ////////////

function exibirPesoeAlturaSolicitada (peso, altura){

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else if (imc < 35) {
    console.log("Obesidade grau 1");
} else if (imc < 40) {
    console.log("Obesidade grau 2");
} else {
    console.log("Obesidade grau 3");}    

}
calcularIMC( peso, altura);




///////////// EXERCICIO 02 TABUADAS //////

function exibirTabuadaEscolhida(){
    let tabuadaescolhida = parseInt(prompt("Digite qual tabuada deseja"));

console.log (`========TABUADA ${ tabuadaescolhida}======`)
for(let i = 1; i <= 10; i++){
console.log (tabuadaescolhida + " x " + i + " = " + (tabuadaescolhida * i ))

}
}
exibirTabuadaEscolhida();




/////////// EXERCICIO 03 ////////////

function exibirSenha(){
    let senha = (prompt("Digite sua senha"))
  if (senha == "senha123") {
     console.log ("Acesso Liberado")
  }

  else{
    console.log("Acesso Negado")
  }
}   
exibirSenha();




////////// EXERCICIO 04 ////////////

function numeroVoltas(){
    let volta = 0 
while(volta <= 20 ){
    console.log( volta);
    volta = volta + 2
    }
}
 numeroVoltas(); 




 ////////// EXERCICIO 05 //////////

 function SomadosNumeros(){
    let numero = 1; 
let soma = 0; 
while(numero <= 100 ){
    soma = soma + numero; 
    numero++
}
alert("A soma dos números de 1 a 100 é: " + soma );
 }
 SomadosNumeros(); 






