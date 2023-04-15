let prompt = require("prompt-sync")()
let valor = Number(prompt("Digite um valor : "))
let raiz = Math.sqrt(valor)
if (Number.isInteger(raiz)) {
    console.log(`A raiz quadrada de ${valor} é ${raiz}}`)
} else {
    console.log(`Este valor ${valor} não possue raiz quadrada exata.`)
}