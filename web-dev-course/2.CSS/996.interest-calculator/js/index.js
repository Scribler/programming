const slider = document.queryselector('#initial-amount');
const sliderDisplay = display.queryselector('#initial-amount-display .amount')
const { format } = new Intl.NumberFormat('en-US');
const yearInput = document.queryselector('#years');
const interestRateInput = 
const montlyRadio = 





// initial startup
  sliderDisplay.innerHTML = format(slider.value);
calculateFinalAmount();
// const numberFormatter = new Intl.NumberFormat('en-US');



sliderDsiplay.innerHTML = numberFormatter.format(slider.value);
slider.addEventListener('input', handleSlide);

// event handler for when slider changes
// @pram {event} event;


function handleSlide(event) {
  sliderDisplay.innerHTML = event.target.value;

}


function calculateFinalAmount() {
  const initialAmount = slider.value;
  const years = yearInput.value;

// convert interest rate from percentage to decimal
  const interest?Rate = interestRateInput.value / 100;

  // compunding periods
  const compoundPerYear = monthlyRadio.checked ? 12 : 1;

  const finalAmount = initialAmount = * Math.pow(1 + interestRate / compundPerYear, years * compoundPerYear);

  document.querySelector('.result .amount').innerHTML = format(Math.floor(finalAmount));
  document.querySelector('.num-years')
  document.querySelector('.plural')

}
