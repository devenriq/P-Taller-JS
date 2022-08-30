const squareButton = document.querySelector("#square-button");
const triangleButton = document.querySelector("#triangle-button");

const squareCalculus = () => {
  const perimeterResponse = document.querySelector(
    "#square-perimeter-response"
  );
  const areaResponse = document.querySelector("#square-area-response");
  const squareSide = document.querySelector("#square-input").value;

  const squarePerimeter = squareSide * 4;
  const squareArea = squareSide ** 2;

  perimeterResponse.innerHTML = squarePerimeter;
  areaResponse.innerHTML = squareArea;
};

const triangleCalculus = () => {
  // Getting the inputs
  const side1 = parseFloat(document.querySelector("#triangle-side1").value);
  const side2 = parseFloat(document.querySelector("#triangle-side2").value);
  const height = parseFloat(document.querySelector("#triangle-height").value);
  const base = parseFloat(document.querySelector("#triangle-base").value);

  // Taking the fields where the responses will be show
  const trianglePerimeterResponse = document.querySelector(
    "#triangle-perimeter-response"
  );
  const triangleAreaResponse = document.querySelector(
    "#triangle-area-response"
  );

  // Making the calculus
  const triangleArea = (base * height) / 2;
  const trianglePerimeter = side1 + side2 + base;
  console.log(typeof trianglePerimeter);

  // Showing the results in the DOM
  triangleAreaResponse.innerHTML = triangleArea;
  trianglePerimeterResponse.innerHTML = trianglePerimeter;
};

triangleButton.addEventListener("click", triangleCalculus);
squareButton.addEventListener("click", squareCalculus);
