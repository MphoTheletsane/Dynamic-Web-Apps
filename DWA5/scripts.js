// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (isNaN(dividend) || isNaN(divider)) {
    handleCriticalError("Something critical went wrong. Please reload the page");
    return;
  }

  if (divider.trim() === "" || dividend.trim() === "") {
    handleValidationError("Division not performed. Both values are required in inputs. Try again");
    return;
  }

  const dividendValue = parseInt(dividend);
  const dividerValue = parseInt(divider);

  if (dividerValue === 0) {
    handleValidationError("Division not performed. Cannot divide by zero. Try again");
    return;
  }

  try {
    if (!Number.isSafeInteger(dividendValue) || !Number.isSafeInteger(dividerValue)) {
      throw new Error("Invalid number provided.");
    }

    if (dividendValue % dividerValue !== 0) {
      throw new Error("Division result is not a whole number.");
    }

    const divisionResult = dividendValue / dividerValue;
    result.innerText = divisionResult;
  } catch (error) {
    handleInvalidDivision("Division not performed. " + error.message + " Try again");
    console.error(error);
  }
});

function handleValidationError(errorMessage) {
  result.innerText = errorMessage;
  console.error(errorMessage);
}

function handleInvalidDivision(errorMessage) {
  result.innerText = errorMessage;
  console.error(errorMessage);
}

function handleCriticalError(errorMessage) {
  result.innerText = "Something critical went wrong. Please reload the page";
  console.error(errorMessage);
  console.trace(); // Log the call stack to the console for critical errors.
}



