
// let numero01 =  parseInt(prompt("Digite o primeiro número:"))
// let numero02 =  parseInt (prompt ("Digite o segundo número:"))

// let soma = numero01 + numero02
// console.log (soma)

// let num01 = parseFloat(prompt("Digite algum número:"))
// let num02 = parseFloat(prompt("Digite algum número:"))

// let resultado = num01 + num02

// console.log(resultado)

// tomada de deção estrutura, como inserir email e senha, para validação, exemplo prático // ENTRAR TER ACESSO DEVE USAR ESSE CODIGO

// let idade = parseInt (prompt("Qual é sua idade")) 

// // usado para numero inteiro ex; idade 
// if (idade >= 18) {
//     console.log("você é maior de idad, da-lheee")
// } 
// else{
//     console.log("você é menor de idade, baixinho")
//     } 

// if serve para a comparacao, console a verificacao do acesso., else caso nao tenha comando.

//  switch quando conhecemos todos os itens da lista  ou seja opção 


let estacoes = prompt("Digite uma estação do ano ")
switch (estacoes) {
    case "Verão":
        console.log("Muito Calor e praia")
        break;

    case "Outono":
        console.log("As folhas caem no final ")
        break;

    case "Inverno":
        console.log("Está muito frio")
        break;


    case "Primavera":
        console.log("Eu vejo flores em você...")
        break;


    default:
        console.log("Não existe essa estação!!!!")
        break;
}