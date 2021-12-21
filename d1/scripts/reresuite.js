// Exercices Aléatoires --> Level02


// 2. En utilisant 'prompt', obtenez l'année de naissance de l'utilisateur et si l'utilisateur a 18 ans ou plus, autorisez l'utilisateur à conduire sinon dites à l'utilisateur d'attendre un certain nombre d'années.

/* let dateNaissance = prompt('Saisissez votre année de naissance');
let anneeEnCours = new Date().getUTCFullYear();*/

/*
Entrez votre date de naissance: 1994
Vous avez 26 ans. Vous êtes autorisé de conduire.
*/

/*Entrez votre date de naissance: 2005
Vous avez 16 ans. Vous serez autorisé à conduire après 2 ans.
*/

/*if(anneeEnCours - dateNaissance > 18)
{
    alert(`Vous avez ${anneeEnCours - dateNaissance} ans. Vous êtes autorisé de conduire.`)
}
else if (anneeEnCours - dateNaissance === 17)
{
    alert(`Vous avez ${anneeEnCours - dateNaissance} ans. Vous serez autorisé à conduire dans 1 an.`)
}
else if (anneeEnCours - dateNaissance === 16)
{
    alert(`Vous avez ${anneeEnCours - dateNaissance} ans. Vous serez autorisé à conduire dans 2 ans.`)
}
else
{
    alert(`Vous avez ${anneeEnCours - dateNaissance} ans. Vous êtes trop jeune pour conduire.`)
}*/
    
// 3. Écrivez un script qui invite l'utilisateur à entrer le nombre d'années. Calculez le nombre de secondes qu'une personne peut vivre. Supposons que quelqu'un ne vive que cent ans.
/* Entrez le nombre de vôtres que vous habitez: 100
Vous avez vécu 3153600000 secs.*/

let dateUtilisateur = prompt('Quel est votre date de naissance');
let dateConvertUser = new Date(dateUtilisateur.split('/').reverse().join('-'));
let dateActuelle = new Date();
let calculSeconde = dateActuelle - dateConvertUser;
let nombreAnnee = dateActuelle.getFullYear()-dateConvertUser.getFullYear();
let resteAns = 100-nombreAnnee;
let annee100 = dateActuelle.getFullYear() + resteAns;
let user = dateConvertUser.getUTCDay();
console.log(user);
let centAns = new Date(`${annee100}-${dateConvertUser.getMonth()+1}-${dateConvertUser.getDay()}`);
console.log(`Vous avez vécu ${calculSeconde} secs soit ${nombreAnnee} ans. Il vous reste ${centAns - dateActuelle} secs à vivre jusqu'à 100 ans.`);

// 4. Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time

// YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm

// let heureLisible1 = new Date().format('YYYY-MM-DD HH:mm')
// console.log(heureLisible1);

// Exercices Aléatoires --> Level03

// 1. Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time. L'heure et la minute doivent être toujours à deux chiffres (7 heures devraient être 07 et 5 minutes devraient être 05)
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

// Exercices Aléatoires --> Level04

// 1.Si a est supérieur à b return 'a est superieur à b' sinon 'a est inferieur à b'. Utilisez deux méthodes

//if else
// ternary operator.
/*  let a = 4
    let b = 3
    4 est supérieur à 3
*/

// 2.Les nombres pairs sont divisibles par 2 et le reste est zéro. Comment vérifier si un nombre est pair ou n'utilise pas JavaScript?

/*Enter un nombre: 2
2 est un nombre pair*/

/*Enter un nombre: 9
9 est un nombre impair.*/