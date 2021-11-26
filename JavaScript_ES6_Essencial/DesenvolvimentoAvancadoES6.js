//Symbols
const uniqueId = Symbol('Hello');

//O symbol gera um identificador único para cada coisa que é passada a ele

//Well know Symbols

const arr = [1, 2, 3, 4];
const str = 'Esta é uma string';

//symbol iterator
// [Symbol.iterator]() -> retorna 



//forma simples
/* for (let i of arr) {
    console.log(i);
} */


//objetos não são naturalmente iteraveis, mas com o Symbol é possível
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

console.log('\n\nAtribuindo a variável');
const it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); 


console.log('\n\nSpread operator');
const arr2 = [...obj];
console.log(arr2);

console.log('\n\nFor of');
for (let i of obj) {
    console.log(i);    
}





///////////////////////////////// GENERATORS /////////////////////////////////

// Funções com pausas, executa parte por parte

function* hello() { //precisa do *
    console.log("Hello");
    yield; // faz a pausa

    console.log("From");
    yield 2; // o número seria o value do "symbol"

    console.log("Generators");
    yield; // faz a pausa
}

const gen = hello();
console.log(gen.next());
console.log(gen.next('Outside!')); // quando executa essa parte o valor passado no next é inserido no yield atual e mostra no seguinte

//exemplo com loop
function* naturalNumbers() {
    let number = 0;
    while(true){
        yield number; //dou a pausa e recebo o valor
        number++;
    }
}

const gen2 = naturalNumbers();

console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());



///// Como fica o objeto com o generator
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() { //com o * vira um generator
        for (let index = 0; index < this.values.length; index++) {
            yield this.values[index];
            
        }
    }
};

for(let value of obj) {
    console.log(value)
;}

