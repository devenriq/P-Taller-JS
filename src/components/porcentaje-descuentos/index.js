const resultButton = document.querySelector("#result-button");

const simpleDiscountCalculus = () => {
  const price = parseFloat(document.querySelector("#price-input").value);
  const discount = parseFloat(document.querySelector("#discount-input").value);

  const result = document.querySelector("#result");

  const resultCalculus = (price - (price * discount) / 100).toFixed(2);

  result.innerHTML = resultCalculus;
};

resultButton.addEventListener("click", simpleDiscountCalculus);
