const medianResultButton = document.querySelector("#median-result-button");
const medianInput = document.querySelector("#median-first-parameter");

let person = medianInput.value;

const findPerson = (person) => {
  return (findIt = salarios.find(
    (person) => person.name === medianInput.value
  ));
};

const medianPerPerson = (personName) => {
  const jobs = findPerson(personName).trabajos;
  const sortedSalary = medianCalculus(salarios);
  return sortedSalary;
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
};

const projectionPerPerson = () => {
  const salaryResponse = document.querySelector("#projected-salary");
  const percentageResponse = document.querySelector("#percentage-increment");

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

  const medianGrowth = (medianCalculus(growthPercentages) * 100).toFixed(2);

  const result = (
    medianPerPerson(person) +
    (medianGrowth * medianPerPerson(person)) / 100
  ).toFixed(2);

  salaryResponse.innerHTML = result;
  percentageResponse.innerHTML = medianGrowth;
};

medianResultButton.addEventListener("click", medianPerPerson);
medianResultButton.addEventListener("click", projectionPerPerson);

// Análisis empresarial

const enterprises = {};

for (let i = 0; i < salarios.length; i++) {
  const jobs = salarios[i]["trabajos"];
  for (let j = 0; j < jobs.length; j++) {
    const enterprise = jobs[j]["empresa"];
    const year = jobs[j]["year"];
    const salaries = jobs[j]["salario"];

    if (!enterprises[enterprise]) {
      enterprises[enterprise] = {};
    }

    if (!enterprises[enterprise][year]) {
      enterprises[enterprise][year] = [];
    }

    enterprises[enterprise][year].push(salaries);
  }
}

const medianEnterpriseYear = (name, year) => {
  if (!enterprises) {
    console.warn("The enterprise doesn't exist");
    return;
  } else if (!enterprises[name][year]) {
    console.warn("The enterprise doesn't pay anything that year");
  } else {
    return medianCalculus(enterprises[name][year]);
  }
};

const projectionPerEnterprise = (name) => {
  let listMedianYear = [];

  if (!enterprises[name]) {
    console.warn("The enterprise doesn't exist");
    return;
  } else {
    const enterprisesYear = Object.keys(enterprises[name]);
    listMedianYear = enterprisesYear.map((year) => {
      return medianEnterpriseYear(name, year);
    });
  }

  let growthPercentages = [];

  for (let i = 1; i < listMedianYear.length; i++) {
    const actualSalary = listMedianYear[i];
    const lastSalary = listMedianYear[i - 1];
    const growth = actualSalary - lastSalary;
    const growthPercentage = growth / lastSalary;

    growthPercentages.push(growthPercentage);
  }

  const medianGrowth = (medianCalculus(growthPercentages) * 100).toFixed(2);

  console.log(growthPercentages);
  console.log(medianGrowth);

  const lastMedian = listMedianYear[listMedianYear.length - 1];
  const growth = (lastMedian * medianGrowth) / 100 + lastMedian;

  console.log(growth);
};

projectionPerEnterprise("MarketerosCOL");
