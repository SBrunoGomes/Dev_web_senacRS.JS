// O programa utiliza a função require() para importar o módulo prompt-sync, que permite a leitura de dados do usuário no terminal.

let prompt = require("prompt-sync")()

//O programa utiliza a função Number() para converter o valor digitado pelo usuário em um número e armazená-lo na variável valor.

let valor = Number(prompt("Digite um valor : "))

//O programa utiliza a função Math.sqrt() para calcular a raiz quadrada de valor e armazená-la na variável raiz.

let raiz = Math.sqrt(valor)

//O programa utiliza a função Number.isInteger() para verificar se raiz é um número inteiro. Se for, significa que a raiz quadrada é exata, e o programa exibe a mensagem no console.

if (Number.isInteger(raiz)) {
    console.log(`A raiz quadrada de ${valor} é ${raiz}}`)
} else {
    console.log(`Este valor ${valor} não possue raiz quadrada exata.`)
}
//Final!