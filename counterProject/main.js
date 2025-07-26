
const Encreasebtn = document.getElementById("Encreasebtn");
const Resetbtn = document.getElementById("Resetbtn");
const Decreasebtn = document.getElementById("Decreasebtn");
const counterlabel = document.getElementById("counterlabel");
let counter = 0

Encreasebtn.onclick = function(){
    counter++;
    counterlabel.textContent = counter;
}

Decreasebtn.onclick = function(){
    counter--;
    counterlabel.textContent = counter;
}

Resetbtn.onclick = function(){
    counter = 0;
    counterlabel.textContent = counter;
}

