const squareButton = document.querySelector("#square-button");

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

squareButton.addEventListener("click", squareCalculus);
