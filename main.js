"use strict";

let num = document.querySelector(".num");
let block = document.querySelector(".gallery");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        num.classList.add("show");
      } else {
        num.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(block);
