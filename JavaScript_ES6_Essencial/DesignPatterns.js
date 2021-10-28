/*
Design Patterns mais utilizados em JS

- Factory
- Singleton
- Decorator
- Observer
- Module
*/

// Factory -> retorna objeto sem necessidade de usar o new
function Pessoa(customProperties) {
    return {
        name: 'Guilherme',
        lasName: 'Cabrini',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age: 22});
console.log(p);


// Singleton -> criar uma instancia de uma função e toda vez que a função for chamada vai retornar sempre a mesma instancia
function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Isaac'});
const p2 = Pessoa.call({name: 'jubileu'});

console.log(p);
console.log(p2);


// Decorator -> uma função recebe uma função como parametro e estende seu comportamento sem modificá-la
let loggedIn = true;

function callIfAuthenticated(fn) {
    return loggedIn && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => sum(0, 0)));
console.log(callIfAuthenticated(() => sum(2, 3)));
console.log(callIfAuthenticated(() => sum(2, 3)));



// Observer -> mantém uma coleção de objetos e quando há mudança no estado notifica a todos eles sobre a mudança

/*
Para os observer fazer um programa:
Uma academia tem vários clientes => crie uma classe para os dados dos clientes
cada cliente tem adesão a uma assinatura... Inicialmente faça como se todos tivesse a mesma assinatura
Em certo tempo surge promoção e o valor de cada plano muda... crie um código que atualize a promoção no cadastro de todos os clientes na mesma hora

depois faça para o caso de que existam clientes com planos diferentes
*/
class Observable {
    constructor() {
        this.observables = [];
    }

    subscribe(fn) {
        this,this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribre 1: ${data}`);
const logData2 = data => console.log(`Subscribre 2: ${data}`);
const logData3 = data => console.log(`Subscribre 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('tenso');

o.unsubscribe(logData1);

o.notify('mais tenso');



// Module => separar o código em modulos e permite exportar e importar os códigos
//no node
let name = 'default';
function getName() {
    return name;
}
function setName(newName) {
    name = newName;
}

module.exports = {
    getName,
    setName
};

// Em outro arquivo: --------------------------------------------------------------------
const {getName, setName} = require('./DesignPatterns.js');

console.log(getName());
setName('Isaac');
console.log(getName());
//---------------------------------------------------------------------------------------



