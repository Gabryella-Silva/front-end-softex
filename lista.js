"use strict";
// questão 1
console.log("Estudar é muito bom");
console.log("Paciência e persistencia");
console.log("Revisão é a mãe do aprendizado");
console.log("Estudar é muito bom");
console.log("Paciência e persistencia");
console.log("Revisão é a mãe do aprendizado");
console.log("Estudar é muito bom");
console.log("Paciência e persistencia");
console.log("Revisão é a mãe do aprendizado");
//questão 2  função so com entrada
function criarFrases() {
    console.log("Estudar é muito bom");
    console.log("Paciência e persistencia");
    console.log("Revisão é a mãe do aprendizado");
}
criarFrases();
criarFrases();
criarFrases();
//questão 3 função so com entrada
function soma(num1, num2) {
    console.log(num1 + num2);
}
soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50);
//questão 4
function soma(num1, num2) {
    return num1 + num2;
}
teste1 = soma(10, 15);
console.log(teste1);
teste2 = soma(10, 20) + soma(30, 50);
console.log(teste2);
console.log(soma(50, 50));
//questão 5 função com entrada e saida
function soma1(a, b) {
    return a + b;
}
console.log(70 + 40);
//questão 6
function isPar(numeroInteiro) {
    if (numeroInteiro % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPar(8));
//questão 7
function mediaAritimetica(nota_1, nota_2, nota_3) {
    let soma = nota_1 + nota_2 + nota_3;
    let media = soma / 3;
    return media;
}
console.log(mediaAritimetica(8, 7, 9));
//questão 8
function imc(peso, altura) {
    return peso / altura ** 2;
}
console.log(imc(65, 1.72));
//questão 9
function calcularDesconto(valor, percentualDesconto) {
    const desconto = valor * (percentualDesconto / 100);
    return valor - desconto;
}
console.log("valor do desconto:", calcularDesconto(80, 20));
//questão 10
function calcularImpostoRenda(salarioBruto) {
    let impostoPago = 0;
    if (salarioBruto <= 1903.98) {
        impostoPago = 0;
    }
    else if (salarioBruto <= 2826.65) {
        impostoPago = (salarioBruto - 1903.98) * 0.075;
    }
    else if (salarioBruto <= 3751.05) {
        impostoPago = (salarioBruto - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    }
    else if (salarioBruto <= 4664.68) {
        impostoPago = (salarioBruto - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    }
    else {
        impostoPago = (salarioBruto - 4664.68) * 0.275 + (4664.68 - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    }
    return impostoPago;
}
console.log(calcularImpostoRenda(1500));
//outra forma de fazer com for e array
function calcularImpostoRenda(salarioBruto) {
    const faixas = [
        { limite: 1903.98, aliquota: 0 },
        { limite: 2826.65, aliquota: 0.075 },
        { limite: 3751.05, aliquota: 0.15 },
        { limite: 4664.68, aliquota: 0.225 },
        { limite: Infinity, aliquota: 0.275 }
    ];
    let impostoPago = 0;
    let salarioRestante = salarioBruto;
    for (let i = faixas.length - 1; i >= 0; i--) {
        if (salarioBruto > faixas[i].limite) {
            impostoPago += (salarioRestante - faixas[i].limite) * faixas[i].aliquota;
            salarioRestante = faixas[i].limite;
        }
    }
    return impostoPago;
}
console.log(`Imposto a pagar: R$ ${calcularImpostoRenda(3000).toFixed(2)}`);
//questão 11
function calcularMediaArredondada(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    let media = soma / numeros.length;
    return Math.round(media);
}
let listaNumeros = [10, 9, 8, 7];
console.log(calcularMediaArredondada(listaNumeros));
//questão 12
function contarDigitosParesImpares(numeroInteiro) {
    let pares = 0;
    let impares = 0;
    let numeroString = numeroInteiro.toString();
    for (let i = 0; i < numeroString.length; i++) {
        let digito = parseInt(numeroString[i]);
        if (digito % 2 === 0) {
            pares++;
        }
        else {
            impares++;
        }
    }
    return { pares, impares };
}
let numero = 9876510245;
let resultado = contarDigitosParesImpares(numero);
console.log(`Dígitos pares: ${resultado.pares}, Dígitos ímpares: ${resultado.impares}`);
function calcularMediaAlunos(alunos) {
    let soma = 0;
    for (let aluno of alunos) {
        soma += aluno.nota;
    }
    let media = soma / alunos.length;
    return media;
}
const listaDeAlunos = [
    { nome: "João", nota: 7.5 },
    { nome: "Maria", nota: 8.0 },
    { nome: "Pedro", nota: 6.5 }
];
console.log(calcularMediaAlunos(listaDeAlunos));
//questão 14
function calcularIdade(nascimento, anoAtual) {
    let idade = anoAtual - nascimento;
    return idade;
}
console.log(calcularIdade(2002, 2024));
//outra forma de fazer
function calcularIdade(nascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - nascimento;
}
console.log(calcularIdade(2002));
//questão 15
function gerarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
gerarTabuada(8);
//questão 16
function advinheNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    let tentativas = 0;
    let acertou = false;
    while (!acertou) {
        const tentativa = Number(prompt("Tente adivinhar o número entre 1 e 100:"));
        tentativas++;
        if (tentativa > numeroAleatorio) {
            console.log("O número correto é menor. Tente novamente.");
        }
        else if (tentativa < numeroAleatorio) {
            console.log("O número correto é maior. Tente novamente.");
        }
        else if (tentativa === numeroAleatorio) {
            console.log(`Parabéns! Você acertou o número em ${tentativas} tentativa(s).`);
            acertou = true;
        }
    }
}
advinheNumero();
//questão 17
function verificarPropriedade(objeto, propriedade) {
    return propriedade in objeto;
}
const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
};
console.log(verificarPropriedade(pessoa, "nome"));
console.log(verificarPropriedade(pessoa, "altura"));
//questão 18
function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
    const valorLucro = valorCusto * (margemLucro / 100);
    const precoVenda = valorCusto + valorLucro + valorFrete;
    return precoVenda;
}
const preco = calcularPrecoProduto(100, 20, 15);
console.log(`O preço de venda do produto é: R$ ${preco.toFixed(2)}`);
//questão 19
function encontrarPalavraMaisLonga(frase) {
    const palavras = frase.split(' ');
    let palavraMaisLonga = '';
    for (const palavra of palavras) {
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    }
    return palavraMaisLonga;
}
const fraseExemplo = 'A vida é bonita e bela';
const palavraMaisLonga = encontrarPalavraMaisLonga(fraseExemplo);
console.log(`A palavra mais longa é: ${palavraMaisLonga}`);
//questão 20
function imprimirEmQuadro(strings) {
    const larguraMaxima = Math.max(...strings.map(str => str.length));
    const borda = '*'.repeat(larguraMaxima + 4);
    console.log(borda);
    for (const str of strings) {
        const espacos = ' '.repeat(larguraMaxima - str.length);
        console.log(`* ${str}${espacos} *`);
    }
    console.log(borda);
}
const listaStrings = ["Hello", "World", "in", "a", "frame"];
imprimirEmQuadro(listaStrings);
// questão 21
function filtrarStringsLongas(strings) {
    return strings.filter(str => str.length > 5);
}
const listaStrings1 = ["maça", "banana", "cereja", "uva"];
const stringsLongas = filtrarStringsLongas(listaStrings1);
console.log(stringsLongas);
function filtrarLivrosPorAutor(livros, autorDesejado) {
    return livros.filter(livro => livro.autor === autorDesejado);
}
const listaDeLivros = [
    { titulo: "Livro A", autor: "Autor 1", ano: 2001 },
    { titulo: "Livro B", autor: "Autor 2", ano: 2005 },
    { titulo: "Livro C", autor: "Autor 1", ano: 2010 },
    { titulo: "Livro D", autor: "Autor 3", ano: 2015 },
];
const livrosDoAutor1 = filtrarLivrosPorAutor(listaDeLivros, "Autor 1");
console.log(livrosDoAutor1);
function nomePessoaMaisVelha(pessoas) {
    if (pessoas.length === 0) {
        return null;
    }
    const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoaAtual) => {
        return pessoaAtual.idade > maisVelha.idade ? pessoaAtual : maisVelha;
    });
    return pessoaMaisVelha.nome;
}
const listaDePessoas = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 45 },
    { nome: "Pedro", idade: 50 },
    { nome: "Ana", idade: 35 }
];
const nomeMaisVelha = nomePessoaMaisVelha(listaDePessoas);
console.log(nomeMaisVelha);
function carrosAposAno(carroArray, anoEspecifico) {
    return carroArray.filter(carro => carro.ano > anoEspecifico);
}
const listaDeCarros = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Ford", modelo: "Fiesta", ano: 2018 },
    { marca: "Honda", modelo: "Civic", ano: 2021 },
    { marca: "Chevrolet", modelo: "Onix", ano: 2019 }
];
const anoLimite = 2019;
const carrosFiltrados = carrosAposAno(listaDeCarros, anoLimite);
console.log(carrosFiltrados);
//questão 25
function inverterString(str) {
    return str.split('').reverse().join('');
}
const resultado1 = inverterString("hello");
console.log(resultado1);
