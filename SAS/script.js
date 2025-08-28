
// Fonction classique
function carre(x) {
  return x * x;
}

// Fonction fléchée
const carre = (x) => x * x;

console.log(carre(5)); // 25

let nom = "Chaimaa";
let age = 21;

console.log(`Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`);
// Bonjour, je m'appelle Chaimaa et j'ai 21 ans.

let texte = `Ligne 1
Ligne 2
Ligne 3`;
console.log(texte);



let couleurs = ["rouge", "vert", "bleu"];
let [c1, c2] = couleurs;

console.log(c1); // rouge
console.log(c2); // vert



let personne = { nom: "Chaimaa", age: 21 };
let { nom, age } = personne;

console.log(nom); // Chaimaa
console.log(age); // 21

//Spread
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

//reST
function somme(...nombres) {
  return nombres.reduce((a, b) => a + b, 0);
}
console.log(somme(1, 2, 3, 4)); // 10

//CLASS
class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
}

let p1 = new Personne("Chaimaa", 21);

// math.js
export const PI = 3.14;
export function addition(a, b) {
  return a + b;
}

// main.js
import { PI, addition } from "./math.js";

console.log(PI);          // 3.14
console.log(addition(2,3)); // 5

let map = new Map();
map.set("nom", "Chaimaa");
map.set("age", 21);

console.log(map.get("nom")); // Chaimaa
console.log(map.size);       // 2

for (let [cle, valeur] of map) {
  console.log(cle, valeur);
}


let set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}

set.add(4);
console.log(set.has(3)); // true
console.log(set.size);   // 4
