const discountButton = document.querySelector("#discount-button");
const couponButton = document.querySelector("#coupon-button");

const simpleDiscountCalculus = () => {
  const price = parseFloat(document.querySelector("#price-input").value);
  const discount = parseFloat(document.querySelector("#discount-input").value);

  const result = document.querySelector("#result");

  const resultCalculus = (price - (price * discount) / 100).toFixed(2);

  if (!price || !discount) {
    result.innerHTML = "Please, fill the form";
    return;
  }

  if (discount > 100) {
    result.innerHTML = "The discount cannot be more than 100%";
    return;
  }

  result.innerHTML = resultCalculus;
};

discountButton.addEventListener("click", simpleDiscountCalculus);
