const images = [
  "providencia1.jpg",
  "providencia2.jpg",
  "providencia3.jpg",
  "providencia.jpg",
  "providencia4.jpg",
  "providencia5.jpg",
];
let currentImageIndex = 0;
console.log(images);

const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const img = document.querySelector("img");

prevButton.addEventListener("click", function () {
  currentImageIndex =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  img.src = images[currentImageIndex];
});

nextButton.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  img.src = images[currentImageIndex];
});
