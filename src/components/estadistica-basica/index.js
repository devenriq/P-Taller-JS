const average = document.querySelector("#average-button");
const input = document.querySelector("#average-first-parameter");

const listOfNumbers = [];

const averageCalculus = () => {
  const response = document.querySelector("#average-response");
  const result = listOfNumbers.reduce((acc, number) => {
    return acc + number;
  });

  const resultado = result / listOfNumbers.length;

  response.innerHTML = resultado;
};

const arrayOfNumber = (e) => {
  //The following is made to capture the enter event in the keyboard
  e.which = e.which || e.keyCode;
  if (e.which == 13) {
    //Add the input to the array and make it a number
    listOfNumbers.push(parseInt(e.srcElement.value));

    //Delete the value typed by the user as soon as the enter key is pressed
    e.srcElement.value = "";
  }
};

input.addEventListener("keypress", arrayOfNumber);
average.addEventListener("click", averageCalculus);
