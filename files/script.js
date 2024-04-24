const navbar = document.querySelector("nav");

function toggleNavbarClass() {
  if (window.scrollY > 0) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
}

window.addEventListener("scroll", toggleNavbarClass);

navbar.style.transition = "top 0.3s ease-in-out";
navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";

// swiper js
swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});
