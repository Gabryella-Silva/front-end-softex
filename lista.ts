//questão 1
//Serve como uma estrutura de repetição para evitar a reescrita de códigos

//questão 2
// let i = 0;

//questão 3
// i++

//questão 4
// i > 0;

//questão 5
for (let i = 0; i < 10; i++) {
  console.log("teste essa frase!");
}

//questão 6
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//questão 7
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

//questão 8
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

//questão 9
let nomes = ["joao", "paulo", "pedro", "gustavo", "maria"];

for (let n of nomes) {
  console.log(n);
}

//questão 10
for (let i = 0; i <=10; i++) {
  console.log(i);
}

//questão 11
for (let i = 10; i > 0; i--) {
  console.log(i);
}


//questão 12
for (let i = 1; i <=100; i++) {
    console.log(i);
  }
  

//questão 13
for (let i = 1; i <=50; i++) {
    if(i % 2==0 ){
        console.log(i)
    }

  }

  
//questão 14
let produto = 1
for (let i = 1; i <=5; i++) {
  produto *= i

  console.log(produto)
  }


//questão 15
let tabuada = 7
for (let i = 1; i <=10; i++) {
  console.log(`tabuada do numero  ${tabuada} x ${i} = ${tabuada * i}`)
  }

// questão 16
let nota1 = parseFloat(prompt("Digite sua primeira nota nota"));
let nota2 = parseFloat(prompt("Digite sua segunda nota nota"));
let nota3 = parseFloat(prompt("Digite sua terceira nota"));
let nota4 = parseFloat(prompt("Digite sua quarta nota"));
let nota5 = parseFloat(prompt("Digite sua quinta nota"));

let somaNotas = nota1 + nota2 + nota3 + nota4 + nota5;

let somaMedia = somaNotas / 5;

console.log(`Sua média é: ${somaMedia}`)


// questão 17
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(`Multiplo de 3: ${i}`);
  }
}

// questão 18
let maiorValor = Number.NEGATIVE_INFINITY;
let menorValor = Number.POSITIVE_INFINITY;

for(let i = 0; i <10; i++){
  const resultado = Number(prompt(`Digite um numero ${i + 1}` ));

  if(resultado > maiorValor){
    maiorValor = resultado;
    console.log(`Maior valor digitado foi: ${maiorValor}`)
  } else {
    if (resultado < menorValor) {
        menorValor = resultado;
        console.log(`Menor valor digitado foi: ${menorValor}`);
    }
}
}


//questão 19
console.log("Números ímpares entre 1 e 100:");
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

/* for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(`Numeros impares entre 1 a 100 = ${i}`);
  } */


//questão 20
let notaAluno1 = parseFloat(prompt("Digite sua primeira nota"));
let notaAluno2 = parseFloat(prompt("Digite sua segunda nota"));
let notaAluno3 = parseFloat(prompt("Digite sua terceira nota"));
let notaAluno4 = parseFloat(prompt("Digite sua quarta nota"));
let notaAluno5 = parseFloat(prompt("Digite sua quinta nota"));

let somatorioNotas = notaAluno1 + notaAluno2 + notaAluno3 + notaAluno4 + notaAluno5;
let somatorioMedia = somatorioNotas / 5;

if (somatorioMedia >=7){
  console.log("Aluno aprovado")
}else{
  console.log("Aluno reprovado")
}


//questão 21
const numero = parseInt(prompt("digite um numero inteiro"));

let soma = 0;
let numeroAtual = numero;

while (numeroAtual > 0) {
    soma += numeroAtual % 10;
    numeroAtual = Math.floor(numeroAtual / 10);
}
console.log(`A soma dos dígitos do número ${numero} é: ${soma}`);


// questã0 22
const numero1 = parseInt(prompt("digite um numero inteiro"));

  console.log(`Divisores do número ${numero1}:`);

  for (let i = 1; i <= numero1; i++) {
      if (numero1 % i === 0) {
          console.log(i);
      }
    }

//questão 23
let somaAltura = 0
for(let i = 1; i <=5; i++){

  const altura = parseFloat(prompt(`Digite sua altura ${i}`))

  somaAltura += altura;

  
  }
 const mediaAltura = somaAltura / 5;

 console.log(`A média das alturas é: ${mediaAltura.toFixed(2)} metros`);


//questão 24
for (let i = 1; i <= 100; i++) {

  let output = "";

  if (i % 3 === 0 && i % 5 === 0) {
      output = "FizzBuzz";
  }
  
  else if (i % 3 === 0) {
      output = "Fizz";
  }
  
  else if (i % 5 === 0) {
      output = "Buzz";
  }
  
  else {
      output = i.toString();
  }

  
  console.log(output);
}


//questão 25
const numero2 = parseInt(prompt("digite um numero inteiro"));


let somaPares = 0;
let numeroAtual2 = numero2; 


while (numeroAtual2 > 0) {
    const digito = numeroAtual2 % 10; 
    if (digito % 2 === 0) { 
        somaPares += digito;
    }
    numeroAtual2 = Math.floor(numeroAtual2 / 10); 
}


console.log(`A soma dos dígitos pares do número ${numero2} é: ${somaPares}`);



//questão 26


const numero3 = parseInt(prompt("digite um numero inteiro"));

const numeroInvertido = numero3.toString().split('').reverse().join('');

const numeroInvertidoFinal = parseInt(numeroInvertido, 10);

console.log(`O número invertido é: ${numeroInvertidoFinal}`);


