<h1><a href="https://github.com/gabr1ellima/origamid-cursos/tree/main/JavaScript%20Completo%20ES6/javascript-para-iniciantes/1-variaveis">Variáveis</a></h1>

Responsáveis por guardar dados na memória.
Inicia com a palavra `var`, `let` ou `const`

```
var nome = 'Gabriel';
let idade = 28;
const possuiFaculdade = true;
```

<h2>Evitam repetições</h2>
<em>DRY (Don't repeat yourself)</em>

```
var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;
```

<h2>Sintaxe</h2>

Palavra chave `var` seguida do nome, sinal de igual e o valor.

```
var nome = 'Gabriel';
var idade = 21
var prossuiFaculdade = true;
```

<h2>Sem valor</h2>
Pode declarar ela e não atribuir valor inicialmente.

```
var precoAplicativo;
// Retorna undefined
```

<h2>Nomes de variáveis</h2>

- Os nome pode iniciar com $, _, ou letras.
	- Podem conter números mas  não iniciar com eles
- Case sensitive
	- Nome é diferente de nome
- Não utilizar palavras reservadas
	- <a href="https://www.w3schools.com/js/js_reserved.asp">JavaScript Reserved Words</a>
- Camel case
	- É comum nomearmos assim: abrirModel

```
// Inválido
var §nome;
var function;
var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;
```

<h2>Declaração</h2>

Erro ao tentar uma variável que não foi declarada.

```
console.log(nome);
// Retorna nome is not defined
```

<h2>Hoisting</h2>

São movidas para cima do código, porém o valor atribuído não é movido. 
```
console.log(nome);
var nome = 'Gabriel';
// Retorna undefined

var profissao = 'Designer';
console.log(profissao);
// Retorna Designer
```

<h2>Mudar o valor atribuído</h2>

É possível mudar os valores atribuídos avariáveis declaradas com `var` e `let`. Porém não é possível modificar valores das declaradas com `const`.

```
var idade = 28;
idade = 29;

let preco = 50;
preco = 25;
const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro
```
<hr>

<h1><a href="https://github.com/gabr1ellima/origamid-cursos/tree/main/JavaScript%20Completo%20ES6/javascript-para-iniciantes/2-tipos-de-dados">Tipos de Dados</a></h1>

Todos são primitivos exceto os objetos.

```
var nome = 'Gabriel'; // String
var idade = 28; // Number
var possuiFaculdade = true: // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
```
Primitivos são dados imutáveis.

<h2>Verificar o tipo de Dado</h2>

```
var nome = 'Gabriel';
console.log(typeof nome);
// retorna string
```

type off null retorna object.

<h2>String</h2>

Pode somar  uma string e assim concatenar as palavras.

```
var nome = 'Gabriel';
var sobrenome = 'Lima';
var nomeCompleto = nome + ' ' + sobrenome;
```

Pode somar números com strings, o resultado final é sempre uma string.

```
var gols = 1000;
var frase = 'Romário fez' + gols + ' gols';
```

<h2>Aspas Duplas, Simples e Template String</h2>

```
'JavaScript é "super" 'fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
'Javascript é "super" fácil";
"JavaScript é "super" fácil"; // Invalido
```

Não necessáriamente precisamos atribuir valores a uma variável.

<h2>Template String</h2>

```
var gols = 1000;
var frase1 = 'Romário fez ' + gols + 'gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
```
Você deve passar expressões / variáveis dentro de `${}`

<hr>

<h1><a href="https://github.com/gabr1ellima/origamid-cursos/tree/main/JavaScript%20Completo%20ES6/javascript-para-iniciantes/3-numeros-e-operadores">Números e Operadores</a></h1>

<h2>Números</h2>

```
var idade = 21;
var gols = 1000;
var pi = 3.14; // Ponto para decimal
var exp = 2e10; // 20000000000
```

Precisão de até 15 dígitos


<h2>Operadores Aritméticos</h2>

```
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisão = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
```

Lembrado que soma `+` em Strings serve para concatenar

<h2>Operadores Aritméticos (Strings)</h2>

```
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
```

É possível verificar se uma variável é NaN ou não com a função `isNaN()`

<h2>NaN = Not a Number</h2>

```
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)
```

<h2>A ordem importa</h2>

Começa por multiplicação e divisão, depois soma e subtração.

```
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
```

Parênteses para priorizar uma expressão

<h2>Operadores Aritméticos Unários</h2>

```
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
```

Mesma coisa para o decremento `--x`

O `+` e `-` tenta transformar o valor seguinte em número

```
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
```

O `-` antes de um número torna ele negativo

<a href="https://developer.mozilla.org/pt-BR/docs/Web/Javascript/Guide/Expressions_and_Operators">Guia Completo de Operadores</a>

<h1>Boolean e Condicionais</h1>

<h2>Boolean</h2>

Existem dois valores booleanos `false` ou `true`.

```
var possuiGraduacao = true;
var possuiDoutorado = false;
```

<h2>Condicionais If e Else</h2>

Verificar se  uma expressão é verdadeira com `if` , caso contrário o `else` será ativado.

```
var possuiGraducao = true;

if (possuiGraduacao) {
    console.log('Possui gradução');
} else {
    console.log('Não possui gradução');
}
```

O valor dentro dos parênteses sempre será avaliado em `false` ou `true`.

<h2>Condicionais Else If</h2>

Se o `if` não for verdadeiro, ele testa o `else if` 

```
var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui Doutorado
```

<h2>Truthy e Falsy</h2>

Existem valores que retornam `true` e outros que retornam `false` quando verificados em uma expressão booleana.

```
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
```

Todo o resto truthy

```
// Truthy
if(true)
if(1)
if(' ')
if('gabriel')
if(-5)
if({})
```

<h2>Operador Lógico de Negação!</h2>

O operador  `!`,  nega uma operação booleana. Ou seja,  `!true` é igual a `false` 

```
// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
```

Dica, você pode utilizar o `!!` para verificar se uma expressão é Truthy ou Falsy

<h2>Operadores de comparação</h2>

Vão sempre retornar um valor booleano

```
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false
```

O `==` faz uma comparação não tão estrita e o `===` faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos `===`

```
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === '10'; // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
```

<h2>Operadores Lógicos &&</h2>

`&&` Compara se uma expressão e a outra é verdadeira

```
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // false
```

Se ambos os valores forem `true` ele irá retornar o último valor verificado se algum valor for `false` ele irá retornar o mesmo e não irá continuar a verificar os próximos

<h2>Operadores Lógicos ||</h2>

`||` Compara se uma expressão ou outra é verdadeira

```
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
( 5>= 5) || (3 < 6); // true
```

Retorna o primeiro valor `true` que encontrar

<h2>Switch</h2>

Com o `switch` você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave `break;` para cancelar a continuação. O valor de `default` ocorrerá caso nenhuma das anteriores seja verdadeira.
 
```
var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    default: // Case nenhuma das opções sejam verdadeiras, ele retorna essa
        console.log('Feche os olhos.');
}
```
<hr>

<h1>Funções</h1>

Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

```
fuction areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4
```

Chamada de function declaration

```
function pi() { // você pode executar uma função e já executar ela
    return 3.14; // o valor que está aqui já vai ser retornado
}

var total = 5 * pi(); // 15.7

console.log(total);
console.log(pi());
console.log(pi); // essa função não está sendo executada e sim sendo retornada direto
```

Parênteses `()` executam uma função

<h2>Parâmetros e Argumentos</h2>

Ao `criar` uma função, você pode definir `parâmetros`.
Ao `executar` uma função, você pode passar `argumentos`. 

```
// peso e altura são parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(80, 1.70) // 80 e 1.70 são os argumentos
```

Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também

<h2>Parênteses executa a função</h2>

```
fuction corFavorita(cor) {
    if( cor === 'azul' ) {
        return 'Você gosta do céu';
    } else if(cor === 'verde') {
        return 'Você gosta de árvores';
    } else {
        return 'Você não gosta de nada';
    }
}

corFavorita(); // retorna 'Você não gosta de nada'
```

Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

<h2>Argumentos podem ser funções</h2>

Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

```
addEventListener('click', fuction() {
    console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
```

Funções anônimas são aquelas em que o nome da função não é definido, escritas como `fuction() {}` ou `() => {}` 

<h2>Pode ou não retornar um valor</h2>

Quando não definimos o return, ela irá retornar `undefined`. O código interno da função é executado normalmente, independente de existir valor de return ou não.

```
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc)
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined
```

<h2>Valores retornados</h2>

Uma função pode retornar qualquer tipo de dado e até outras funções

```
function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if( idade >= 60 ) {
        return true;
    } else {
        return false;
    }
}
```

Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

<h2>Escopo</h2>

Variáveis e funções definidas dentro de um block `{}`, não são visíveis fora dele, ou seja, são variáveis locais

```
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193
return `Ainda faltam ${totalPaines - paisesVisitados} países`
}
console.log(totalPaises); // erro, totalPaises não definido
```

<h2>Escopo Léxico</h2>

Funções conseguem acessar variáveis que foram criadas no contexto `pai`, ou seja, ela é uma variável global que pode ser acessada por qualquer um

```
var profissao = 'Designer';

function dados() {
    var nome = 'Gabriel';
    var idade = 21;
    function outrosDados() {
        var endereco = 'Rio de Janeiro';
        var idade = 22;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outros dados();
}

dados(); // Retorna 'Gabriel, 22, Rio de Janeiro, Designer'
outrosDados(); // Retorna um erro 
```
 
<h2>Hoisting</h2>

Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

```
imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}
```

<h1>Objetos</h1>

Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

```
var pessoa = {
    nome: 'Gabriel',
    idade: 21,
    profissão: 'Designer',
    possuiFaculdade: true,
}

pessoa.nome; // 'Gabriel'
pessoa.possuiFaculdade; // true
```

Propriedades e métodos consistem em nome (chave) e valor

<h4>Métodos</h4>

É uma propriedade que possui uma função no local do seu valor.

```
var quadrado = {
    lados: 4
    area: function(lado) {
        return lado * lado;    
    },
    perimetro: function(lado) {
        return this.lados * lado
    },
}

quadrado.lados; // 4
quadrado. area(5); // 25
quadrado.perimetro(5); // 50
```

Abreviação de area: `function() {}` para `area() {}`, no ES6+

```
var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}
```

<h4>Organizar o Código</h4>

Objetos servem para organizar o código em pequenas partes reutilizáveis.

```
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14
```

`Math` é um objeto nativo de JavaScript. Já percebeu que `console` é um objeto e `log()` um método?

<h4>Criar um Objeto</h4>

Um objeto é criado utilizando as chaves `{}`

```
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'
```
 
<h4>Dot Notation Get</h4>

Acesse propriedades de um objeto utilizando o ponto `.` 
```
var menu = {
    width: 800,
    heigth: 50,
    backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'
```

<h4>Dot Notation Set</h4>

Substitua o valor de uma propriedade utilizando `.` e o `=` após o nome da mesma.

```
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

menu.backgroundColor = '#000'
console.log(menu.backgroundColor); // '#000'
```

<h4>Adicionar Propriedade e Métodos</h4>

Basta adicionar um novo nome e definir o valor.

```
var menu = {
    width: 800,
}

menu.height = 50;
menu.position = 'fixed';
```

<h4>Palavra-chave this</h4>

`this` irá faz uma referência ao próprio objeto.

```
var height = 120;
var menu = {
    width: 800,
    height: 50,
    metadeHeight() {
        return this.height / 2;
    }
}

menu.metadeHeight(); // 25
// sem o this, seria 60
```

this irá retornar o próprio objeto

<h4>Protótipo e Herança</h4>

O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

```
var menu = {
    width: 800
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
```

hasOwnProperty é um método de Object

<hr>

<h1>Tudo é Objeto</h1>

Strings, Números, Boolean, Obejtos e mais, possuem propriedades e métodos. Por isso são objetos.

```
var nome = 'Gabriel';

nome.length; // 5
nome.charAt(1); // 'a'
nome.replace('el', 'ell'); // 'Gabriell'
nome; // 'Gabriel'
```

Uma string herda propriedades e métodos do construtor `String()` 

<h4>Números</h4>

```
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'
```

Por um breve momento o número é envolvido em um Objeto (coerção), tendo aceso assim as suas propriedades e métodos

<h4>Funções</h4>

```
function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
// return lado * lado;
//}"

areaQuadrado.length; // 1
```

<h4>Elementos do DOM</h4>

```
<a class="btn">Clique</a>
```

```
var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
    console.log('Clicou')
})
```

Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.


<h4>Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.</h4>

<h1>Arrays e Loops</h1>

É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

```
var videoGames = ['Switch', 'PS4', 'XBOX'];

videoGames[0] // Switch
videoGames[2] // XBOX
```

Acesse um elemento da array utilizando `[n]` 

<h4>Métodos e Propriedades de uma Array</h4>

```
var videoGames = ['Switch', 'PS4', 'XBOX'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
```

Existem diversos outros métodos, como `map`, `reduce`, `forEach` 

<h4>For Loop</h4>

Fazem algo repetidamente até que uma condição seja atingida.

```
for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
// Retorna de 0 a 9 no console
```

O for loop possui 3 partes, `início`, `condição` e `incremento` 

<h4>While Loop</h4>

```
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Retorna de 0 a 9 no console
```

O for loop é o mais comum

<h4>Arrays e Loops</h4>

```
var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}
```

<h4>Break</h4>

O loop irá parar caso encontre a palavra `break` 

```
var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if(videoGames[i] === 'PS4') {
        break;
    }
}
```

<h4>forEach</h4>

forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

```
var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
videoGames.foreach(function(item) {
    console.log(item);
});
// O argumento item será atribuido dinamicamente
```

Podemos passar os seguintes parâmetros `item`,  `index` e `array` 

<h4>Não se confunda com a sintaxe</h4>

```
var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
    console.log(numero);
    numero++;
}
```

Não é recomendado escrever da forma acima, mas funciona normalmente.

<h1>Atribuição e Ternário</h1>

<h4>Operadores de Atribuição</h4>

Podem funcionar como formas abreviadas

```
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)
```

<h4>Operador Ternário</h4>

Abreviação de condicionais com `if` e `else`

```
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

// condição ? true : false
```

Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição

<h4>If Abreviado</h4>
Não é necessário abrir e fechar as chaves `{}` quando retornamos apenas uma linha de código

```
var possuiFaculdado = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
    console.log('Possui faculdade');
else
    console.log('Não possui faculdade');
```
<hr>

<h1>Escopo</h1>

<h4>Escopo de Função</h4>

Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

```
function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is nor defined
```

Escopo evita o conflito entre nomes.

<h4>Escopo de Função (Pai)</h4>

Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

```
var carro = 'Fusca';

function mostrarCarro() {
    var frase = `Meu carro é um ${carro}`;
    console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
conole.log(carro); // Fusca
```

<h4>Escopo de Bloco</h4>

Variáveis criadas com `var`, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando `const` e `let`, pois estas respeitam o escopo do bloco.

```
if(true) {
    var carro = 'Fusca';
    console.log(carro);
}
console.log(carro); // Carro
```

<h4>Var Vaza o Bloco</h4>

Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como `undefined`.

```
if(false) {
    var carro = 'Fusca';
    console.log(carro);
}
console.log(carro); // undefined
```

<h4>Const e Let no lugar de Var</h4>

A partir de agora vamos utilizar apenas const e let para declararmos variáveis.

```
if(true) {
    const carro = 'Fusca';
    console.log(carro);
}
console.log(carro); // erro, carro is nor defined
```

<h4>{} cria um bloco</h4>

Chaves `{}` criam um escopo de bloco, não confundir com a criação de objetos `= {}`

```
{
    var carro = 'Fusca';
    const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined
```

<h4>For Loop</h4>

Ao utilizar `var` dentro de um `for` loop, que é um bloco, o valor da variável utilizada irá `vazar` e existir fora do loop.

```
for(var i = 0 < 10; i++) {
    console.log(`Número ${i}`);
}
console.log(i); // 10
```

<h4>Const</h4>

Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

```
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
    dia: 21,
    mes: 'Dezembro',
    ano: 2018
}

data.dia = 09 // Funciona
data = 'Janeiro'; // erro
```

<h4>Let</h4>

Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

```
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável
```