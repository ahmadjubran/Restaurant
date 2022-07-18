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

const foodType = {
  fruitAndVegetables: 0,
  starchyFood: 0,
  dairy: 0,
  protein: 0,
  fat: 0,
};

for (let i = 0; i < foodList.length; i++) {
  if (foodList[i].type === "fruit-and-vegetables") {
    foodType.fruitAndVegetables++;
  }
  if (foodList[i].type === "starchy-food") {
    foodType.starchyFood++;
  }
  if (foodList[i].type === "dairy") {
    foodType.dairy++;
  }
  if (foodList[i].type === "protein") {
    foodType.protein++;
  }
  if (foodList[i].type === "fat") {
    foodType.fat++;
  }
}

const typeName = Object.keys(foodType);
const typeCount = Object.values(foodType);

const typeData = {
  labels: typeName,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: ["#ec6408", "#d3520c", "#fd5634", "#ff8b72", "#ffb0a6"],
      borderColor: "#0f1014",
      data: typeCount,
    },
  ],
};

const typeConfig = {
  type: "pie",
  data: typeData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
      },
    },
  },
};

const foodTypeChart = new Chart(
  document.getElementById("foodTypeChart"),
  typeConfig
);

const foodName = [];
const foodPrice = [];

for (let i = 0; i < foodList.length; i++) {
  foodName.push(foodList[i].name);
  foodPrice.push(foodList[i].price);
}

const priceData = {
  labels: foodName,
  datasets: [
    {
      label: "Price",
      backgroundColor: ["#ec6408", "#d3520c", "#fd5634", "#ff8b72", "#ffb0a6"],
      borderColor: "#0f1014",
      data: foodPrice,
    },
  ],
};

const priceConfig = {
  type: "bar",
  data: priceData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
};

const foodPriceChart = new Chart(
  document.getElementById("foodPriceChart"),
  priceConfig
);
