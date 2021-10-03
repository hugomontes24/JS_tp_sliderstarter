let message;
console.log(message);
message="Bonjour !";

document.write(message);
// document.write("Salut tout le monde.");
document.write("<h2>Je suis un h2<h/2><br>");
// window.alert('Message d\'alerte !');
message="ciao";
console.log("Message por la console");
console.log(message);
console.log(typeof message);// control de type de variable
console.log(9%2);
// let firstName
// firstName = window.prompt("quel est votre prenom", "prenom");
// console.log(firstName);
// document.write("<p>bonjour " + firstName+"</p>");
let number;
let number2;
// number = parseInt(window.prompt("Donnez un nombre"));
// number2 = parseInt(window.prompt("Donnez un autre nombre"));
number +=number2
// document.write("le resultat est "+ number );
// console.log(typeof number2);
let prenoms = new Array();
console.log(prenoms.length);
prenoms.push('hugo','mohamed')
console.log(prenoms);
// console.l  et result = 3+(4*2);
// console.log(result);
prenoms[2]= "Alfred";

// console.log(prenoms);
// console.log(prenoms[0]);
// recuperer dernier element d'un tableau
longueur = prenoms.length;
console.log(longueur);
console.log(prenoms[longueur-1]);
// console.log(prenoms[1])

let students=[
    {
    firstname:'Alfred',
    lastname:'Dupont',
    birthDate:'1987-11-02',
    notes:[1,2,3,1]    
    },
    {
    firstname:'Hugo',
    lastname:'Machado',
    birthDate:'1987-09-07',
    notes:[1,2,3,4]
    },
    {
    firstname:'Michel',
    lastname:'Klein',
    birthDate:'1987-10-15',
    notes:[12,10,11,20]   
    }
];
// let students=[student1,student2,student3];



// document.write(students[0].firstname);
// console.log(students[0].firstname);

// let voiture={
    // marque: 'Renault',
    // modèle: 'Kadjar',
    // couleur: 'bleu',
    // places: 5,
    // dateMiseCirculation:'2012-03-12',
    // options: ['climatisation', 'gps', 'regulat']
// };
// console.log(voiture.options[0]);

let age=12;
// let apellido='machado';
// console.log(age!=13 || apellido=='mchado');

if (age<18){
    console.log('conditions : vous êtes mineur');//true
} else {
    console.log('conditions : vous etes majeur');//false
}


