'use strict';

// referenced source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


// // Jenner ~ upload image
// var homePage = document.getElementById('top');
// var img = document.createElement('img');
// img.setAttribute('src', 'img/salmon.png');
// img.setAttribute('alt', 'picture of logo of product');
// homePage.appendChild(img);

// Jenner ~ global variables
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var parentElement = document.getElementById('main-table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
var tfoot = document.createElement('tfoot');
var listOfStores = [];
var allLocationsHourly = [];
var grandTotal = 0;

// Jenner ~ random number generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Jenner ~ render locations
function renderAllLocations() {
  for (var i = 0; i < listOfStores.length; i++) {
    listOfStores[i].render();
  }
}

// Jenner ~ creater first row; consists of hours
function renderFirstRow() {
  // create thead
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  // Jenner ~ create th and append to thead
  for (var i = 0; i < times.length; i++) {
    th = document.createElement('th');
    th.textContent = times[i];
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  tr.appendChild(th);
  thead.appendChild(tr);
  parentElement.appendChild(thead);

}

// Jenner ~ hourly totals (all locations)
function calculateTotals(){
  
  for (var i = 0; i < times.length; i++){
    var sales = 0;
    for (var j = 0; j < listOfStores.length; j++){
      sales += listOfStores[j].dailyReport[i];
    }
    allLocationsHourly.push(sales);
    grandTotal += sales;
  }
}

function renderLastRow() {
  allLocationsHourly = [];
  grandTotal = 0;
  calculateTotals();
  // total cell
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = 'Total';

  tr.appendChild(th);
  tfoot.appendChild(tr);

  for (var i = 0; i < allLocationsHourly.length; i++) {
    th = document.createElement('th');
    th.textContent = allLocationsHourly[i];
    tr.appendChild(th)
  }

  th = document.createElement('th');
  th.textContent = grandTotal;
  tr.appendChild(th);
  tfoot.appendChild(tr);
  parentElement.appendChild(tfoot);
}

// Jenner ~ object constructor
function CookieShop(location, min, max, avgSales) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.totalCookies = 0;
  this.dailyReport = [];
  listOfStores.push(this);
}

// Jenner ~ gets random number of customers
CookieShop.prototype.getCustomers = function () {
  var hourlyCustomers = randomNumber(this.min, this.max);
  return hourlyCustomers;
}

// Jenner ~ multiply random customer per average cookie
CookieShop.prototype.getHourlySales = function () {
  var hourly = Math.ceil(this.avgSales * this.getCustomers());
  this.dailyReport.push(hourly);
  return hourly;
}

// Jenner ~ loops through hourly sales and adds cookies
CookieShop.prototype.getDailySales = function () {
  for (var i = 0; i < times.length; i++) {
    this.totalCookies += this.getHourlySales();
  }
}

// Jenner ~ render
CookieShop.prototype.render = function () {
  this.getDailySales();
  // Jenner ~ store title

  var tr = document.createElement('tr');
  var td = document.createElement('td')
  td.textContent = this.location;
  tr.appendChild(td);

  // this is each iteration of hourly sales
  for (var i = 0; i < this.dailyReport.length; i++) {
    td = document.createElement('td');
    td.textContent = this.dailyReport[i];
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = this.totalCookies;
  tr.appendChild(td);
  tbody.appendChild(tr);
  parentElement.appendChild(tbody);
}

new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 2.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);

renderFirstRow();
renderAllLocations();
renderLastRow();

// form async

function submitHandler(e){
  e.preventDefault();

  var location = e.target.location.value;
  var minimum = e.target.minimum.value;
  var maximum = e.target.maximum.value;
  var averageSales = e.target.averageSales.value;

  var newLocation = new CookieShop(location, minimum, maximum, averageSales);

  newLocation.render();
  tfoot.innerHTML = '';
  renderLastRow();
};

var container = document.getElementById('newlocation');
container.addEventListener('submit', submitHandler);