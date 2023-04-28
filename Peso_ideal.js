//Importa o módulo prompt-sync e atribui a função prompt para a constante prompt;
const prompt = require('prompt-sync')()

//Solicita o nome do usuário e armazena na constante nome, utilizando a função prompt e aplicando o método toUpperCase() para transformar todas as letras em maiúsculas;
const nome = prompt("Digite seu nome :").toUpperCase()

//Solicita o sexo do usuário e armazena na constante sexo, utilizando a função prompt e aplicando o método toUpperCase() para transformar todas as letras em maiúsculas;
const sexo = prompt("Sexo (M/F): ").toUpperCase()

//Solicita a altura do usuário e armazena na constante altura, utilizando a função prompt e aplicando a função parseFloat() para converter a entrada do usuário em um número decimal;
const altura = parseFloat(prompt("Digite sua altura : "))

let pesoid //Verifica o sexo do usuário utilizando um condicional if e else if, e calcula o peso ideal utilizando a fórmula correspondente (72.7 * altura - 58 para homens, e 62.1 * altura - 44.7 para mulheres);

if (sexo == "M") {
   pesoid = (72.7*altura)-58
    
} else if (sexo == "F") 
{
   pesoid = (62.1*altura)-44.7
} else{
    console.log("Sexo invalido.")
}
//Exibe as informações fornecidas pelo usuário e o seu peso ideal no console, utilizando a função console.log() e aplicando o método toFixed() para limitar o número de casas decimais a duas.
console.log(`Nome > ${nome}`)
console.log(`Sexo > ${sexo}`)
console.log(`Altura > ${altura}`)
console.log(`Peso ideal ${pesoid.toFixed(2)}`)
