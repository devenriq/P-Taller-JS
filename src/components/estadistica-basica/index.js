const averageButton = document.querySelector("#average-button");
const averageInput = document.querySelector("#average-first-parameter");
const medianButton = document.querySelector("#median-button");
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

const averageCalculus = () => {
  const response = document.querySelector("#average-response");
  const result = averageListOfNumbers.reduce((acc, number) => {
    return acc + number;
  });

  const resultado = result / averageListOfNumbers.length;

  response.innerHTML = resultado;
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
};

averageInput.addEventListener("keypress", arrayOfNumber(averageListOfNumbers));
medianInput.addEventListener("keypress", arrayOfNumber(medianListOfNumbers));
averageButton.addEventListener("click", averageCalculus);
medianButton.addEventListener("click", medianCalculus(medianListOfNumbers));
