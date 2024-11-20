document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const cardsWrapper = document.querySelector(".cards-wrapper");

  prevBtn.addEventListener("click", () => {
    cardsWrapper.scrollBy({ left: -400, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    cardsWrapper.scrollBy({ left: 370, behavior: "smooth" });
  });
});

let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const closeBtn = document.querySelector('.close-btn');

  menuToggle.addEventListener('click', function () {
    navLinks.style.display = 'flex'; // Show the menu
  });

  closeBtn.addEventListener('click', function () {
    navLinks.style.display = 'none'; // Hide the menu
  });
});
// Elementlarni tanlash
const menuButton = document.getElementById('menu-button');
const fullScreenMenu = document.getElementById('full-screen-menu');
const closeMenuButton = document.getElementById('close-menu');

// Menyu ochish
menuButton.addEventListener('click', () => {
    fullScreenMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; 
});

closeMenuButton.addEventListener('click', () => {
    fullScreenMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});
