
const rollbtn = document.getElementById("rollbtn");
const counterlabel = document.getElementById("counterlabel");
let randomNumber;

rollbtn.onclick = function(){
    
    randomNumber = Math.floor(Math.random() * 10);
    counterlabel.textContent = randomNumber;
}

