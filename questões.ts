//questão 5
const nome = String(prompt("Digite seu nome"));
const mensagem = alert("Boas vindas")
console.log(nome + mensagem)

//questão 6
 const idade =(prompt("Digite sua idade"));
const idadeTransformada = Number(idade)
console.log( idadeTransformada); 

//questão 7
let numero1 =prompt("Digite um numero");
let numeroDecimal = parseFloat(numero1)
console.log(numeroDecimal)

//quatão 8
let numeros = Number(prompt("Digite um numero"));
let numeros1 = Number(prompt("Digite um segundo numero"))
const soma = numeros + numeros1
console.log(soma)

//questão 9
let decimal = prompt("Digite um numero decimal");
let numeroDecimal1 = parseFloat(decimal);
let soma1 = numeroDecimal1 * numeroDecimal1;
console.log(soma1)

//questão 10
const ano = Number(prompt("Digite o ano do seu nascimento"));
const resultado = 2024 - ano;
console.log("Sua idade é: " ,resultado )

//questão 11
const primeiroNome =prompt("Digite seu primeiro nome");
const segundoNome  =prompt("Digite seu segundo nome");
const nomeCompleto = primeiroNome+ ' ' +segundoNome;
console.log(nomeCompleto)

//questão 12
const sequencia =prompt("Digite uma sequência de numeros separados por espaço");
const sequenciaNumeros = sequencia.length;
console.log("Resultado dos numeros digitados: ", sequenciaNumeros)

//questão 13
const animal  =prompt("Digite o nome de um animal: " , (nomeAnimal));
const nomeAnimal = animal
console.log("O animal digitado foi:" , animal)

//questão 14
const primeiroNome1  =prompt("Digite seu primeiro nome")
const segundoNome1 =prompt("Digite seu segundo nome")
console.log( segundoNome1+'  '+primeiroNome1)

//questão 15
const palavra  =prompt("Digite qualquer coisa")
console.log("O número de caracteres é: ", palavra?.length)

//questão 16 
const numeroInteiro  =Number(prompt("Digite um número inteiro"))

if (numeroInteiro % 2 === 0){
    console.log("Esse número é par")
}else{
    console.log("Esse número é impar")
}

//questão 17
const numero =Number(prompt("Digite um número inteiro"))

if(numero > 0){
    
    console.log("Esse número é positivo")
}
else if(numero < 0){

    console.log("Esse número é negativo")
}else{
   console.log("neutro")
}


//questão 18
const numeracao =Number(prompt("Digite um numero"))
const numeracao1 =Number(prompt("Digite um segundo numero"))

if(numeracao > numeracao1){
    console.log(`O maior número é ${numeracao}`)
}
else if(numeracao < numeracao1){

    console.log(`O maior número é ${numeracao1}`)
}else{

    console.log("Os dois são iguais")
}

//questão 19
 const altura =Number(prompt("Digite sua altura"))
const peso =Number(prompt("Digite seu peso"))

const resultado1 = peso / altura**2

console.log("Seu imc é: " , resultado1.toFixed(2)) 

//questão 20
const digiteNome =prompt("Digite seu nome")
const digiteNome1 = digiteNome?.length

if( digiteNome1 > 5) {
    console.log("Seu nome contém mais de 5 caracteres")
}else{
    console.log("Seu nome contém menos de 5 caracteres")
}


//questã0 21
const estadoCivil =prompt("Digite seu estado civil" )

if( estadoCivil === "solteiro" || estadoCivil === "solteira") {
    console.log("Voce é solteiro(a)")
}
else if( estadoCivil ==="casado" || estadoCivil === "casada") {
    console.log("Vocé é casado(a)")
}else if (estadoCivil ==="divorciado"|| estadoCivil === "divorciada"){
    console.log("Você é divorciado(a)")
}else if (estadoCivil === "viuvo" || estadoCivil === "viuva") {
    console.log("Vocé é viúvo(a)")
}else {
    console.log("não identificado")
}


//questão 22
const base =Number(prompt("Digite a base do retangulo" ))
const altura2 =Number(prompt("Digite altura do retangulo" ))

const area = base * altura2
console.log(`A área do retangulo com base ${base} e altura ${altura2} é: ${area}`)

//questão 23
const cidade =prompt("Digite a cidade que você mora" )
const nomeCidade = cidade[0];

if( nomeCidade === "R"){
    console.log("Sua cidade começa com a letra R")
}else if (nomeCidade === "r"){
    console.log("Coloque o nome da sua cidade com a primeira letra maiúscula")
}else{
    console.log("Sua cidade não começa com a letra R")
}

//questão 24
const numberDecimal =parseFloat(prompt("Digite um numero decimal" ))
const numberDecimal1 =parseFloat(prompt("Digite mais um numero decimal" ))
const resultadoFinal = numberDecimal % numberDecimal1
console.log(resultadoFinal.toFixed(2))


//questão 25
let numberDecimal2 =parseFloat(prompt("Digite um numero decimal" ))
numberDecimal2 = parseInt(numberDecimal2.toString())

console.log(numberDecimal2)

//questão 26
const numeroInt =prompt("Digite um numero inteiro")
const numeroInt2 = parseInt(numeroInt);
const resultadoInt = numeroInt2 + 10;
const resultadoInt2 = resultadoInt.toString();

console.log(resultadoInt2)

//questão 27
const data = prompt("Digite uma data (dd/mm/aaaa): ");
const divisaoDatas = data?.split("/");

if (divisaoDatas && divisaoDatas.length === 3) {
  const dia = parseInt(divisaoDatas[0], 10);
  const mes = parseInt(divisaoDatas[1], 10);
  const ano = parseInt(divisaoDatas[2], 10);

  if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
    console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);
  } else {
    console.log('Por favor, digite uma data válida no formato "dd/mm/aaaa".');
  }
} else {
  console.log('Por favor, digite uma data válida no formato "dd/mm/aaaa".');
}


//questão 28
const moraCidade = prompt("Digite a cidade que você mora ");
const moraEstado = prompt("Digite o estado que você mora");

console.log(`Você mora em ${moraCidade}, ${moraEstado}`)


//questão 29
const anoNascimento =Number(prompt("Digite o ano do seu nascimento"));

console.log(`Bem vindo ao nosso programa, nascido em ${anoNascimento}`)


//questão 30
const recebeNumero =Number(prompt("Digite um numero"));
const recebeString = prompt("Digite uma String")

const recebeResultado = recebeNumero+ ' ' +recebeString
console.log(recebeResultado)


//questão 31
const produto = prompt("Digite o nome do produto que deseja")
const precoProduto = "R$: 30,00"

const produtoEncontrado = produto+ ' ' +precoProduto
console.log(produtoEncontrado)


//questão 32
const digiteNumero = Number(prompt("Digite um numero"))
const resultadoNumero = digiteNumero + digiteNumero

console.log(`Resultado: ${resultadoNumero}`)


//questão 33
const email =prompt("Digite seu e-mail")

console.log(`Muito obrigada por visitar nosso site: ${email}!!` )


//questão 34
const calculo = Number(prompt("Digite um número"))
const calculo1 = Number(prompt("Digite mais um número"))
const calculoSoma = calculo + calculo1;
const calculoDiferenca = calculo - calculo1;
const calculoProduto= calculo * calculo1;
const calculoQuociente = calculo / calculo1

console.log(`Soma: ${calculoSoma}`);
console.log(`Diferença: ${calculoDiferenca}`);
console.log(`Produto: ${calculoProduto}`);
console.log(`Quociente: ${calculoQuociente}`);


//questâo 35
const baseTriangulo =Number(prompt("Digite a base do triangulo"))
const alturaTriangulo =Number(prompt("Digite a altura do triangulo"))

const areaTriangulo = (baseTriangulo * alturaTriangulo /2)

console.log(`A área do triangulo é ${areaTriangulo}`)


//questão 36
const raio =Number(prompt("Digite o raio da circunferência: "))
const pi = Math.PI;
const perimetro = 2 * pi * raio;

console.log(`O perímetro da circunferência é: ${perimetro.toFixed(2)}`);


//questão 37
const baseRetangulo = Number(prompt("Digite a base do retângulo: "));
const alturaRetangulo = Number(prompt("Digite a altura do retângulo: "));

const perimetro1 = 2 * (baseRetangulo + alturaRetangulo);

console.log(`O perímetro do retângulo é: ${perimetro1}`);


//questão 38
const decimalNumero = parseFloat(prompt("Digite um numero decimal "));
const decimalNumero1 = parseFloat(prompt("Digite um numero decimal"));
const decimalNumero2= parseFloat(prompt("Digite um numero decimal "));

const decimalSoma = (decimalNumero + decimalNumero1 + decimalNumero2) /3

console.log(`a média aritimetica é: ${decimalSoma.toFixed(2)}`);


//questão 39
const idade1 = Number(prompt("Digite sua idade"));
const diasVividos = idade1*365
const mesesVividos = idade1*12

console.log(`Você viveu aproximadamente ${diasVividos} dias e ${mesesVividos} meses.`);


//questão 40
const valorReal = Number(prompt("Digite um valor em real"));
const cotacaoDolar = Number(prompt('Digite a cotação do dolar'));

const somaValor = valorReal * cotacaoDolar

console.log(`O Valor convertido em dolares é :${somaValor.toFixed(2)}`);


//questão 41
const numeroDeci = parseFloat(prompt("Digite um numero decimal"));
const arredondarNumero = Math.round(numeroDeci)

console.log(`O número ${numeroDeci} arredondado para o inteiro mais próximo é: ${arredondarNumero}`);


//questão 42
const numeroDigite = Number(prompt("Digite um numero"));
const numeroDigite1 = Number(prompt("Digite um numero"));
const numeroDigite2 = Number(prompt("Digite um numero"));

const numeroResultado = (numeroDigite + numeroDigite1) * numeroDigite2

console.log(`Resultado da soma: ${numeroResultado}`)


//questão 43
const temperatura = Number(prompt("Digite uma temperatua em Celsius"));
const converteTemperatura = (temperatura * 9/5) + 32.

console.log(`A temperatura em Fahrenheit é: ${converteTemperatura}`)