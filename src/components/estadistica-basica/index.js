const averageButton = document.querySelector("#average-button");
const averageInput = document.querySelector("#average-first-parameter");
const medianResultButton = document.querySelector("#median-result-button");
const medianEraseButton = document.querySelector("#median-erase-button");
const medianInput = document.querySelector("#median-first-parameter");
const modeButton = document.querySelector("#mode-result-button");
const modeInput = document.querySelector("#mode-first-parameter");
const geometricResultButton = document.querySelector(
  "#geometric-result-button"
);
const geometricInput = document.querySelector("#geometric-first-parameter");

const averageListOfNumbers = [];
const medianListOfNumbers = [];
let modeListOfNumbers = [];
const geometricListOfNumbers = [];

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
  array = [];
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
  array.sort();
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

const modeCalculus = (list) => (e) => {
  const response = document.querySelector("#mode-response");
  const listCount = {};

  function sortFunction(acc, newValue) {
    return acc[1] - newValue[1];
  }

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    listCount[element] ? (listCount[element] += 1) : (listCount[element] = 1);
  }

  const listArray = Object.entries(listCount);
  const sortList = listArray.sort(sortFunction);
  const sortListMax = sortList[listArray.length - 1];

  response.innerHTML = sortListMax[0];
};

const geometricCalculus = (list) => (e) => {
  const result = document.querySelector("#geometric-response");
  const multiplied = list.reduce((acc, num) => {
    return acc * num;
  });

  const calculus = (multiplied ** (1 / list.length)).toFixed(2);

  result.innerHTML = calculus;
};

averageInput.addEventListener("keypress", arrayOfNumber(averageListOfNumbers));
medianInput.addEventListener("keypress", arrayOfNumber(medianListOfNumbers));
modeInput.addEventListener("keypress", arrayOfNumber(modeListOfNumbers));
geometricInput.addEventListener(
  "keypress",
  arrayOfNumber(geometricListOfNumbers)
);
averageButton.addEventListener("click", averageCalculus(averageListOfNumbers));
medianResultButton.addEventListener(
  "click",
  medianCalculus(medianListOfNumbers)
);
medianEraseButton.addEventListener("click", deleteArray(medianListOfNumbers));
modeButton.addEventListener("click", modeCalculus(modeListOfNumbers));
geometricResultButton.addEventListener(
  "click",
  geometricCalculus(geometricListOfNumbers)
);
