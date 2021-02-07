<h1><a href="https://github.com/gabr1ellima/origamid-cursos/tree/main/JavaScript%20Completo%20ES6/variaveis">Variáveis</a></h1>

Responsáveis por guardar dados na memória.
Inicia com a palavra `var`, `let` ou `const`

```
var nome = 'Gabriel';
let idade = 28;
const possuiFaculdade = true;
```

<h4>Evitam repetições</h4>
<em>DRY (Don't repeat yourself)</em>

```
var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;
```

<h4>Sintaxe</h4>
Palavra chave `var` seguida do nome, sinal de igual e o valor.

```
var nome = 'Gabriel';
var idade = 21
var prossuiFaculdade = true;
```

<h4>Sem valor</h4>
Pode declarar ela e não atribuir valor inicialmente.

```
var precoAplicativo;
// Retorna undefined
```

<h4>Nomes de variáveis</h4>

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

<h4>Declaração</h4>

Erro ao tentar uma variável que não foi declarada.

```
console.log(nome);
// Retorna nome is not defined
```

<h4>Hoisting</h4>

São movidas para cima do código, porém o valor atribuído não é movido. 
```
console.log(nome);
var nome = 'Gabriel';
// Retorna undefined

var profissao = 'Designer';
console.log(profissao);
// Retorna Designer
```

<h4>Mudar o valor atribuído</h4>

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
