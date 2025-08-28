// // Exercice 1 : Calculer l’âge en 2050

// let annee = parseInt(prompt("Saisir votre date de naissance: "))

// const calculAge =(year)=> 2050-year

// console.log(`En 2050, vous aurez ${calculAge(annee)} ans!`)

// // 🔹 Exercice 2 : Filtrer les nombres pairs

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

//  const findPair = (array) => array.filter(n => n%2==0)
//   console.log(findPair(number))

// //    Exercice 3:

// const calcul = (a,b,operation)=>{
// if (operation == "somme") {
//     return a+b
// }else if (operation == "différence") {
//     return a-b
// } else if(operation == "multiplication"){
//     return a*b
// }else if(operation == "division"){
//     return a/b
// }
// }
// let op = prompt("Choose an operation (somme, différence, multiplication et division):")
// let num1 = parseInt(prompt("Choose your first number:"))
// let num2 = parseInt(prompt("Choose your second number:"))
// console.log(`La ${op} de ${num1} et ${num2} est: ${calcul(num1,num2,op)}`)



// //  Exercice 5 : Vérifier si un mot contient une voyelle

// let mot = prompt("saisir un mot : ");
// let voyelles = ["a", "e", "i", "o", "u"];

// const ContainVoyelle = (string) => {
//     for (let i = 0; i < string.length; i++) {
//         if (voyelles.includes(string[i].toLowerCase())) {
//             return `Le mot ${string} contient une voyelle`;
//         }
//     }
//     return `Le mot ${string} ne contient pas une voyelle`
// }

// console.log(ContainVoyelle(mot));

// //  Exercice 6: Trouver le maximum

// const numbers = [15, 8, 23, 42, 4]

// let max = 0 
// numbers.forEach(number =>{
//     if(number>max){
//         max = number
//     }
// })

// document.writeln(`Le maximum est ${max}`)

// // //Exercice 7 : Compter les voyelles

// let mot = prompt("saisir un mot : ");
// let voyelles = ["a", "e", "i", "o", "u"];
// let count = 0
// const contienVoyelle = (string)=>{
//     for (let i = 0; i < string.length; i++) {
//         if(voyelles.includes(string[i])){
//             count ++
//         } 
//     }
//     return `Le mot ${string} contient ${count} voyelles`
// }
// console.log(contienVoyelle(mot))
// 