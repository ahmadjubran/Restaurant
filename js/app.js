"use strict";

const formEl = document.getElementById("foodForm");
const perentEl = document.getElementById("foodTable");

let countID = 1000;
function Food(name, type, price) {
  this.id = countID++;
  this.name = name;
  this.type = type;
  this.price = price;
}

formEl.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
  event.preventDefault();

  let name = event.target.foodName.value;
  let type = event.target.foodType.value;
  let price = event.target.foodPrice.value;
  let food = new Food(name, type, price);
  food.render();
}

Food.prototype.render = function () {
  let trEl = document.createElement("tr");

  trEl.innerHTML = `
    <td>${this.id}</td>
    <td>${this.name}</td>
    <td>${this.type}</td>
    <td>$${this.price}</td>
  `;

  perentEl.appendChild(trEl);
};
