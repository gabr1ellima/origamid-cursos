// const menu = document.querySelector('.menu');

// menu.classList.add('ativo', 'teste');

// menu.classList.remove('azul');

// menu.classList.toggle('azul');

// if(menu.classList.contains('azul')) {
//     menu.classList.add('possui-azul');
// } else {
//     menu.classList.remove('teste');
// }

// menu.className += ' vermelho'; // Forma antiga

// console.log(menu.className);

// console.log(menu.classList.);

// const animais = document.querySelector('.animais');

// console.log(animais.attributes.class);
// console.log(animais.attributes.id);
// console.log(animais.attributes.['data-texto']);

// const img = document.querySelector('img');

// console.log(img.getAttribute('src'));

// const srcImg = img.getAttribute('src');

// console.log(srcImg);

//                 // atributo // valor
// img.setAttribute('alt', 'É uma raposa'); // Atualiza o alt
// console.log(img.getAttribute('alt'));

// const possuiAlt = img.hasAttribute('alt');
// console.log(possuiAlt);

// const carro = {
//     portas: 4,
//     andar: function (km) {
//         console.log(`Andou ${km}km/h`);
//     }
// }

/*============================================
    EXERCÍCIO

// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach((item) => {
    item.classList.add('ativo');
});

// Romeve a classe ativo de todos os itens do menu e mantenha apenas o primeiro

const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach((item) => {
    item.classList.remove('ativo');
});

menuItens[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo altura

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(possuiAtributo);
});

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com');

console.log(link);

============================================*/