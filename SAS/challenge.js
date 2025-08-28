// **********************Mardi*********************


// // 🗺️ Challenge : Le Voyageur et ses pièces d’or 🪙
// let or = 100
// let jour = parseInt(prompt("Combien de jours tu veux voyager?"))
// for(i=jour;i>0;i--){
//        if(i%2 !== 0){
//         Math.floor(or -= 3)
//        }else{
//         Math.floor(or -= or/2)
//     }
        
//     if (Math.floor(or) >= 0) {
//      console.log(`Le voyageur a survécu ${i} jours, Il vous reste ${or}`)
//     } else {
//         console.log("vous êtes expulsé du royaume.")
//         break
//     }
// }

// //🗺️ Challenge 1

// let pièces = 14
// let personnes = parseInt(prompt('combien de personnes vont jeter une pièce?'))
// let i = 1
// while(i <= personnes){
// if (pièces%7 !== 0) {
//   pièces *=2  
// } else {
//   pièces =pièces/2
// }
// console.log(`le nombre de pièces après chaque personne ${i} est ${pièces}`)
// i++;
// }
// console.log(`Le nombre totale des pieces : ${pièces}`)
    


// **********************Mercredi*********************

//🏰 Challenge 1 : Le Gardien du Trésor 🔑


let cles = 5

for(let i=0; i<= 10; i++){
  
    if(i%2 == 0){
    cles   -=1
  }else{
      cles += 2
  }
  if (cles >=10) {
    console.log(`Bravo, la porte s'est ouverte avec ${cles} clés !`)
     break
    
  } 
}
if(cles <10) {
    console.log(`Dommage, le joueur n'a pas réussi et il lui reste ${cles} clés.`)
   
  }


//⚔️ Challenge 2 : Le Tournoi des Héros 🏆

let noms =  ["Thor", "Athena", "Hercule"]
const heros = noms.map(nom => {
  return {
    nom: nom,
    force: Math.floor(Math.random() * 100) ,
    vie: Math.floor(Math.random() * 100) 
  };
});
heros.reduce((first, other) => first.force + other.vie)



