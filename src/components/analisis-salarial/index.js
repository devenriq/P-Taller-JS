const medianResultButton = document.querySelector("#median-result-button");
const medianEraseButton = document.querySelector("#median-erase-button");
const medianInput = document.querySelector("#median-first-parameter");

let person = medianInput.value;
// let person = () => {
//   console.log(medianInput.value);
// };

const deleteArray = (array) => (e) => {
  array = [];
};

const findPerson = (person) => {
  return (findIt = salarios.find(
    (person) => person.name === medianInput.value
  ));
};

const medianPerPerson = (personName) => {
  const jobs = findPerson(personName).trabajos;

  const salarios = jobs.map((element) => {
    return element.salario;
  });

  const sortedSalary = medianCalculus(salarios);
};

const sortList = (array) => {
  const sortingList = array.sort(sortFunction);
  function sortFunction(acc, newValue) {
    return acc - newValue;
  }

  return sortingList;
};

const medianCalculus = (objectList) => {
  const sortedList = sortList(objectList);

  if (sortedList.length % 2 === 0) {
    const result =
      (sortedList[sortedList.length / 2] +
        sortedList[sortedList.length / 2 - 1]) /
      2;

    return result;
  } else {
    const result = sortedList[sortedList.length / 2 - 0.5];

    return result;
  }
  // showMedianCalculus(sortList);
};

// const showMedianCalculus = (sortList) => {

//   if (sortList.length % 2 === 0) {
//     const result =
//       (sortList[sortList.length / 2] + sortList[sortList.length / 2 - 1]) / 2;

//     response.innerHTML = result;
//   } else {
//     const result = sortList[sortList.length / 2 - 0.5];

//     response.innerHTML = result;
//   }
// };

const projectionPerPerson = () => {
  const response = document.querySelector("#projected-salary");

  console.log(person);

  const jobs = findPerson(person).trabajos;
  let growthPercentages = [];

  for (let i = 1; i < jobs.length; i++) {
    const actualSalary = jobs[i].salario;
    const lastSalary = jobs[i - 1].salario;
    const growth = actualSalary - lastSalary;
    const growthPercentage = growth / lastSalary;

    growthPercentages.push(growthPercentage);
  }

  console.log(growthPercentages);
  console.log(jobs);

  console.log(medianPerPerson(person));
  console.log(medianPerPerson(person));
  // const percentageCalculus =
  //   medianPerPerson(personName) +
  //   medianCalculus(growthPercentages) * medianPerPerson(personName);

  // console.log(percentageCalculus);
};

// medianInput.addEventListener("keypress", arrayOfNumber(medianListOfNumbers));
medianResultButton.addEventListener("click", medianPerPerson);
medianResultButton.addEventListener("click", projectionPerPerson);
