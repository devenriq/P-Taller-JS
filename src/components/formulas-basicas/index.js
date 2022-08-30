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
  const height = document.querySelector("#triangle-height").value;
  const base = document.querySelector("#triangle-base").value;

  const trianglePerimeterResponse = document.querySelector(
    "#triangle-perimeter-response"
  );
  const triangleAreaResponse = document.querySelector(
    "#triangle-area-response"
  );

  const triangleArea = (base * height) / 2;

  triangleAreaResponse.innerHTML = triangleArea;
};

triangleButton.addEventListener("click", triangleCalculus);
squareButton.addEventListener("click", squareCalculus);
