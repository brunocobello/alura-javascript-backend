/*
trabalhando com tipos primativos de dados 
- Number
- String
- Boolean
*/

console.log('\nTrabalhando com tipos primitivos de dados: Number, String e Boolean\n\n');

const n_flutuante = 3.3;
const n_inteiro = 2;
const n_string = '10';
const ligado = true;
const nome = 'Bruno Cobello';
const idade = 42;
const cidade = 'São Roque';

console.log('Somando 2 valores numéricos');
console.log(n_flutuante + n_inteiro);

console.log('\n##################################\n');
console.log('Somando número com string - convertida');
console.log(n_inteiro + Number(n_string));


console.log('\n##################################\n');
console.log('Concatenando textos e variaveis');
console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos de idade e moro na cidade de ' + cidade);

console.log('\nConcatenando textos e variaveis - template setring');
console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade e moro na cidade de ${cidade}`);

console.log('\n##################################\n');
console.log(1==ligado);
console.log(1===ligado);