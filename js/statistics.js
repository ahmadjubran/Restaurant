"use strict";

let countID = 1000;
let foodList = [];
const perentEl = document.getElementById("foodTable");

function Food(name, type, price) {
  this.id = countID++;
  this.name = name;
  this.type = type;
  this.price = price;

  foodList.push(this);
}

Food.prototype.render = function () {
  let trEl = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdName = document.createElement("td");
  let tdType = document.createElement("td");
  let tdPrice = document.createElement("td");

  tdId.textContent = this.id;
  tdName.textContent = this.name;
  tdType.textContent = this.type;
  tdPrice.textContent = `$ ${this.price}`;

  trEl.appendChild(tdId);
  trEl.appendChild(tdName);
  trEl.appendChild(tdType);
  trEl.appendChild(tdPrice);

  perentEl.appendChild(trEl);
};

function getData() {
  let parsedData = JSON.parse(localStorage.getItem("Foods"));

  if (parsedData) {
    for (let i = 0; i < parsedData.length; i++) {
      new Food(parsedData[i].name, parsedData[i].type, parsedData[i].price);
    }
  }

  for (let i = 0; i < foodList.length; i++) {
    foodList[i].render();
  }
}
getData();
