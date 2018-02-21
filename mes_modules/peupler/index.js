"use strict";

/*

	Les données en provenance de tableaux.js seront importées et manipulées dans la fonction "peupler" qui sera à son tour exportée. La fonction sera importée dans le fichier d'application 04-apps.js.
	Le fichier d'application prendra la fonction et l'utilisera à plusieurs reprises, ici 10 fois, et intégrera les données générées par la fonction dans la BD et dans la liste des membres.

*/

const tableau = require("./tableaux.js");

const maxNom = tableau.tabNom.length;
const maxPrenom = tableau.tabPrenom.length;
const maxTelephone = tableau.tabTelephone.length;
const maxCourriel = tableau.tabCourriel.length;
const maxVille = tableau.tabVille.length;

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

	position = Math.floor(Math.random() * maxVille);
	let ville = tableau.tabVille[position];

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
			courriel : courriel,
			ville : ville
			}

}

module.exports = peupler;