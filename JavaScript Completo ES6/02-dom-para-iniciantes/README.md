<h1>Document Object Model (DOM)</h1>

É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

```
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser
```

Ao inspecionar um elemento com o Chrome, você está vendo a representação oficial do DOM.

<img src="https://i.imgur.com/lu4PMfw.jpg">

<h4>Window e Document</h4>

São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

```
window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body
```

window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

<h4>Node</h4>

Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

```
const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo
```

<hr>

<h1>Seleção de Elementos</h1>

<h4>ID</h4>

`getElementById` seleciona e retorna elementos do DOM

```
// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');
```

<h4>Classe e Tag</h4>

`getElementsByClassName` e `getElementsByTagName` selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

```
// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);
```

<h4>Seletor Geral Único</h4>

`querySelector` retorna o primeiro elemento que combina com o seu seletor CSS.

```
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child);
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');
```

<h4>Seletor Geral Lista</h4>

`querySelectorAll` retorna todos os elementos compatíveis com o seletor CSS em uma Nodelist

```
const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection[1]);
```

Diferente do `getElementByClassName`, a lista aqui é estática

<h4>HTMLCollection vs NodeList</h4>

A diferença está nos métodos e propriedades de ambas. Álem disso a NodeList retornada com `querySelectorAll` é estática.

```
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementByClassName('grid-section');
const grigSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHtml); // 4 itens
console.log(gridSectionNode); // 3 itens
```

<h4>Array-Like</h4>

HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array `forEach()` por exemplo, exite apenas em NodeList.

```
const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array) {
    gridItem.classList.add('azul');
    console.log(index); // index do item na array
    console.log(array); // a array completa
});
```

É possível transformar array-like em uma Array real, utilizando o método `Array.from(gridSection) `