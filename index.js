var rand1 = Math.ceil(Math.random()*6);
var rand2 = Math.ceil(Math.random()*6);
document.getElementsByClassName("img1")[0].setAttribute("src", `images/dice${rand1}.png`);
document.getElementsByClassName("img2")[0].setAttribute("src", `images/dice${rand2}.png`);

var header = document.getElementsByTagName("h1")[0];
if(rand1 > rand2){
    header.innerHTML = "Player 1 Wins!";
}
else if(rand2 > rand1){
    header.innerHTML = "Player 2 Wins!"
}
else{
    header.innerHTML = "Draw!";
}