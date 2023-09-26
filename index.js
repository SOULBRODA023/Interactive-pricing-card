document.addEventListener("DOMContentLoaded", function () {
    let rangeSlider = document.querySelector(".range__slider");
    let display = document.querySelector(".display__amount"); // Use the ID of the span
  
    rangeSlider.addEventListener("input", () => {
      display.textContent = `$${rangeSlider.value}.00`; // Update the displayed value
    });
  
   
    window.addEventListener("load",()=>{
        display.textContent = `$${rangeSlider.value}.00`; 
      })
  });
  
 