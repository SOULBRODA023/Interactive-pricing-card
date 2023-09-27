document.addEventListener("DOMContentLoaded", function () {
  let rangeSlider = document.querySelector(".range__slider");
  let numberOfViews = document.querySelector(".numberviews");
  let display = document.querySelector(".display__amount:not(.second)");
  let secondDisplay = document.querySelector(".display__amount.second");
  let perYear = document.querySelector(".year");
  let theSecondYear =document.querySelector(".yearTwo")
  rangeSlider.addEventListener("input", () => {
    if (rangeSlider.value <= 16) {
      numberOfViews.textContent = "50K PAGEVIEWS";
         }
    if (rangeSlider.value >= 16) {
      numberOfViews.textContent = "100K PAGEVIEWS";
         }
    if (rangeSlider.value >= 24){
      numberOfViews.textContent = "200K PAGEVIEWS";
    }
  
    display.textContent = secondDisplay.textContent = `$${rangeSlider.value}.00`;

  });

  let toggle = document.querySelector("#toggleSwitch");

  function yearlyChecked(e) {
    e.preventDefault();
    if (toggle.checked) {
      rangeSlider.max = "47";
      display.textContent = secondDisplay.textContent = `$${parseInt(rangeSlider.value) + 15}.00`;
      perYear.textContent = theSecondYear.textContent = `/ year`;
         } else {
      rangeSlider.max = "32"
      display.textContent = secondDisplay.textContent = `$${rangeSlider.value}.00`;
      perYear.textContent = theSecondYear.textContent = `/ month`
      }
  }
  
  toggle.addEventListener("change", yearlyChecked); // Change "onchange" to "change"
  
  window.addEventListener("load", () => {
    display.textContent = `$${rangeSlider.value}.00`;
  });

  function addContentAt1440px() {
    if (window.innerWidth >= 1440) {
      const contentToAdd = document.querySelector(".discount");
      contentToAdd.textContent = "-25% discount";
    }
  }
      window.addEventListener("resize", addContentAt1440px);
      window.addEventListener("load", addContentAt1440px)

  }

);



