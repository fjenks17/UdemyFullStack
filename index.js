var rand1 = Math.ceil(Math.random()*6);
var rand2 = Math.ceil(Math.random()*6);
document.getElementsByClassName("img1")[0].setAttribute("src", `images/dice${rand1}.png`);
document.getElementsByClassName("img2")[0].setAttribute("src", `images/dice${rand2}.png`);