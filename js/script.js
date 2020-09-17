"use strict"

let countryInput;
let flowerID;

class Bouquet {
    constructor(id, title, price, img){
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
    }
}

let bouquets = [
    new Bouquet("flower1", "Peony Bouquet", 29.99, "img/flowers1.png"),
    new Bouquet("flower2", "Pink & White Bouquet", 29.99, "img/flowers2.jpg"),
    new Bouquet("flower3", "Pink & White Bouquet\nVer. 2", 25.99, "img/flowers3.jpeg"),
    new Bouquet("flower4", "Pink Flower Bouquet", 34.99, "img/flowers4.jpg"),
    new Bouquet("flower5", "White & Pink Rose Bouquet", 19.99, "img/flowers5.jpg"),
    new Bouquet("flower6", "All White Bouquet", 22.99, "img/flowers6.webp"),
    new Bouquet("flower7", "Big Bouquet", 33.99, "img/flowers7.jpg"),
    new Bouquet("flower8", "Pink, White & Green Bouquet", 27.99, "img/flowers8.png"),
    new Bouquet("flower9", "All White Bouquet", 19.99, "img/flowers9.jpg")
]

function loadData(){
    flowerID = localStorage["flower"];
    let bouquet = bouquets.find(e => e.id == flowerID);

    document.getElementById("bouquet-img").src = bouquet.img;
    document.getElementById("bouquet-title").innerText = bouquet.title;
    document.getElementById("price").innerText = bouquet.price;

    updatePrice();
}


window.onload=function(){
    loadData();
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
    document.getElementById("total").innerText = (price + shipping).toFixed(2);
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