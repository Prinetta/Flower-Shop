"use strict"

let currentSlide = -1;
let amount = 5;

window.onload=function(){
    showSlides();
}

function showSlides(){
    let slides = document.getElementsByClassName("bouquet-img");
    for(let i = 0; i < amount; i++){
        slides[i].style.display = "none";
    }

    if(++currentSlide >= amount){
        currentSlide = 0;
    }
    console.log(currentSlide);
    slides[currentSlide].style.display = "block";
    setTimeout(showSlides, 4000);
}