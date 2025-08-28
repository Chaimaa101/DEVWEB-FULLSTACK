
// //1⃣ Arrow Functions ex1
// const addition = (a,b) => a+b
// document.writeln(addition(4,5))

// //ex2
// const multiplierParDeux = (...tab) => {
//     return tab.map((n)=>n*n)
// } 
// document.writeln(multiplierParDeux(3,3,7,10,6))



// //ex3
// const saluer = (nom) => `Hey, ${nom}!`
// document.writeln(saluer("Mileva"))

//2⃣ Destructuring EX1
// const personne = { nom: "Ali", age: 25, ville: "Casablanca" };
// const {nom , age} = personne 


// //ex2
// const nombres = [10, 20, 30, 40];
// const [c1, ,c3] = nombres

// //EX3
// const sayHey = ({nom,prenom}) =>`Hey ${nom} ${prenom}`
// document.writeln(sayHey({nom: "shaimae" , prenom : "AFKIR"}))

// // 3⃣ Template Literals (Backticks) EX1
// const nom = "chaimaa";
// const age = 22;
// document.writeln(`Bonjour ${nom} , tu es ${age} ans`)

// //EX2
// const addition = (a,b) => `Le résultat de ${a} + ${b} est ${a+b}`
// document.writeln(addition(4,5))

// //4⃣ Rest Operator EX 1
// const somme = (...nbrs) =>{
//     return nbrs.reduce((a,b) => a+b,0)
// }
// document.writeln(somme(3,5,8,9))

// //EX2
// const fruits = ["pomme", "banane", "orange", "kiwi"];
// const [first, ...rest] = fruits
// document.writeln(first)
// document.writeln(rest)


// //5⃣ Spread Operator EX1
const tab1 = [1, 2, 3];
const tab2 = [4, 5, 6];
document.writeln([...tab1,...tab2])

// //EX2
const user = { nom: "Ali", age: 25 };

const utilisateur = {...user,pays : "Maroc"}
console.log(utilisateur.pays)