// Loja de carros

let estoque = [];
let modelo = "Siena";
let ano = 2015

class categoria {
    constructor() {
        this.default = "utilitario";
    }
}

class carro extends categoria {
    #modelo = "";
    constructor() {
        super();
        this.#modelo = "not found";
        this.ano = 9999;
    }

    getModelo() {
        return this.#modelo;
    }
}

let novoCarro = new carro;

console.log(novoCarro);

estoque.push(novoCarro);
novoCarro.tanque = 50;
novoCarro.quantidadeRodas = 4;

console.log(estoque);
console.log(novoCarro.getModelo());