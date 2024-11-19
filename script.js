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
