const slideImage = document.querySelectorAll(".image");
const slideContainer = document.querySelector(".car-image");
const nextBtn = document.querySelector(".next-arrow .next");
const prevBtn = document.querySelector(".prev-arrow");
const modal = document.querySelector(".modal");
const thumbs = document.querySelector(".thumbs");
const imgdescription = document.querySelectorAll(".title");
const thumbnails = document.querySelectorAll(".thumbnail img");
const closeBtn = document.querySelector(".close");

let noImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

//Go to slide
function goToSlide(slideNumber) {
  slideContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  activeClass();
}

// //next btn

nextBtn.addEventListener("click", () => {
  if (modal.style.display === "block") {
    if (currentSlide < noImages - 1) {
      // goToSlide(0);
      openModal(currentSlide + 1);
    }
  }
});

// //prev btn

prevBtn.addEventListener("click", () => {
  if (modal.style.display === "block") {
    if (currentSlide > 0) {
      // goToSlide(noImages - 1);
      openModal(currentSlide - 1);
    }
  }
});

//  //set active class

function activeClass() {
  // set active class for slide image

  let currentActive = document.querySelector(".image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");
}

// Function to open the modal
function openModal(index) {
  currentSlide = index;
  modal.style.display = "block";
  slideImage.forEach((img, i) => {
    if (i === index) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
    // img.style.left = i * 100 + "%";
  });

  imgdescription.forEach((des, i) => {
    if (i === index) {
      des.style.display = "block";
    } else {
      des.style.display = "none";
    }
  });

  // title.textContent = imgdescription[index].textContent;
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listeners for thumbnail clicks
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    openModal(index);
  });
});

// Event listener for closing the modal
closeBtn.addEventListener("click", () => {
  closeModal();
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
