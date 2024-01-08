const calculate = document.getElementById("calculate");
const total = document.getElementById("total");

let totall;

// function to calculate total amount payable.
function calculateTotaltip(e) {
  e.preventDefault();
  //amount and percentage retrievals are inside the function to ensure that the values are fetched the moment the
  //button is clicked.
  const amount = parseInt(document.getElementById("amount").value);
  const percentage = parseInt(document.getElementById("percentage").value);

  
  let percent = (percentage / 100) * amount;
  totall = Math.floor(amount + percent);

  // should be inside the function so it can be created just when the button is clicked.
  total.innerText = `Total: $${totall}`;
}

calculate.addEventListener("click", calculateTotaltip);
