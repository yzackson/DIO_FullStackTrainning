// central de programadores

class person {
    #name = 'nada';
    #age = 00;

    constructor(name, age, langs) {
        this.#name = name;
        this.#age = age;
        this.programingLangs = langs;
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }

    get age() {
        return this.#age;
    }
    set age(value) {
        this.#age = value;
    }
}

let newPerson = new person('Isaac', 22, ['C', 'C++', 'JS']);

console.log(newPerson.name + '\n' + newPerson.age + '\n' + newPerson.programingLangs);