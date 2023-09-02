const slideImage = document.querySelectorAll(".image");
const slideContainer = document.querySelector(".car-image");
const nextBtn = document.querySelector(".next-arrow .next");
const prevBtn = document.querySelector(".prev-arrow");
const navDots = document.querySelector(".dots");
const dot = document.querySelectorAll(".dot");

let noImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// set up the slider

function init() {
    /*
    slideImage[0]= 0
    slideImage[1]= 100%
    slideImage[2]= 200%
    */

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active")
  
};

init();

//create nav dots

// function createNavDots() {
   //for (i = 0; i < noImages; i++){
    //const dot = document.createElement("div");
    //dot.classList.add("dot");
    //navDots.appendChild(dot);
   //}

   //navDots.children[0].classList.add("active");
   //}
 
//next btn

nextBtn.addEventListener("click", () => {
   if (currentSlide >= noImages - 1) {
    goToSlide(0);
    currentSlide = 0;
    return;
    }

    currentSlide++;
    //slideContainer.style.transform = "translateX(-" + slideWidth + "px)";
    goToSlide(currentSlide); 
});

//prev btn

prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
     goToSlide(noImages - 1);
     currentSlide = noImages - 1;
     return;
     }
 
     currentSlide--;
     goToSlide(currentSlide); 
 });
 
 //Go to slide
 function goToSlide(slideNumber) {
     slideContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

     currentSlide = slideNumber;

     activeClass();

 }
 

 //set active class

 function activeClass() {
  // set active class for slide image

  let currentActive = document.querySelector(".image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  let currentDot = document.querySelector(".dot.active");
  currentDot.classList.remove("active");
  navDots.children[currentSlide].classList.add("active");
 } 

 //dot events
 function dott(){
  dot.addEventListener("click", () => {
    goToSlide(1);
 }); 
 }

 dott();