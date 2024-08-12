//questão 1
// 1- O for é utilizado quando o número de repetições é conhecido, já o while não precisa disso
// 2- O contador do for é definido no momento da estrutura, o fo while não
// 3 - Se a condição do for não for especifica apresenta erro, o while repete infinitamente enquanto a condição naão for atendida
// 4 - O for itera sobre listas, o while não


// questão 2
// o for é ideal para situações quando o número de interações é conhecido e fixo, como percorrer elementos de um array.
// o while Mais adequado quando o número de iterações é desconhecido e depende de uma condição que precisa ser monitorada durante a execução do loop.


// questão 3
//let i = 0;
while(i < 10){
    console.log("Teste uma frase!")
    i++
}


//questão 4
//let i = 465484133;
while (i > 10){
    console.log(i)
    i /= 35;
}


//questão 5
//let i = 0;
do {
    console.log(i);
    i++
}while (i < 5);


//questão 6
//let i = 1
while(i <= 10){
console.log(i)
i++
}


//questão 7
//let i = 10
while(i >= 1){
console.log(i)
i--
}


//questão 8
let soma = 0;
//let i = 1;  
while (i <= 100) {
    soma += i;  
    i++;  
}
console.log("A soma dos números de 1 a 100 é:", soma);


//questão 9
let produto = 1;
//let i = 1;
while (i <= 5){
    produto *= i;
    i++
    console.log(" O resultado é: ", produto)
}


//questão 10
//let i = 1;
while (i <= 10){
    console.log(`9 x ${i} = ${9 * i}`)
    i++
}


//questão 11 
//Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o
//menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0
//utilizando o while.
let valor: number;
let maiorValor: number= Number.NEGATIVE_INFINITY
let menorValor:number = Number.POSITIVE_INFINITY

while(true){
    valor = parseInt(prompt("Digite um número (ou 0 para parar):") || "0")

    if(valor === 0){
        break;
    }

    if(valor > maiorValor){
        maiorValor = valor;
    }

    if( valor < menorValor){
        menorValor = valor
    }

}
    if (maiorValor !== Number.NEGATIVE_INFINITY && menorValor !== Number.POSITIVE_INFINITY) {
        console.log(`Maior valor: ${maiorValor}`);
        console.log(`Menor valor: ${menorValor}`);
    } else {
        console.log("Nenhum número foi digitado.");
    }
 

//questão 12
//Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos
//números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando
//o while.
let valor1: number;
let soma1 = 0
let contador = 0


while(true){
    valor1 = parseInt(prompt("Dgite suas notas (ou -1 para parar):") || "-1")

    if(valor1 === -1){
        break;

    } 
    
    soma1 += valor1;
    contador++;
}

    if (contador > 0) {
        const media = soma1 / contador;
        console.log("A média dos números é:", media);
    } else {
        console.log("Nenhum número foi digitado.");
    }



//questão 13
let digiteNumero: number = parseInt(prompt("Digite um número inteiro:") || "0");
let somaNumero: number = 0;

while (digiteNumero > 0) {
    let digito: number = digiteNumero % 10;
    somaNumero += digito;                   
    digiteNumero = Math.floor(digiteNumero / 10);
}

let cubo: number = Math.pow(somaNumero, 3);

console.log("A soma dos dígitos é:", somaNumero);
console.log("A soma dos dígitos elevada ao cubo é:", cubo);


//questão 14 
//let i = 1;
while(i <= 100) {
    if (i % 2 !== 0){
        console.log(" os numeros impares entre 0 e 100 são: ", i)
    }i++
}


//questão 15
//let i = 1;
while(i <= 50) {
    if (i % 3 === 0){
        console.log(i)
    }i++
}


//questão 16
let notas: number;
//let i = 0;
let aprovados = 0;

while (i < 5) {
    notas = Number(prompt("Digite a nota do aluno:"));

    if (notas >= 7) {
        aprovados++; 
    }
    
    i++; 
}

console.log(`Número de alunos aprovados: ${aprovados}`);


//questão 17
let numero: number;
let numerosPares = 0

while (true) {
    numero = Number(prompt("Digite um número (ou 0 para parar):") || "0");

    
    if(numero1 === 0){
        break;

    }

    if (numero % 2 !== 0) { 
        numerosPares++; 
        
    }

}

console.log(`Quantidade de números pares digitados antes do primeiro ímpar: ${numerosPares}`);


//questão 18
let numero1: number;
let numerosPares2 = 0
let numerosImpares = 0

while (true) {
    numero1 = Number(prompt("Digite um número (ou 0 para parar):") || "0");

    if(numero1 === 0){
        break;

    }
    if (numero1 % 2 ===0 ){

        numerosPares2++; 
    }else{

        numerosImpares++
    }

}

console.log(`Quantidade de números pares digitados: ${numerosPares2}`);
console.log(`Quantidade de números ímpares digitados: ${numerosImpares}`);


//questão 19
let digite: number;
let divisor2 = 0
let divisor3 = 0
let divisor5 = 0

while (true) {
    digite = Number(prompt("Digite um número (ou 0 para parar):") || "0");

    if(digite === 0){
        break;

    }
    if (digite % 2 ===0 ){
        divisor2++; 
    }

    if (digite % 3 ===0 ){
        divisor3++; 
    }

    if (digite % 5 ===0 ){
        divisor5++; 
    }
 

}

console.log(`Divididos por 2: ${divisor2}`);
console.log(`Divididos por 3: ${divisor3}`);
console.log(`Divididos por 5: ${divisor5}`);


//questão 20
let digite1: number;
let divisiveisTres = 0
let contador1 = 0


while (true) {
    digite1 = Number(prompt("Digite um número (ou 0 para parar):") || "0");

    if(digite1 === 0){
        break;

    }
    if (digite1 % 3 ===0 ){
         divisiveisTres+= digite1
        contador1++
    }

 

}
let mediaTres = = contador1 > 0 ? divisiveisTres / contador1 : 0;

console.log(`Divididos por 3: ${mediaTres}`);


//questão 21
let digiteUsuario: number;
let maisDeTresDigitos = 0



while (true) {
    digiteUsuario = Number(prompt("Digite um número (ou 0 para parar):") || "0");

    if(digiteUsuario === 0){
        break;

    }
    if (Math.abs(digiteUsuario) >=1000 ){
         maisDeTresDigitos++
    }

 

}


console.log(maisDeTresDigitos);


//questão 22
let digiteUsuario1: number;
let soma2 = 0
let contador2 = 0

while (true) {
    digiteUsuario1 = Number(prompt("Digite um número (ou 0 para parar):") || "0");

    if(digiteUsuario1 === 0){
        break;
    }

    if(digiteUsuario1 >= 50 && digiteUsuario1 <= 100){
        soma2+=digiteUsuario1;
        contador2++
    }


}


let media = soma2/ contador2;

console.log(`Média dos números entre 50 e 100: ${media}`);


//questão 23
let digiteUsuario2: number;
let menorValor2 = Number.POSITIVE_INFINITY


while (true) {
    digiteUsuario2 = Number(prompt("Digite um número (ou 0 para parar):") || "0");

    if(digiteUsuario2 === 0){
        break;
    }

   if (digiteUsuario2 > 0 && digiteUsuario2 % 2 !== 0) {
    
    if (digiteUsuario2 < menorValor2) {
        menorValor2 = digiteUsuario2;
    }
}
}


if (menorValor2 === Number.POSITIVE_INFINITY) {
console.log("Nenhum valor positivo e ímpar foi digitado.");
} else {
console.log(`O menor valor positivo e ímpar digitado é: ${menorValor2}`);
}



//questão 24
let numero2: number;
let primeiroNumero = Number.POSITIVE_INFINITY; 
let ultimoNumero = Number.NEGATIVE_INFINITY; 

let pares = 0;
let impares = 0;

while (true) {
    numero2 = Number(prompt("Digite um número (ou 0 para parar):") || "0");

    if (numero2 === 0) {
        break;
    }

    if (numero2 < primeiroNumero) {
        
        primeiroNumero = numero2;
    }
    
    if (numero2 > ultimoNumero) {
    
        ultimoNumero = numero2;
    }
}

if (primeiroNumero !== Number.POSITIVE_INFINITY && ultimoNumero !== Number.NEGATIVE_INFINITY) {
    for (let i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`Quantidade de números pares entre ${primeiroNumero} e ${ultimoNumero}: ${pares}`);
    console.log(`Quantidade de números ímpares entre ${primeiroNumero} e ${ultimoNumero}: ${impares}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}

