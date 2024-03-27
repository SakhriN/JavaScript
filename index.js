const url = "https://pokeapi.co/api/v2/pokemon/"
let max = 493
let nb1 = Math.floor(Math.random() * max) + 1;
let nb1string = url + nb1;

console.log(nb1string);
nb1 = Math.floor(Math.random() * max) + 1;


// 1. Faites une requête API pour obtenir les données


let jsonData = localStorage.getItem('pokemon1');

let poke = document.getElementById("poke");
let namepokemon = document.getElementById("name-pokemon");
let heighpokemon = document.getElementById("heigh");
let weighpokemon = document.getElementById("weigh");

fatch();






function fatch() {
    fetch(nb1string)
        .then(response => {
            if (!response.ok) {
                throw new Error('La réponse de l\'API n\'est pas OK');
            }
            return response.json();
        })
        .then(data => {
            jsonData = JSON.stringify(data);
            localStorage.setItem('pokemon1', jsonData);

            // Mettre à jour les éléments HTML avec les nouvelles données du Pokémon
            poke.src = data.sprites.front_default;
            namepokemon.innerHTML = data.name;
            heighpokemon.innerHTML = data.height;
            weighpokemon.innerHTML = data.weight;

            console.log('Données de l\'API enregistrées dans le localStorage.');
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données de l\'API :', error);
        });
}


function changePokemon() {
    nb1 = Math.floor(Math.random() * 493) + 1;
    nb1string = url + nb1;
    fatch();
}

function precedentPokemon() {
    if (nb1 > 1) {
        nb1 = nb1 - 1;
        nb1string = url + nb1;
        fatch();
    }
    else {

        alert("Ce ne sera pas possible d'aller au dessous")
    }
}

function suivantPokemon() {
    if (nb1 < max) {
        nb1 = nb1 + 1;
        nb1string = url + nb1;
        fatch();
    }
    else {
        alert("Ce ne sera pas possible d'aller au dela")
    }
}



const change = document.getElementById("change");
change.addEventListener("click", changePokemon);

let precedent = document.getElementById("precedent");
precedent.addEventListener("click", precedentPokemon);

let suivant = document.getElementById("suivant");
suivant.addEventListener("click", suivantPokemon);