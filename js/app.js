'use strict';

// referenced source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

var homePage = document.getElementById('top');
var img = document.createElement('img');
img.setAttribute('src', 'img/salmon.png');
img.setAttribute('alt', 'picture of logo of product');
homePage.appendChild(img);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieShop(location, min, max, avgSales) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.totalCookies = 0;
  this.dailyReport = [];
}

CookieShop.prototype.getCustomers = function () {
  var hourlyCustomers = randomNumber(this.min, this.max);
  return hourlyCustomers;
}

CookieShop.prototype.getHourlySales = function () {
  var hourly = Math.ceil(this.avgSales * this.getCustomers());
  this.dailyReport.push(hourly);
  return hourly;
}

CookieShop.prototype.getDailySales = function () {
  for (var i = 0; i < times.length; i++) {
    this.totalCookies += this.getHourlySales();
  }
}

CookieShop.prototype.render = function () {

  this.getDailySales();

  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = this.location;
  tr.appendChild(td);

  for (var i = 0; i < this.dailyReport.length; i++) {
    var td = document.createElement('td');
    td.textContent = this.dailyReport[i];
    tr.appendChild(td);
  }
  tbody.appendChild(tr);

  var td = document.createElement('td');
  td.textContent = this.totalCookies;
  tr.appendChild(td);
  tbody.appendChild(tr);

}

// create thead
var parentElement = document.getElementById('main-table');
var thead = document.createElement('thead');
var tr = document.createElement('tr');
tr.setAttribute('id', 'space');
var th = document.createElement('th');
th.textContent = '';
tr.appendChild(th);

// create th and append to thead
for (var i = 0; i < times.length; i++) {
  var th = document.createElement('th');
  th.textContent = times[i];
  tr.appendChild(th);
}
thead.appendChild(tr);
parentElement.appendChild(thead);

var th = document.createElement('th');
th.textContent = 'Total';
tr.appendChild(th);
thead.appendChild(tr);
parentElement.appendChild(thead);

var tbody = document.createElement('tbody');
parentElement.appendChild(tbody);

var seattle = new CookieShop('Seattle', 23, 65, 6.3);
var tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
var dubai = new CookieShop('Dubai', 11, 38, 2.7);
var paris = new CookieShop('Paris', 20, 38, 2.3);
var lima = new CookieShop('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();