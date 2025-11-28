// Array = uma lista 

let frutas = ["Morango","Pitaia", " Uva", "Melancia", "Manga" ]; //Array/lista vazia
             // posicao 0
console.log("A lista de fruta tem " + frutas.length + " itens.");  // lenght = a comprimento, ou seja a quantidade de itens que a lista tem.

console.log (" Aprimeira fruta é a: " + frutas [0]);               // []= a posicao dos itens

// acesse a 4 fruta
console.log (" quarta fruta é a: " + frutas [3]);
  
for(let i = 0; i < frutas.length; i++){
      console.log(frutas[i])
}

// Crie uma lista de tarefas, contendo no max 10 itens e exiba cada tarefas.

let tarefas = ["Arrumar o quarto","Trocar os panos", "Lavar o banheiro", "Limpar  a cozinha", "Limpar a sala", "Lavar roupas", "Recolher o lixo", "Ir ao mercado", " Organizar as compras" ];
console.log("A lista de tarefas " + tarefas.length + " itens.");

console.log(" A lista de tarefas tem " + tarefa.length + " itens " )

console.log (" A primeira tarefa é:" + tarefas[0]);

for(let i = 0; i < tarefas.length; i++){
      console.log(tarefas[i])
}

// jeito 02 //

console.log("A lista de tarefas tem: " + tarefas.length + " itens ");
tarefas.length.forEach(tarefas => {
    console.log(tarefas)
}); 