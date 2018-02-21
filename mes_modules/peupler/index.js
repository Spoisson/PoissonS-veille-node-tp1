"use strict";

const tableau = require("./tableaux.js");

console.log(tableau.tabVille);
console.log(tableau.tabDomaine);

const maxNom = tableau.tabNom.length;
const maxPrenom = tableau.tabPrenom.length;
const maxTelephone = tableau.tabTelephone.length;
const maxCourriel = tableau.tabCourriel.length;

//const maxVille = tableau.tabVille.length;
//const maxDomaine = tableau.tabDomaine.length 


const peupler = () => {

	console.log('ok');

	let position = Math.floor(Math.random() * maxNom);
	let nom = tableau.tabNom[position];

	position = Math.floor(Math.random() * maxPrenom);
	let prenom = tableau.tabPrenom[position];


	position = Math.floor(Math.random() * maxCourriel);
	let courriel = tableau.tabCourriel[position];


	position = Math.floor(Math.random() * maxTelephone);
	let telephone = tableau.tabTelephone[position];

/*
	let position = Math.floor(Math.random() * maxVille);
	let ville = tableau.tabVille[position];
	position = Math.floor(Math.random() * maxDomaine);
	let domaine = tableau.tabDomaine[position];
*/


	return {
			nom : nom,
			prenom : prenom,
			telephone : telephone,
			courriel : courriel
			}

}

module.exports = peupler;