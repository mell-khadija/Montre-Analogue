// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
function demarrerLaMontre() {

//Ajouter l'heure , minite , seconde  dans des varaiables
  
 var date = new Date();
 var hour = date.getHours();
 var minute = date.getMinutes();
 var second = date.getSeconds();


// 
// Hint : Tous les aiCalculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille secondeguilles doivent se déplacer chaque second selon un degré

var  hourDeg = (hour*30)+(0.5*minute); 
var  minuteDeg = (minute*6)+(0.1*second);
var  secondDeg = second*6; 

// Déplacer les aiguilles 

AIGUILLEHR.style.transform = 'rotate(' + hourDeg + 'deg)';
AIGUILLEMIN.style.transform = 'rotate(' + minuteDeg + 'deg)';
AIGUILLESEC.style.transform = 'rotate(' + secondDeg + 'deg)';
 
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);