console.log('\nOperadores de Comparação');

const n1 = 10;
const n2 = '10';

// verificando o tipo de cada variável
console.log(typeof n1);
console.log(typeof n2);

// == compara apenas o conteúdo das variáveis, portanto 10 é igual a '10'
console.log(n1 == n2);

// === compara o conteúdo e o tipo da váriável, portanto 10 é diferente de '10'
console.log(n1 === n2);


// if normal
const idade = 17;
const idadeMinima = 18;
const bebidaAutorizada = 'cerveja';
const bebidaJuvenil = 'suco de laranja';

if ( idade >= idadeMinima ) {
    console.log(`Você possui mais de ${idadeMinima} anos, portanto, poderá beber ${bebidaAutorizada}`)
} else {
    console.log(`Você possui ${idade} anos, portanto, está autorizado a beber ${bebidaJuvenil}`);
}

// ternário - bastante simples e utilizado em situações que não ultrapassem um if comum
const resultado = idade >= idadeMinima ? bebidaAutorizada : bebidaJuvenil;
console.log(`\nVocê poderá beber ${resultado}`);