var pessoa = {
    nome: 'Gabriel',
    idade: '21'
}

console.log(pessoa.nome);

var quadrado = {
    lados: 4,
    area(lado) { 
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado; // "this" faz referência ao objeto em si
    },
    cinco() {
        return 5;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

var height = 100;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}

menu.backgroundColor = '#000';

menu.color = 'blue';

menu.esconder = function() {
    console.log('Escondi')
}

var bg = menu.backgroundColor;

/*============================================
    EXERCÍCIO
// Crie um bejto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo
var dadosPessoais = {
    firstName: 'Gabriel',
    lastName: 'Lima',
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(dadosPessoais.firstName);
console.log(dadosPessoais.fullName());


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

console.log(carro.preco);

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir (pessoa) {
        if (pessoa === 'homem') {
            return 'Latir';
        } else {
            return 'Nada';
        }
    }
}

console.log(cachorro.latir('homem'));
============================================*/