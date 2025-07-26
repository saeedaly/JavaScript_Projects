
const rollbtn = document.getElementById("rollbtn");
const counterlabel = document.getElementById("counterlabel");
const maxValue = document.getElementById("max");
const minValue = document.getElementById("min");
let randomNumber;

rollbtn.onclick = function(){
    max = Number(maxValue.value);
    min = Number(minValue.value);
    randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    counterlabel.textContent = randomNumber;
}

