function exibirTabuadaEscolhida(){
    let tabuadaescolhida = parseInt(prompt("Digite qual tabuada deseja"));

console.log (`========TABUADA ${ tabuadaescolhida}======`)
for(let i = 1; i <= 10; i++){
console.log (tabuadaescolhida + " x " + i + " = " + (tabuadaescolhida * i ))

}
}
exibirTabuadaEscolhida();        // chama a minha função, abaixo da função pois primeiro deve criar a funcao para depois executa-la 


///////////////////////////////////////////////////// crie uma função que solicite o nome da pessoa e exiba-o //////////////////////////////////////////////////////////////////////

function exibirNomeSolicitado () {
   let nomeSolicitado = prompt(" Digite seu nome aqui..");
   return nomeSolicitado ; 
}
 //let nome = exibirNomeSolicitado (); 

 //alert(nome); 

 function somarDoisNumeros (numero1, numero2 ){
    console.log(numero1+numero2)
}

somarDoisNumeros( 10, 2);

// Crie uma funcao para o exercicio 08 
// passe via parametro o peso e altura 

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