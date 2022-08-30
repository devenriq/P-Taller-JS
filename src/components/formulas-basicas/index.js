const squareButton = document.querySelector("#square-button");
const triangleButton = document.querySelector("#triangle-button");
const circleButton = document.querySelector("#circle-button");
const triangleHeightButton = document.querySelector("#triangle-i-button");

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
  const trianglePerimeter = side1 + side2 + base;
  const triangleArea = (base * height) / 2;

  // Showing the results in the DOM
  triangleAreaResponse.innerHTML = triangleArea;
  trianglePerimeterResponse.innerHTML = trianglePerimeter;
};

const circleCalculus = () => {
  // Getting the inputs
  const diameter = parseFloat(document.querySelector("#circle-diameter").value);

  // Taking the fields where the responses will be show
  const circlePerimeterResponse = document.querySelector(
    "#circle-perimeter-response"
  );
  const circleAreaResponse = document.querySelector("#circle-area-response");

  // Making the calculus
  const circlePerimeter = Math.round(Math.PI * diameter);
  const circleArea = Math.round((Math.PI * diameter ** 2) / 4);

  // Showing the results in the DOM
  circlePerimeterResponse.innerHTML = circlePerimeter;
  circleAreaResponse.innerHTML = circleArea;
};

const triangleHeightCalculus = () => {
  // Getting the inputs
  const side = parseFloat(document.querySelector("#triangle-i-side").value);
  const base = parseFloat(document.querySelector("#triangle-i-base").value);

  // Taking the fields where the responses will be show
  const triangleHeight = document.querySelector("#height-response");

  //Making the calculus
  const height = Math.sqrt(side ** 2 - base ** 2 / 4).toFixed(2);

  // Showing the results in the DOM
  triangleHeight.innerHTML = height;
};

triangleButton.addEventListener("click", triangleCalculus);
squareButton.addEventListener("click", squareCalculus);
circleButton.addEventListener("click", circleCalculus);
triangleHeightButton.addEventListener("click", triangleHeightCalculus);
