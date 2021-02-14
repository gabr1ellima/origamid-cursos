// function areaQuadrado(lado) {
//     return lado * lado;
// }

// console.log(areaQuadrado(10));

// function pi() { // você pode executar uma função e já executar ela
//     return 3.14; // o valor que está aqui já vai ser retornado
// }

// var total = 5 * pi(); // 15.7

// console.log(total);
// console.log(pi());
// console.log(pi); // essa função não está sendo executada e sim sendo retornada direto

// function imc(peso, altura) {
//     const imc = peso / (altura * altura);
//     return imc;
// }

// console.log(imc(80, 1.8));

// function corFavorita(cor) {
//     if(cor === 'azul') {
//         return 'Você gosta do céu';
//     } else if(cor === 'verde') {
//         return 'Você gosta de árvores';
//     } else {
//         return 'Você não gosta de cores';
//     }
// }

// addEventListener('click', function() { console.log('Oi') });


// function mostraConsole() {
//     console.log('Olá')
// }

// addEventListener('click', mostraConsole);

// function imc2(peso, altura) {
//     const imc2 = peso / (altura ** 2);
//     console.log(imc2)
// }

// imc2(20, 1.8); // retorna o imc
// console.log(imc2(80, 1.80)); // retorna o imc e undefined

// function terceiraIdade(idade) {
//     if(typeof idade !== 'number') {
//         return 'Por favor preencha um número'
//     } else if( idade >= 60 ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(terceiraIdade(60))

// function faltaVisitar(paisesVisitados) {
//     var totalPaises = 193;
//     return `Falta visitar ${totalPaises - paisesVisitados} países`
// }

// console.log(totalPaises); // está dentro do escopo

// var profissao = 'Designer';

// function dados() {
//     var nome = 'Gabriel';
//     var idade = 21;
//     function outrosDados() {
//         var endereco = 'Rio de Janeiro';
//         var idade = 22;
//         return `${nome}, ${idade}, ${endereco}, ${profissao}`;
//     }
//     return outrosDados();
// }

// console.log(dados()); // Retorna 'Gabriel, 22, Rio de Janeiro, Designer'
// console.log(outrosDados()); // Retorna um erro

/*============================================
    EXERCÍCIO

// Crie uma função para verificar se um valor é Truthy
function isTrue (value) {
    if( value == true ) {
        return "é verdadeiro"
    } else {
        return "é falso"
    }
};

console.log(isTrue(1));

// function isTruthy(dado) {
//     return!!dado;
// }

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado * 4
};

console.log(perimetroQuadrado(20));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName (firstName, lastName) {
    return `${firstName} ${lastName}`
};

console.log(fullName("Gabriel", "Lima"));

// Crie uma função que verifica se um número é par
function isEven(value) {
    if (value % 2 === 0) {
        return "É par"
    } else {
        return "É impar"
    };
};

console.log(isEven(5));

// Crie uma função que retorna o tipo de
// dado do argumento passado nela (typeof)
function typeData(data) {
    return (`O tipo de dado de ${data} é ${typeof(data)}`)
};

console.log(typeData(10000));

// addEventListener é uma função nativa do Javascript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function() {console.log('Gabriel Lima Pereira')});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises= 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

// Corrijido
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(10))
console.log(jaVisitei(10));
============================================*/