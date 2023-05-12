// A primeira linha const prompt = require("prompt-sync")() importa a biblioteca prompt-sync, que permite receber entrada de dados do usuário no terminal. Essa biblioteca é comumente usada em aplicativos de linha de comando em JavaScript.

// A segunda linha declara uma variável chamada num e atribui a ela o valor inserido pelo usuário. O prompt exibe a mensagem "Numero :" e aguarda a entrada do usuário. A função Number() é usada para converter a entrada em um número.

// A terceira linha exibe uma mensagem no console informando a tabuada que será mostrada. O valor de num é interpolado na string usando a sintaxe ${num}.

// A quarta linha exibe uma linha de traços (hífens) no console usando o método repeat(). Ele repete o caractere "-" 30 vezes para criar uma linha visualmente separada.

// A partir da quinta linha, começa um loop for que irá executar 10 iterações.

// A linha console.log(${num} x ${i} = ${num*i}) exibe a multiplicação num x i e seu resultado no console. As variáveis num e i são interpoladas na string para exibir a fórmula correta.

// Após o loop, a linha console.log("-".repeat(30)) exibe novamente uma linha de traços para marcar o final da tabuada.
 
const prompt = require("prompt-sync")()
 
const num = Number(prompt("Numero :"))

console.log(`\nTabuada do ${num}`)
console.log("-".repeat(30))

for(let i=1; i<=10; i=i + 1){
    console.log(`${num} x ${i} = ${num*i}`)
}
console.log("-".repeat(30))