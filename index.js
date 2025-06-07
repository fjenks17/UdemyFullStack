var rand1 = Math.ceiling(Math.random()*6);
var rand2 = Math.ceiling(Math.random()*6);
document.getElementsByClassName("img1").setAttribute("src", `/images/dice${rand1}.png`);
document.getElementsByClassName("img2").setAttribute("src", `/images/dice${rand2}.png`);