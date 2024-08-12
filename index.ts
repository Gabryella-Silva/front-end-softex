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
