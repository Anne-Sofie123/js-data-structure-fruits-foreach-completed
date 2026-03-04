"use strict";

let tableTwoFavorFruitList = ["Mango", "Dragonfruit", "Strawberry", "Blueberry"];


tableTwoFavorFruitList.forEach( fruit => {
    // console.log(`${fruit}`);
    let content = "";
    content += `
            <li>${fruit}</li>

    `;
    document.querySelector(".fruitList").innerHTML += content;
});




