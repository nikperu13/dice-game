
function winner(num1, num2){
    if(num1 > num2){
        document.querySelector(".title").innerHTML = "Player 1 wins!🚩";
    }
    else if(num1 < num2){
        document.querySelector(".title").innerHTML = "🚩Player 2 Wins!";
    }
    else if(num1 === num2){
        document.querySelector(".title").innerHTML = "Draw!";
    }
}
function diceRoll(num1, num2){
    var diceImg = "images/dice"+ num1 + ".png";
    document.querySelector(".img1").setAttribute("src", diceImg);

    var diceImg = "images/dice"+ num2 + ".png";
    document.querySelector(".img2").setAttribute("src", diceImg);
}
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

diceRoll(randomNumber1, randomNumber2);
winner(randomNumber1, randomNumber2);





