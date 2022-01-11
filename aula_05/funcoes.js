console.log('\nFunções Simples\n');

// funcoes simples com parametros
function imprimeTexto (texto) {
    console.log(texto);
}

function soma (n1, n2) {
    return n1 + n2;
}
imprimeTexto(soma(10,5));


// iniciando o valor dos parametros para evitar erros
function multiplica (num1 = 1, num2 = 1) {
    return num1 * num2;
}

imprimeTexto(multiplica(2,5));
