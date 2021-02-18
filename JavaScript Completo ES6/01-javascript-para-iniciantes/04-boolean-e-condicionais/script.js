var possuiGraduacao = true;

if(true) {
    console.log('É verdadeiro');
    console.log('sim');
} else {
    console.log('É falso');
}


var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao) {
    console.log('É verdadeiro');
} else if(possuiDoutorado) {
    console.log('Possui Doutorado');
} else {
    console.log('Não possui nada');
}

var nome = 'Gabriel';

if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

if(!possuiGraduacao) {
    console.log(possuiGraduacao);
    console.log('Não possui graduação');
}

var x = '10';
console.log(x === 10);

if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2)

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    case 'Verde':
        console.log('Olhe para a floresta.');
        break;
    default: // Case nenhuma das opções sejam verdadeiras, ele retorna essa
        console.log('Feche os olhos.');
}

/*============================================
    EXERCÍCIO
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade1 = 21
var idade2 = 15
if (idade1 > idade2) {
    console.log('É maior');
} else if (idade1 === idade2) {
    console.log('É igual');
} else {
    console.log('É menor');
};

Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao); // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Gabriel';
var idade = 21;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes')
} else {
    console.log('Brasil tem menos habitantes')
}

// O que irá aparecer no console? // false
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O que irá aparecer no console? // true
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
============================================*/