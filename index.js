var numero2;
var primeiroNumero = Number.POSITIVE_INFINITY;
var ultimoNumero = Number.NEGATIVE_INFINITY;
var pares = 0;
var impares = 0;
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
    for (var i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 2 === 0) {
            pares++;
        }
        else {
            impares++;
        }
    }
    console.log("Quantidade de n\u00FAmeros pares entre ".concat(primeiroNumero, " e ").concat(ultimoNumero, ": ").concat(pares));
    console.log("Quantidade de n\u00FAmeros \u00EDmpares entre ".concat(primeiroNumero, " e ").concat(ultimoNumero, ": ").concat(impares));
}
else {
    console.log("Nenhum número válido foi digitado.");
}
