// const animais = document.getElementById('animais');
// console.log(animais.innerText);

// const animais = document.getElementById('teste'); // Retorna null
// console.log(teste);

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection[0]);

// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

// const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl);

// const linkInterno = document.querySelector('[href^="#"]');
// console.log(linkInterno);

// const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg);

// const gridSectionHtml = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// primeiraUl.classList.add('grid-section');

// console.log(gridSectionHtml);
// console.log(gridSectionNode);

// gridSectionNode.forEach(function(item, index) {
//     console.log(index);
// });

// const arrayGrid = Array.from(gridSectionHtml);

/*============================================
    EXERCÍCIO

// Retorne no console todas as imagens do site
const selectImages = document.querySelectorAll('img');
console.log(selectImages);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const images = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(images);

// Selecione todos os links internos (onde o href começa com #)
const linkSelector = document.querySelectorAll('[href^="#"]');
console.log(linkSelector);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animais-descricao h2");
console.log(h2Animais);

// Selecione o último p do site

============================================*/

const allParagraphs = document.querySelectorAll('p');

console.log(allParagraphs[allParagraphs.length - 1]);