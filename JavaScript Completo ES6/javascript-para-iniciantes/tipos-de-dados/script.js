var nome = 'Andre';
var idade = 28;

console.log(typeof nome);

var nome = 'Gabriel';
var sobrenome = 'Lima';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

// var gols = 1000;
// var frase = 'Romário fez ' + gols + ' gols';

// console.log(frase);

var ano = '2018';
var mes = 8;

console.log(ano + mes);

var frase1 = 'Esse é o \"melhor\" jogo';
console.log(frase1);

var gols = 1000;
var frase = `Romário fez ${gols * 2} gols`;

console.log(frase);

/*============================================
    EXERCÍCIO
// Declare uma variável contendo uma string

// Declare uma variável contendo um número dentro de uma string

// Declare uma variável com sua idade

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

// Coloque a seguinte frase em uma variável: It's time

// Verifique o tipo da variável que contém o seu nome
============================================*/

var frase = 'Isso é uma String';

var frase2 = `Isso é ${1} String`;
console.log(
    frase,
    frase2
);

var idade = 21;

var nome = 'Gabriel';
var sobrenome = 'Lima';
var nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

var frase3 = "It's time";

console.log(typeof nomeCompleto);