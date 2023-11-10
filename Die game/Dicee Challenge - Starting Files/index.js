var player1 =  Math.floor(Math.random()*6) + 1;
var player2 =  Math.floor(Math.random()*6) + 1;

var randomDiceSrc1 = "./images/dice" + player1  + ".png";
var randomDiceSrc2 = "./images/dice" + player2  + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", randomDiceSrc1);
document.getElementsByClassName("img2")[0].setAttribute("src", randomDiceSrc2);

if(player1 > player2) {
    document.getElementsByTagName("h1")[0].innerHTML = "player1 Wins!";
}
else if(player1 < player2) {
    document.getElementsByTagName("h1")[0].innerHTML = "player2 Wins!";
}
else {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw";
}