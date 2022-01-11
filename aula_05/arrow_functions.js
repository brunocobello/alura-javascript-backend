console.log('\nArrow Function com apenas uma linha não precisa de return');

// arrow function com apenas 1 parametro (não precisa de parênteses) e 1 linha (não precisa return)
const imprimeNome = nome => `O nome é ${nome}`;
console.log(imprimeNome('Bruno Gato'));


console.log('\nArrow Function com mais de um parâmetro (precisa de parênteses) uma linha não precisa de return');
// arrow function com mais de um parâmetro
const multiplica = (n1, n2, n3) => n1 * n2 * n3;
console.log(multiplica(4,5,5));


console.log('\nArrow Function com mais de uma linha');
// arrow function com mais de uma linha
const somaNumerosPequenos = (n1, n2) => {
    if ( n1 > 9 || n2 > 9) {
        return 'Digite apenas números entre 0 e 9';
    } else {
        return n1 + n2;
    }
}

console.log(somaNumerosPequenos(9,5));