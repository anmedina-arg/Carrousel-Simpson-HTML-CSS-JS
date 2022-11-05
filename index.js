const carouselContainer = document.querySelector(".carouselContainer");
const slides = document.querySelectorAll(".slides");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// console.log(carouselContainer);
// console.log(slides);
// console.log(next);
// console.log(prev);

let counter = 1;

const size = slides[0].clientWidth;

console.log(size);

carouselContainer.style.transform = "translateX(" + -size * counter + "px";

next.addEventListener("click", () => {
  if (counter >= slides.length) return;
  carouselContainer.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselContainer.style.transform = "translateX(" + -size * counter + "px";
});

// prev.addEventListener("click", () => {
//   if (counter <= 0) return;
//   carouselContainer.style.transition = "transform 0.4s ease-in-out";
//   counter--;
//   carouselContainer.style.transform = "translateX(" + -size * counter + "px";
// });

// carouselContainer.addEventListener("transitionend", () => {
//   console.log(slides[counter]);
//   if (slides[counter].id === "lastslide") {
//     carouselContainer.style.transition = "none";
//     counter = slides.length - 2;
//     carouselContainer.style.transform = "translateX(" + -size * counter + "px";
//   }
// });

// carouselContainer.addEventListener("transitionend", () => {
//   console.log(slides[counter]);
//   if (slides[counter].id === "firstslide") {
//     carouselContainer.style.transition = "none";
//     counter = slides.length - counter;
//     carouselContainer.style.transform = "translateX(" + -size * counter + "px";
//   }
// });
