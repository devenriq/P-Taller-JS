import { discounts } from "./discounts.js";

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

  if (!price || !coupon) {
    result.innerHTML = "Please, fill all the fields";
    return;
  } else if (Object.keys(discounts).includes(coupon)) {
    const discount = discounts[coupon];
    const resultCalculus = (price - (price * discounts[coupon]) / 100).toFixed(
      2
    );

    showDiscount.innerHTML = discount;
    result.innerHTML = resultCalculus;
  }
};

discountButton.addEventListener("click", simpleDiscountCalculus);
couponButton.addEventListener("click", couponDiscountCalculus);
