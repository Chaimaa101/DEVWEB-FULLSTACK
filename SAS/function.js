
function carre(n) {
  return n * n;
}

function miroir(chaine) {
  return chaine.split("").reverse().join("");
}


function balance(a, b) {
  return a > b ? a : b;
}


let choix = prompt("Choisis ton sage : carré / miroir / balance");

if (choix === "carré") {
  let n = Number(prompt("Entre un nombre :"));
  console.log(`Résultat : ${carre(n)}`);
} else if (choix === "miroir") {
  let mot = prompt(`Entre une chaîne :`);
  console.log(`Résultat : ${miroir(mot)}`)
} else if (choix === "balance") {
  let a = Number(prompt(`Premier nombre :`))
  let b = Number(prompt(`Deuxième nombre :`))
  console.log(`Résultat :  ${balance(a, b)}`)
} else {
  console.log(`Choix invalide !`);
}


