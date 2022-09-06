const medianResultButton = document.querySelector("#median-result-button");
// const medianEraseButton = document.querySelector("#median-erase-button");
const medianInput = document.querySelector("#median-first-parameter");

const show = () => (e) => {
  console.log(medianInput.value);
};
medianResultButton.addEventListener("click", show(medianInput));

// const medianListOfNumbers = [];

// const arrayOfNumber = (array) => (e) => {
//   //The following is made to capture the enter event in the keyboard
//   e.which = e.which || e.keyCode;
//   if (e.which == 13) {
//     //Add the input to the array and make it a number
//     projectionPerPerson(e.srcElement.value);
//     console.log(e.srcElement.value);
//     //Delete the value typed by the user as soon as the enter key is pressed
//     e.srcElement.value = "";
//   }
// };

// const deleteArray = (array) => (e) => {
//   array = [];
// };

// const personInput = medianInput.value;

// const findPerson = (person) => {
//   return (findIt = salarios.find((person) => person.name === personInput));
// };

// const showPersonInput = () => (e) => {
//   e.which = e.which || e.keyCode;
//   console.log(e.srcElement.value);
// };

// const medianPerPerson = (personName) => (e) => {
//   const jobs = findPerson(personName).trabajos;
//   const salarios = jobs.map((element) => {
//     return element.salario;
//   });
//   const sortedSalary = medianCalculus(salarios);
// };

// const medianCalculus = (objectList) => {
//   const response = document.querySelector("#growth-percentage");

//   const sortList = objectList.sort(sortFunction);
//   function sortFunction(acc, newValue) {
//     return acc - newValue;
//   }

//   if (sortList.length % 2 === 0) {
//     const result =
//       (sortList[sortList.length / 2] + sortList[sortList.length / 2 - 1]) / 2;
//     return result;
//   } else {
//     const result = sortList[sortList.length / 2 - 0.5];
//     return result;
//   }
// };

// const medianCalculusShow = (objectList) => {
//   const sortList = medianCalculus(growthPercentages);

//   if (sortList.length % 2 === 0) {
//     const result =
//       (sortList[sortList.length / 2] + sortList[sortList.length / 2 - 1]) / 2;
//     response.innerHTML = result;
//   } else {
//     const result = sortList[sortList.length / 2 - 0.5];
//     response.innerHTML = result;
//   }
// };

// const projectionPerPerson = (personName) => (e) => {
//   const showNewSalary = document.querySelector("#new-salary");
//   const growthPercentage = document.querySelector("#growth-percentage");

//   const jobs = findPerson(personName).trabajos;
//   console.log(typeof jobs);

//   let growthPercentages = [];

//   for (let index = 1; index < jobs.length; index++) {
//     const currentSalary = jobs[index].salario;
//     const lastSalary = jobs[index - 1].salario;
//     const growth = currentSalary - lastSalary;
//     const growthPercentage = growth / lastSalary;

//     growthPercentages.push((growthPercentage * 100).toFixed(2));
//   }

//   const medianSalaryGrowth = medianCalculus(growthPercentages);

//   console.log(growthPercentages);
//   console.log(medianSalaryGrowth);

//   const lastSalary = jobs[jobs.length - 1].salario;
//   const newSalary = (lastSalary * medianSalaryGrowth) / 100 + lastSalary;

//   growthPercentage.innerHTML = medianSalaryGrowth;
//   showNewSalary.innerHTML = newSalary;
// };

// medianInput.addEventListener("keypress", arrayOfNumber(medianListOfNumbers));
// medianResultButton.addEventListener("click", projectionPerPerson(personInput));
// // medianResultButton.addEventListener("click", showPersonInput);
