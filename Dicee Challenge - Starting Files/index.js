var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceNumber1 = "./images/" + "dice" + randomNumber1 + ".png";
var randomDiceNumber2 = "./images/" + "dice" + randomNumber2 + ".png";

var img1 = document.querySelector(".img1").setAttribute("src",randomDiceNumber1);
var img2 = document.querySelector(".img2").setAttribute("src",randomDiceNumber2);

if(randomNumber1 > randomNumber2){
    var heading1 = document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 === randomNumber2) {
    var heading2 = document.querySelector("h1").innerHTML = "Draw";
}
else{
    var heading3 = document.querySelector("h1").innerHTML = "Player 2 Wins";
}

