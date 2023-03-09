function calcularInteres() {
  // Get input from the user and validate input
  var principal = prompt("Enter the principal amount:");
  if (isNaN(principal) || principal <= 0) {
    alert("Please enter a valid principal amount.");
    return;
  }
  
  var rate = prompt("Enter the annual interest rate (in percentage):");
  if (isNaN(rate) || rate <= 0) {
    alert("Please enter a valid interest rate.");
    return;
  }
  
  var years = prompt("Enter the number of years:");
  if (isNaN(years) || years <= 0) {
    alertt("Please enter a valid number of years.");
    return;
  }
  
  var frequency = prompt("Enter the frequency of compounding per year:");
  if (isNaN(frequency) || frequency <= 0) {
    alert("Please enter a valid compounding frequency.");
    return;
  }

  // Convert input to Numbers
  principal = Number(principal);
  rate = Number(rate) / 100;
  years = Number(years);
  frequency = Number(frequency);

  // Calculate compound interest
  var base = 1 + rate / frequency;
  var exponent = frequency * years;
  var amount = principal * Math.pow(base, exponent);

  // Calculate Tasa Nominal Anual and Tasa Efectiva Anual
  var tna = (rate * frequency).toFixed(2);
  var tea = (Math.pow(1 + rate / frequency, frequency) - 1) * 100;
  tea = tea.toFixed(2);

  // Return an object with the results
  return {
    amount: amount.toFixed(2),
    tna: tna,
    tea: tea,
  };
}

console.log(calcularInteres());