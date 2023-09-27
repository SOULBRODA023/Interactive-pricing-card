document.addEventListener("DOMContentLoaded", function () {
  let rangeSlider = document.querySelector(".range__slider");
  let display = document.querySelector(".display__amount");
  let numberOfViews = document.querySelector(".numberviews");

  rangeSlider.addEventListener("input", () => {
    if (rangeSlider.value <= 16) {
      numberOfViews.textContent = "50K PAGEVIEWS";
      console.log("we are ready");
    }
    if (rangeSlider.value >= 16) {
      numberOfViews.textContent = "100K PAGEVIEWS";
      console.log("we are ready");
    }
    if (rangeSlider.value >= 24){
      numberOfViews.textContent = "200K PAGEVIEWS";
    }

    display.textContent = `$${rangeSlider.value}.00`; 
  });

  let toggle = document.querySelector("#toggleSwitch");
  function yearlyChecked(e){
    e.preventDefault()
    if (toggle.checked){
      rangeSlider.value = `${rangeSlider.value + 15} `
      console.log("checked")
    }
    else{
      console.log("unchecked")
    }
  }
toggle.addEventListener("click", yearlyChecked)
  window.addEventListener("load", () => {
    display.textContent = `$${rangeSlider.value}.00`;
  });
});



