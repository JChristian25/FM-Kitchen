// Select the navbar element
const navbar = document.getElementById("navbar");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Check if the page has been scrolled down
  if (window.innerWidth > 768) {
    if (window.scrollY > 65) {
      navbar.classList.add("shrink");
      navbar.classList.remove("full");
    } else {
      navbar.classList.remove("shrink");
      navbar.classList.add("full");
    }
  }

  let back2top = document.getElementById("back-to-top");
  if (window.scrollY > 150) {
    back2top.classList.add("active");
  } else {
    back2top.classList.remove("active");
  }

});

function toggleCarousel(n) {
  let slides = document.getElementsByClassName("carousel-slides");
  let controls = document.getElementsByClassName("carousel-control");

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    controls[i].classList.remove("active");
  }
  if (n >= 0 && n < slides.length) {
    slides[n].classList.add("active");
    controls[n].classList.add("active");
  }
}

function backtop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
