'use strict';

// referenced source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

var homePage = document.getElementById('top');
var img = document.createElement('img');
img.setAttribute('src', 'img/salmon.png');
img.setAttribute('alt', 'picture of logo of product');
homePage.appendChild(img);

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var parentElement = document.getElementById('main-table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
var tfoot = document.createElement('tfoot');
var listOfStores = [];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function renderAllLocations() {
  for (var i = 0; i < listOfStores.length; i++) {
    listOfStores[i].render();
  }
}

function firstRow() {
  // create thead
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  // create th and append to thead
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

function lastRow() {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = 'Total';
  tr.appendChild(td);
  tfoot.appendChild(tr);
  parentElement.appendChild(tfoot)
}

function CookieShop(location, min, max, avgSales) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.totalCookies = 0;
  this.dailyReport = [];
  listOfStores.push(this);
}

// gets random number of customers
CookieShop.prototype.getCustomers = function () {
  var hourlyCustomers = randomNumber(this.min, this.max);
  return hourlyCustomers;
}

// multiply random customer per average cookie
CookieShop.prototype.getHourlySales = function () {
  var hourly = Math.ceil(this.avgSales * this.getCustomers());
  this.dailyReport.push(hourly);
  return hourly;
}

// loops through hourly sales and adds cookies
CookieShop.prototype.getDailySales = function () {
  for (var i = 0; i < times.length; i++) {
    this.totalCookies += this.getHourlySales();
  }
}

CookieShop.prototype.render = function () {
  this.getDailySales();
  // title
  var tr = document.createElement('tr');
  var td = document.createElement('td');
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

firstRow();
renderAllLocations();
lastRow();

