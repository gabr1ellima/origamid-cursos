function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is nor defined

{
    let mes = 'Dezembro';
    console.log(mes);
}

console.log(mes);

{
    var carro2 = 'Fusca';
    const ano = 2018;
}
console.log(carro2); // Carro
// console.log(ano); // erro ano is not defined

var i = 50;

for(let i = 0 < 10; i++) {
    console.log(`Número ${i}`);
}
console.log(i); // 10

const semana = 'Sexta';

semana = 'Quinta'; // erro 

console.log(semana);
