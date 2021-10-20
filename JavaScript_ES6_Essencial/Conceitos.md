# Caracteristicas do JavaScript


## Tipagem fraca e dinâmica

JS não precisa de declaração explicita dos tipos das variáveis (tipagem fraca) e a mesma variável pode receber diferentes tipos de dados (tipagem dinâmica).

## Função de primeira e segunda classe

Função que pode ser atribuida a variável, array, outras funções e etc.

## Closure

Se refere ao escopo da variável/função. Antigamente só tinha o escopo global e escopo de função, mas apósserem implementados o *_let_* e o *_const_* passou a existir o escopo de bloco: se existe um bloco completo, uma variável poderá ser utilizada por todas as funções ou outros recursos que estiverem dentro desse bloco.

## Currying
Transformar uma função com dois ou mais parâmtros em uma função que precisa de apenas um parâmetro.

~~~javascript
function soma(a, b) {
    return a+b;
}

console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));
console.log(soma(2, 6));
~~~

O número 2 repete várias vezes. Com o Currying o código acima vira apenas:
~~~javascript
function soma(a) {
    return funcion(b)
        return a + b
}

soma2 = soma(2);

console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
console.log(soma2(6));
~~~

## Hoisting

Permite usar uma variável ou função antes mesmo de ser atribuído valor a ela ou ser declarada a função.

~~~javascript
// Com variável
function fnvariavel() {
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fnvariavel();

// Com função
function fnfuncao() {
    log('Exemplo');

    function log(value) {
        console.log(value);
    }
}

fnfuncao()
~~~

## Imutabilidade

Nunca altera o objeto, array, matriz diretamente. Eles são copiados e somente a cópia é alterada.
~~~javascript
const user = {
    name: 'Isaac',
    lasName: 'Pires'
};

function getFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getFullName(user);

console.log(userWithFullName);
~~~

## Tipos e Variáveis

variavel | definição
---------|------------
var | Não respeita escopo de bloco, sometne de função e global<br>variavel total
let | Respeita escopo de bloco, função e global<br>Variável total
const | Respeita escopo de bloco, função e global<br>Se a variável for do tipo primitivo não é possível alterar o valor, mas se for array ou objeto pode alterar os atributos

~~~javascript
// Escopo Global

{
    // Escopo de bloco
}

function fn() {
    // Escopo de função
}
~~~

~~~javascript
// VAR

var teste = 'exemplo';

( () => {
    console.log(`Valor dentro da função "${teste}"`);

    if (true) {
        var teste = "exemplo";
        console.log(`Valor dentro do if "${teste}"`);
    }

    console.log(`Valor após o if "${teste}"`);
})();

// LET
( () => {
    let teste = 'valor função';
    console.log(`Valor dentro da função "${teste}"`);

    if (true) {
        let teste = "exemplo";
        console.log(`Valor dentro do if "${teste}"`);
    }

    console.log(`Valor após o if "${teste}"`);
})();

// CONST
const name = 'Isaac';

// Não vai deixar alterar o valor
name = 'Isaac';

const user = {
    name: 'Isaac';
};

// Se for um objeto, pode trocar as propiredades
user.name = 'Outro nome';

// Não pode sfazer o objeto apontar para outro lugar
user = {
    name = 'Isaac';
}

const persons = ['Isaac', 'João', 'Maria'];

// Podemos adicionar novos itens
persons.push('Pedro');

// Podemos remover
persons.shift();

// Podemos alterar diretamente
persons[1] = 'Roberta';

console.log('\nArray após as alterações: ', persons);
~~~



















