// function showPage() {
//   const sectionTwo = document.getElementById("sectionTwo");

//   if (sectionTwo.style.display === "none") {
//     sectionTwo.style.display = "block";
//   } else {
//     sectionTwo.style.display = "none";
//   }

//   sectionTwo.scrollIntoView({ behavior: "smooth" });
// }

// document.addEventListener("DOMContentLoaded", function () {
const yourButton = document.getElementById("yourButtonId");

yourButton.addEventListener("click", function () {
  const sectionTwo = document.querySelector(".section2");
  const section1 = document.querySelector(".section1");

  sectionTwo.classList.toggle("active");
  section1.classList.toggle("move-out");

  // section1.style.display = "none";

  if (sectionTwo.style.display === "none" || sectionTwo.style.display === "") {
    sectionTwo.style.display = "block";
    console.log("1");
  } else {
    sectionTwo.style.display = "none";
  }

  sectionTwo.scrollIntoView({ behavior: "smooth" });
});

// JavaScript
// document.addEventListener("DOMContentLoaded", function () {
//   const section1 = document.querySelector(".section1");
//   let lastScrollPosition = window.scrollY;
//   let isThrottled = false;

//   function throttle(callback, delay) {
//     if (!isThrottled) {
//       callback();
//       isThrottled = true;
//       setTimeout(() => {
//         isThrottled = false;
//       }, delay);
//     }
//   }
//   window.addEventListener("scroll", function () {
//     throttle(function () {
//       const currentScrollPosition = window.scrollY;
//       const halfwayDown = window.innerHeight / 3;

//       // Check if scrolling down
//       if (
//         currentScrollPosition > lastScrollPosition &&
//         currentScrollPosition > halfwayDown
//       ) {
//         section1.classList.add("move-out");
//       } else {
//         // Scrolling up
//         section1.classList.remove("move-out");
//       }

//       lastScrollPosition = currentScrollPosition;
//     }, 0); // Adjust the throttle delay (in milliseconds) as needed
//   });
// });

// oldCode

//   window.addEventListener("scroll", function () {
//     const currentScrollPosition = window.scrollY;
//     const halfwayDown = window.innerHeight / 2;

//     // Check if scrolling down
//     if (
//       currentScrollPosition > lastScrollPosition &&
//       currentScrollPosition > halfwayDown
//     ) {
//       section1.classList.add("move-out");
//     } else {
//       // Scrolling up
//       section1.classList.remove("move-out");
//     }

//     lastScrollPosition = currentScrollPosition;
//   });
// });

// btn = document.getElementById("yourButtonId");

// btn.addevenlistener("click", function (e) {
//   e.preventDefault();
//   btn.scrollIntoView({ behavior: "smooth" });
// });
