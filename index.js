var rand1 = Math.ceiling(Math.random()*6);
var rand2 = Math.ceiling(Math.random()*6);
document.getElementsByClassName("img1").setAttribute("src", `/images/img${rand1}.png`);
document.getElementsByClassName("img2").setAttribute("src", `/images/img${rand2}.png`);