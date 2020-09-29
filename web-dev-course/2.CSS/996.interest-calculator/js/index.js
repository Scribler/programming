const slider = document.queryselector('#initial-amount');
const sliderDisplay = display.queryselector('#initial-amount-display .amount');
const calculateButton = document.queryselector('.calculate-button');
const interestRateInput = document.queryselector('#interest-rate');
const yearInput = document.queryselector('#years');
const monthlyRadio = document.queryselector('#monthly');

const { format } = new Intl.NumberFormat('en-US');

// initial startup
  sliderDisplay.innerHTML = format(slider.value);
calculateFinalAmount();

// Event Listeners
slider.addEventListener('input', handleSlide);
calculateButton.addEventListener('click', calculateFinalAmount);

// event handler for when slider changes
// @pram {event} event;

function handleSlide(event) {
  sliderDisplay.innerHTML = format(event.target.value);
}

//
// Calculates compound interest with formula A = P(1 + r/n)^tn where
// A - final amount
// P - principal amount
// r - interest rate in decimal (e.g. 2% -> 0.02)
// n - Times compounded per time period
// t - Tiem period in years
//

function calculateFinalAmount() {
  const initialAmount = slider.value;
  const years = yearInput.value;

  // convert interest rate from percentage to decimal
  const interestRate = interestRateInput.value / 100;

  // compunding periods
  const compoundPerYear = monthlyRadio.checked ? 12 : 1;

  const finalAmount = initialAmount * Math.pow(1 + interestRate / compundPerYear, years * compoundPerYear);

  document.querySelector('.result .amount').innerHTML = format(Math.floor(finalAmount));
  document.querySelector('.num-years').innerHTML = years
  document.querySelector('.plural').style.display = years > 1 ? 'inline' : 'none'
}
