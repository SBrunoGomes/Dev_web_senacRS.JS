const prompt = require("prompt-sync")()
const veiculo = prompt("Qual veiculo Sr(A) gostaria de comprar : ")
const valor = Number(prompt("Qual o valor do veiculo R$ : "))
const marca = prompt("Qual é a marca do veiculo : ")

let desconto
if (marca == "fiat" || marca == "chevrolet") {
    desconto = (valor * 0.10)/100
    
} else { desconto = (valor * 0.20)/100
    
}
const preco_final = valor + desconto
console.log(`Modelo >> ${veiculo}`)
console.log(`Marca >> ${marca}`)
console.log(`Valor >> ${valor}`)
console.log(`Desconto >> ${desconto}`)
console.log(`Valor com desconto é >> ${preco_final}`)

//const prompt = require("prompt-sync")() - Este comando define a função prompt para obter entrada do usuário.
//const veiculo = prompt("Qual veiculo Sr(A) gostaria de comprar : ") - Este comando solicita ao usuário que digite o nome do veículo desejado.
//const valor = Number(prompt("Qual o valor do veiculo R$ : ")) - Este comando solicita ao usuário que digite o valor do veículo desejado.
//Const marca = prompt("Qual é a marca do veiculo : ") - Este comando solicita ao usuário que digite a marca do veículo desejado.
//let desconto - Este comando declara a variável desconto sem atribuir nenhum valor inicial.
//if (marca == "fiat" || marca == "chevrolet") {...} else {...} - Este comando verifica se a marca do veículo é igual a "fiat" ou "chevrolet". Se for, um desconto de 10% é aplicado ao preço do veículo. Caso contrário, um desconto de 20% é aplicado.
//const preco_final = valor + desconto - Este comando calcula o preço final do veículo, adicionando o valor do veículo ao desconto aplicado.
//console.log(...) - Este comando imprime o modelo do veículo, marca, valor, desconto e preço final na tela para o usuário.