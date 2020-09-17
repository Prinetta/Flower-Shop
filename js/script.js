"use strict"

let countryInput;

window.onload=function(){
    countryInput = document.getElementById("country");
    countryInput.addEventListener('change', updateShipping);
}

function showPassword(){
    let passwordText = document.getElementById("password");
    if(passwordText.type === "password"){
        passwordText.type = "text";
    } else {
        passwordText.type = "password";
    }
}

function updateShipping(){
    let shippingLabel = document.getElementById("shipping-price");
    let shippingPrice = 19.99;
    switch(countryInput.value.toLowerCase()){
        case "germany":
            shippingPrice = 4.99;
            break;
        case "uk":
            shippingPrice = 6.99;
            break;
        case "usa":
            shippingPrice = 14.99;
            break;
    }
    shippingLabel.innerText = shippingPrice;
    updatePrice();
}

function updatePrice(){
    let price = parseFloat(document.getElementById("price").innerText);
    let shipping = parseFloat(document.getElementById("shipping-price").innerText);
    console.log(price);
    console.log(shipping);
    document.getElementById("total").innerText = price + shipping;
}

function validateForm() {
    let inputs = document.getElementsByTagName('input');
    let isFilledOut = true;
    for (let input of inputs){
        if(input.value == ""){
            alert("Please fill out the form.");
            isFilledOut = false;
            return;
        }
    }

    if(document.getElementById("password").value.length < 8){
        alert("Password is too short.");
        return;
    }

    if(isFilledOut){
        showBuyButton();
    }
}

function showBuyButton(){
    let buyBtn = document.getElementById("buy-button");
    if (buyBtn.style.display === "none" || buyBtn.style.display === "") {
        document.getElementById("validate-information").style.display = "none";
        buyBtn.style.display = "block";
    }
}

function buy(){
    alert("This bouquet has been bought.");
    window.location.replace("index.html");
}