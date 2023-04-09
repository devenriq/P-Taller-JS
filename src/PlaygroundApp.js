import { data } from "./data.js";

const card = document.querySelector("#card");

const cards = () => {
  const cardInfo = data.map((data) => {
    return `<div class="h-[270px] w-11/12 ">
  <h3 class="text-center text-xl">${data.title}</h3>
  <img
    src="${data.image}"
    alt="${data.title}"
    class="w-full bg-cover h-[250px]"
  />
  <p>${data.description}</p>
  <a href="${data.source}">Ver</a>
</div>`;
  });

  card.innerHTML = cardInfo;
};

cards();
console.log(data);
