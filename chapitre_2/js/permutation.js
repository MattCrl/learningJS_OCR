let nombre1 = 5;
let nombre2 = 3;

let tempo = nombre1;
nombre1 = nombre2;
nombre2 = tempo;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5