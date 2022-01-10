console.log('\nTabalhando com var, let e const para declaração de variáveis\n');

/*
- var é utilizada para uma declaração global
- a variável torna-se disponível em qualquer parte do codigo
- hoje não é tão utilizada pelas possibilidades de bugs que pode causar
*/
var nome = 'Bruno Cobello';
function teste () {
    console.log(nome);
}

teste();
var nome = 'Bruno Cobello';




/*
- let utilizamos quando queremos definir uma variavel local dentro de um escopo
- sempre deve ser declarada antes de ser utilizada
- normalmente utilizamos let para valores que poderão ser alteradas em tempo de execução
*/

let nome_let = 'Giovana Cobello';
function teste_let () {
    console.log(nome_let);
}

teste_let();





/*
- const - utilizada para declarar 'variaveis' que não sofrerão alteração durante a execução
- também deve ser declarada antes de seu uso
*/

const nome_const = 'Priscila Rosana';
function teste_const () {
    console.log(nome_const);
}

teste_const();









