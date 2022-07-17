"use strict";

let foodList = [];

const formEl = document.getElementById("foodForm");

let countID = 1000;
function Food(name, type, price) {
  this.id = countID++;
  this.name = name;
  this.type = type;
  this.price = price;

  foodList.push(this);
}

formEl.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
  event.preventDefault();

  let name = event.target.foodName.value;
  let type = event.target.foodType.value;
  let price = event.target.foodPrice.value;
  new Food(name, type, price);

  saveData();
}

function saveData() {
  localStorage.setItem("Foods", JSON.stringify(foodList));
}

function getData() {
  let parsedData = JSON.parse(localStorage.getItem("Foods"));

  if (parsedData) {
    for (let i = 0; i < parsedData.length; i++) {
      new Food(parsedData[i].name, parsedData[i].type, parsedData[i].price);
    }
  }
}
getData();
