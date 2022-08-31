const averageButton = document.querySelector("#average-button");
const averageInput = document.querySelector("#average-first-parameter");
const medianResultButton = document.querySelector("#median-result-button");
const medianEraseButton = document.querySelector("#median-erase-button");
const medianInput = document.querySelector("#median-first-parameter");

const averageListOfNumbers = [];
const medianListOfNumbers = [];

const arrayOfNumber = (array) => (e) => {
  //The following is made to capture the enter event in the keyboard
  e.which = e.which || e.keyCode;
  if (e.which == 13) {
    //Add the input to the array and make it a number
    array.push(parseInt(e.srcElement.value));

    //Delete the value typed by the user as soon as the enter key is pressed
    e.srcElement.value = "";
    console.log(array);
  }
};

const deleteArray = (array) => (e) => {
  while(array)
};

const averageCalculus = (array) => (e) => {
  const response = document.querySelector("#average-response");
  const result = array.reduce((acc, number) => {
    return acc + number;
  });

  const resultado = result / array.length;

  response.innerHTML = resultado;
  array = [];
};

const medianCalculus = (array) => (e) => {
  const response = document.querySelector("#median-response");

  if (array.length % 2 === 0) {
    console.log("Its even");
    const result = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;

    response.innerHTML = result;
  } else {
    console.log("It isn't even");
    const result = array[array.length / 2 - 0.5];

    response.innerHTML = result;
  }
  array = [];
};

averageInput.addEventListener("keypress", arrayOfNumber(averageListOfNumbers));
medianInput.addEventListener("keypress", arrayOfNumber(medianListOfNumbers));
averageButton.addEventListener("click", averageCalculus(averageListOfNumbers));
medianResultButton.addEventListener(
  "click",
  medianCalculus(medianListOfNumbers)
);
medianEraseButton.addEventListener("click", deleteArray(medianListOfNumbers));
