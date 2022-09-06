const medianResultButton = document.querySelector("#median-result-button");
const medianEraseButton = document.querySelector("#median-erase-button");
const medianInput = document.querySelector("#median-first-parameter");

const medianListOfNumbers = [];

const arrayOfNumber = (array) => (e) => {
  //The following is made to capture the enter event in the keyboard
  e.which = e.which || e.keyCode;
  if (e.which == 13) {
    //Add the input to the array and make it a number
    array.push(e.srcElement.value);

    //Delete the value typed by the user as soon as the enter key is pressed
    e.srcElement.value = "";
    console.log(array);
  }
};

const deleteArray = (array) => (e) => {
  array = [];
};

// console.log(salarios);

const person = medianInput.value;

const findPerson = (person) => {
  return (findIt = salarios.find((person) => person.name === "Juanita"));
};

const medianPerPerson = (personName) => (e) => {
  const jobs = findPerson(personName).trabajos;

  const salarios = jobs.map((element) => {
    return element.salario;
  });

  const sortedSalary = medianCalculus(salarios);
  console.log(sortedSalary);
};

const medianCalculus = (objectList) => {
  const response = document.querySelector("#projected-salary");

  const sortList = objectList.sort(sortFunction);
  function sortFunction(acc, newValue) {
    return acc - newValue;
  }

  if (sortList.length % 2 === 0) {
    const result =
      (sortList[sortList.length / 2] + sortList[sortList.length / 2 - 1]) / 2;

    response.innerHTML = result;
  } else {
    const result = sortList[sortList.length / 2 - 0.5];

    response.innerHTML = result;
  }
};

const projectionPerPerson = (personName) => {
  const jobs = findPerson(personName).trabajos;

  console.log(jobs);
  let growthPercentages = [];

  for (let i = 1; i < jobs.length; i++) {
    const actualSalary = jobs[i].salario;
    const lastSalary = jobs[i - 1].salario;
    const growth = actualSalary - lastSalary;
    const growthPercentage = growth / lastSalary;

    growthPercentages.push(growthPercentage);
  }

  console.log(growthPercentages);
};

medianResultButton.addEventListener("click", medianPerPerson(person));
medianInput.addEventListener("keypress", arrayOfNumber(medianListOfNumbers));
// medianResultButton.addEventListener(
//   "click",
//   medianCalculus(medianListOfNumbers)
// );
