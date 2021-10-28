/*discipulos = ["Pedro", "Andre", "Tiago", "Joao"];

for (let discipulo in discipulos) {
  console.log(discipulos[discipulo] + " no barquinho.\n")
}

console.log(...discipulos + " no barquinho.")
*/
class novato {
  constructor () {
    this.nome = "nome";
    this.cargo = "discipulo1";
  }
  
  *otonome() {
      this.nome = "otonome";
  }
}

let amadeu = new novato;

//amadeu.nome = "amadeu";

console.log(amadeu.otonome());
let entrada = prompt();
console.log(entrada);