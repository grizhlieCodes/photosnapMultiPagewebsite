//create a variable of initial numbers that we can textContent + manipulate
let initialNumbers = [19, 39, 99];

// console.log(initialNumbers.length);

//import our number elements
let numElements = document.querySelectorAll(".price-option__price");

//write our arrayNumbers into our number elements
for (let i = 0; i < initialNumbers.length; i++) {
  numElements[i].textContent = "$" + initialNumbers[i].toFixed(2);
}

//import our checkbox
var checkbox = document.querySelector(".checkbox-input");

checkbox.addEventListener("click", () => {
  for (let i = 0; i < initialNumbers.length; i++) {
    if (checkbox.checked) {
      numElements[i].textContent = "$" + (initialNumbers[i] * 10).toFixed(2);
    } else {
      numElements[i].textContent = "$" + (initialNumbers[i]).toFixed(2);
    }
  }
  
  var par = document.querySelectorAll('.date');
  
  par.forEach(par => {
    par.classList.toggle('active');
  })
});
