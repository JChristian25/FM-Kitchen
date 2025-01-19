// Select the navbar element
const navbar = document.getElementById("navbar");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Check if the page has been scrolled down
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

function toggleCarousel(n) {
  let imgs = document.getElementsByClassName("carousel-slides");
  let controls = document.getElementsByClassName("carousel-control");

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove("active");
    controls[i].classList.remove("active");
  }
  if (n >= 0 && n < imgs.length) {
    imgs[n].classList.add("active");
    controls[n].classList.add("active");
  }
}

console.log("Hello world!")