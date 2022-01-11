console.log('\nFunções Tradicionais\n');

console.log('\nAs functions tradicionais podem ser colocadas até mesmo no final do arquivo, que mesmo assim, serão carregadas antes de qualquer chamada possível. Elas ficam disponíveis em qualquer momento / chamada do código.\n');

console.log(apresentar());

// função declarativa
function apresentar() {
    return 'Qualquer texto pode ser exibido';
}

// expressão de função
const soma = function (n1, n2) { 
    console.log('O resultado da soma: ')
    return n1 + n2;
}
console.log(soma(15,6));


/*
mais exemplos de expressão de função
*/
const expressao = function (n1, n2, n3) {
    return (n1 * n2) / n3;
}

console.log('O resultado da expressao é: ' + expressao(3,5,5));