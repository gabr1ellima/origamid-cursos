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