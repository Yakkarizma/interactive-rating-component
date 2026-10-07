let ratings = document.querySelectorAll(".rating");
let submit = document.getElementById("submit");
let ratingHero = document.querySelector(".rating-hero");
let thankYouHero = document.querySelector(".thank-you-hero");
let result = document.getElementById("selected-rating");
let selectedRating = 0;


ratings.forEach(function(rating){
    rating.addEventListener("click",function(){
        selectedRating = rating.textContent;
        
        ratings.forEach(function(rating){
            rating.classList.remove("rating-active");
        });
            rating.classList.add("rating-active");
    });
});

submit.addEventListener("click",function(){
    ratingHero.style.display = "none";
    thankYouHero.style.display = "block";
    result.textContent = selectedRating;
});