<h1><a href="https://github.com/gabr1ellima/origamid-cursos/tree/main/JavaScript%20Completo%20ES6/javascript-para-iniciantes/variaveis">Variáveis</a></h1>

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

<h1><a href="https://github.com/gabr1ellima/origamid-cursos/tree/main/JavaScript%20Completo%20ES6/javascript-para-iniciantes/tipos-de-dados">Tipos de Dados</a></h1>

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
Você deve passar expressões / variáveis dentro de ${}