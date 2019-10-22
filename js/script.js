// Tuesday 22nd October 2019 (After break session)
// 1)Identify an object that you want to work on, for storing and manipulating the object array. 
// Example (Cars, Phones, Shoes, Food etc)
// 2)Store details of 15 Objects at least having 5 properties of different data types 
// (including numeric, string and Boolean, dates etc)
// 3)Design necessary buttons (at least 4) and user input elements as per the requirement. 
// Buttons are for filtering the objects with different conditions. 
// 4)Write algorithm for the user requirements.
// 5)Draw flowchart / activity diagram to represent the algorithm.
// 6)Write reusable code for each button to manipulate the DOM(Document Object brand / Browser Window). 
// Give relevant messages and output to enable the user what has happened / is happening.7)Test it with all possible scenarios of user interactivity. 

var cars = [
  {
  //properties
    id:"111",
    brand:"BMW",
    color:"Blue",
    year:2017,
    price:100000,
    engineCapacity: "1.4 to 2 litres",
    photo:"images/car1.jpeg",
    automatic: true,
  },
  {
    id:"112",
    brand:"Mercedes",
    color:"Black",
    year:2016,
    price:90000,
    engineCapacity: "1.4 to 2 litres",
    photo:"images/car2.jpeg",
    automatic: false,
  },
  {
    id:"113",
    brand:"Audi",
    color:"Cherry",
    year:2018,
    price:130000,
    engineCapacity: "1.4 to 2 litres",
    photo:"images/car3.jpeg",
    automatic: true,
  },
  {
    id:"114",
    brand:"Jaguar",
    color:"Red",
    year:2018,
    price:150000,
    engineCapacity: "1.4 to 2 litres",
    photo:"images/car4.jpeg",
    automatic: false,
  },
  {
    id:"115",
    brand:"Ford",
    color:"Black",
    year:2018,
    price:135000,
    engineCapacity: "1.4 to 2 litres",
    photo:"images/car5.jpeg",
    automatic: true,
  },
  {
    id:"115",
    brand:"Honda",
    color:"White",
    year:2018,
    price:135000,
    engineCapacity: "1.4 to 2 litres",
    photo:"images/car6.jpeg",
    automatic: true,
  }
];

//id: manual, automat, manual, sortAz, sortLow, sortHigh

function showAllCars (array) {
  document.getElementById('cars').innerHTML = " ";
  for (var i = 0; i < array.length; i++) {
    var transmissionDisplayValue = array[i].automatic ? "automatic": "manual";
    document.getElementById('cars').innerHTML +=
    '<div class="card m-4" style="width: 20rem;">'
    +'<img class="card-img-top" src="' + array[i].photo + ' " alt="Car"/>'
    +'<div class="card-body">'
    + '<h5 class="card-title">'+ array[i].brand + '</h5>'
    + '<p class="card-text mb-1">Color: ' + array[i].color + '</p>'
    + '<p class="card-text mb-1">Price: $' + array[i].price + '</p>'
    + '<p class="card-text mb-1">Year: ' + array[i].year + '</p>'
    + '<p class="card-text mb-1">Transmission :' + transmissionDisplayValue + '</p>'
    +'</div>'
  }
}

showAllCars(cars);

function takeInputFromUser() {
  var userInput = document.getElementById('userInput').value;
  return userInput;
}

function searchCar() {
  var keyword = takeInputFromUser().toLowerCase();
  var searchResult = cars.filter(function(car){
    //check for auto search
    return car.brand.toLowerCase().indexOf(keyword) > -1;
  });
  showAllCars(searchResult);
}

function filterManual() {
  var filterResult = cars.filter(function(car) {
    return car.automatic === false;
  })
  showAllCars (filterResult);
}

function filterAutomat() {
  var filterResult = cars.filter(function(car) {
    return car.automatic === true;
  })
  showAllCars (filterResult);
}

function sortAtoZ() {
  var sortedCars = cars.sort((function(a, b){
    if(a.brand < b.brand) {
      return -1;
    }
    if(a.brand > b.brand) {
      return 1;
    }
    return 0;
  }));
  showAllCars(sortedCars);
  return sortedCars;
}

function sortLow() {
  var sortedCars = cars.sort((function(a, b){
    if(a.price < b.price) {
      return -1;
    }
    if(a.price > b.price) {
      return 1;
    }
    return 0;
  }));
  showAllCars(sortedCars);
  return sortedCars;
}

function sortHigh() {
  var sortedCars = cars.sort((function(a, b){
    if(a.price < b.price) {
      return 1;
    }
    if(a.price > b.price) {
      return -1;
    }
    return 0;
  }));
  showAllCars(sortedCars);
  return sortedCars;
}

document.getElementById('search').addEventListener('click', function() {
  searchCar();
});

document.getElementById('manual').addEventListener('click', function() {
  filterManual();
});

document.getElementById('automat').addEventListener('click', function() {
  filterAutomat();
});

document.getElementById('sortAz').addEventListener('click', function() {
  sortAtoZ();
});

document.getElementById('sortLow').addEventListener('click', function() {
  sortLow();
});

document.getElementById('sortHigh').addEventListener('click', function() {
  sortHigh();
});

document.getElementById('all').addEventListener('click', function() {
  showAllCars(cars);
});