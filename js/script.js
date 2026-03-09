"use strict";

// Array med dine yndlingsfrugter
let tableTwoFavorFruitList = ["Mango", "Dragonfruit", "Strawberry", "Blueberry"];

// Find HTML-elementet med class .fruitList
let fruitListContent = document.querySelector(".fruitList");

// Opret en tom variabel til at bygge HTML-indholdet
let content = "";

// Loop gennem arrayet og tilføj <li> for hver frugt
tableTwoFavorFruitList.forEach(fruit => {
    content += `<li>${fruit}</li>`;
});

// Indsæt hele listen i HTML
fruitListContent.innerHTML = content;




