// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Scenario: Validation when values are missing
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Scenario: Providing anything that is not a number should crash the program
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
    console.error("Invalid input. Please provide valid numbers.");
    return;
  }

  const dividendNum = parseFloat(dividend);
  const dividerNum = parseFloat(divider);

  // Scenario: An invalid division should log an error in the console
  if (dividerNum < 0 ) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Please provide valid numbers.");
    return;
  }
  
  // Quotient is a result obtained by dividing one quantity by another
  const quotient = dividendNum / dividerNum;
  const isWholeNumber = Number.isInteger(quotient);

  // Scenario: Dividing numbers result in a decimal number
  if (!isWholeNumber) {
    result.innerText = Math.floor(quotient);
    return;
  }

  // Scenario: Dividing numbers result in a whole number

  result.innerText = quotient; 
});

