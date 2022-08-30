const discountButton = document.querySelector("#discount-button");
const couponButton = document.querySelector("#coupon-button");

const simpleDiscountCalculus = () => {
  const price = parseFloat(document.querySelector("#price-input").value);
  const discount = parseFloat(document.querySelector("#discount-input").value);

  const result = document.querySelector("#discount-result");

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

const couponDiscountCalculus = () => {
  const coupon = document.querySelector("#coupon-input").value;
  const price = document.querySelector("#coupon-price-input").value;

  const showDiscount = document.querySelector("#show-discount");
  const result = document.querySelector("#coupon-result");

  let discount = 0;

  switch (coupon) {
    case "enrique":
      discount = 50;
      break;
    case "Diana":
      discount = 100;
      break;
    default:
      discount = 0;
      break;
  }

  const resultCalculus = (price - (price * discount) / 100).toFixed(2);

  if (!price || !discount) {
    result.innerHTML = "Please, fill the form";
    return;
  }

  if (discount > 100) {
    result.innerHTML = "The discount cannot be more than 100%";
    return;
  }

  showDiscount.innerHTML = discount;
  result.innerHTML = resultCalculus;
};

discountButton.addEventListener("click", simpleDiscountCalculus);
couponButton.addEventListener("click", couponDiscountCalculus);
