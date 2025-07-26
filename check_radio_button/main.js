
let checkBox = document.getElementById("checkbox");
let visaBtn = document.getElementById("visaBtn");
let mastarCardBtn = document.getElementById("mastarCardBtn");
let PayPalBtn = document.getElementById("PayPalBtn");
let mySubmit = document.getElementById("mySubmit");
let myH1 = document.getElementById("myH1");
let myH2 = document.getElementById("myH2");

mySubmit.onclick = function(){
    if(checkBox.checked){
        myH1.textContent = "You are Subscribed."
    }else{
        myH1.textContent = "You are not Subscribed."
    }
    if(visaBtn.checked){
        myH2.textContent = "You are paying with Visa."
    }else if(mastarCardBtn.checked){
        myH2.textContent = "You are paying with MastarCard."
    }else if(PayPalBtn.checked){
        myH2.textContent = "You are paying with PayPal."
    }else{
        myH2.textContent = "You Should Select the payment method"
    }
}



