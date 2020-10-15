'use strict';

// referenced source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgSales: 6.3,
  dailyReport: [],
  hourlyCustomers: 0,
  totalCookies: 0,
  getCustomers: function () {
    this.hourlyCustomers = randomCustomers(this.min, this.max);
    return this.hourlyCustomers;
  },
  render: function () {
    // am for loop
    for (var i = 6; i < 13; i++) {
      var cookies = Math.floor(this.avgSales * this.getCustomers());
      this.totalCookies += cookies;
      if (i === 12) {
        this.dailyReport.push(`${i}pm: ${cookies} cookies`);
      } else {
        this.dailyReport.push(`${i}am: ${cookies} cookies`);
      }
    }
    // pm for loop
    for (var i = 1; i < 8; i++) {
      var cookies = Math.floor(this.avgSales * this.getCustomers());
      this.totalCookies += cookies;
      this.dailyReport.push(`${i}pm: ${cookies} cookies`);
    }
    var parentElement = document.querySelector('main');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for (var i = 0; i < this.dailyReport.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.dailyReport[i];
      ul.appendChild(li);
    }

    var totalCookies = document.createElement('li');
    totalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    ul.appendChild(totalCookies);

  }
}

var tokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  avgSales: 1.2,
  dailyReport: [],
  hourlyCustomers: 0,
  totalCookies: 0,
  getCustomers: function () {
    this.hourlyCustomers = randomCustomers(this.min, this.max);
    return this.hourlyCustomers;
  },
  render: function () {
    for (var i = 6; i < 13; i++) {
      var cookies = Math.floor(this.avgSales * this.getCustomers());
      this.totalCookies += cookies;
      if (i === 12) {
        this.dailyReport.push(`${i}pm: ${cookies} cookies`);
      } else {
        this.dailyReport.push(`${i}am: ${cookies} cookies`);
      }
    }
    for (var i = 1; i < 8; i++) {
      var cookies = Math.floor(this.avgSales * this.getCustomers());
      this.totalCookies += cookies;
      this.dailyReport.push(`${i}pm: ${cookies} cookies`);
    }
    var parentElement = document.querySelector('main');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for (var i = 0; i < this.dailyReport.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.dailyReport[i];
      ul.appendChild(li);
    }

    var totalCookies = document.createElement('li');
    totalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    ul.appendChild(totalCookies);

  }
}

var dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avgSales: 3.7,
  dailyReport: [],
  hourlyCustomers: 0,
  totalCookies: 0,
  getCustomers: function () {
    this.hourlyCustomers = randomCustomers(this.min, this.max);
    return this.hourlyCustomers;
  },
  render: function () {
    for (var i = 6; i < 13; i++) {
      var cookies = Math.floor(this.avgSales * this.getCustomers());
      this.totalCookies += cookies;
      if (i === 12) {
        this.dailyReport.push(`${i}pm: ${cookies} cookies`);
      } else {
        this.dailyReport.push(`${i}am: ${cookies} cookies`);
      }
    }
    for (var i = 1; i < 8; i++) {
      var cookies = Math.floor(this.avgSales * this.getCustomers());
      this.totalCookies += cookies;
      this.dailyReport.push(`${i}pm: ${cookies} cookies`);
    }
    var parentElement = document.querySelector('main');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for (var i = 0; i < this.dailyReport.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.dailyReport[i];
      ul.appendChild(li);
    }

    var totalCookies = document.createElement('li');
    totalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    ul.appendChild(totalCookies);

  }
}

var paris = {
  location: 'Paris',
  min: 20,
  max: 38,
  avgSales: 2.3,
  dailyReport: [],
  hourlyCustomers: 0,
  totalCookies: 0,
  getCustomers: function () {
    this.hourlyCustomers = randomCustomers(this.min, this.max);
    return this.hourlyCustomers;
  },
  render: function () {
    for (var i = 6; i < 13; i++) {
      var cookies = Math.floor(this.avgSales * this.getCustomers());
      this.totalCookies += cookies;
      if (i === 12) {
        this.dailyReport.push(`${i}pm: ${cookies} cookies`);
      } else {
        this.dailyReport.push(`${i}am: ${cookies} cookies`);
      }
    }
    for (var i = 1; i < 8; i++) {
      var cookies = Math.floor(this.avgSales * this.getCustomers());
      this.totalCookies += cookies;
      this.dailyReport.push(`${i}pm: ${cookies} cookies`);
    }
    var parentElement = document.querySelector('main');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for (var i = 0; i < this.dailyReport.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.dailyReport[i];
      ul.appendChild(li);
    }

    var totalCookies = document.createElement('li');
    totalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    ul.appendChild(totalCookies);

  }
}

var lima = {
  location: 'Lima',
  min: 2,
  max: 16,
  avgSales: 4.6,
  dailyReport: [],
  hourlyCustomers: 0,
  totalCookies: 0,
  getCustomers: function () {
    this.hourlyCustomers = randomCustomers(this.min, this.max);
    return this.hourlyCustomers;
  },
  render: function () {
    for (var i = 6; i < 13; i++) {
      var cookies = Math.floor(this.avgSales * this.getCustomers());
      this.totalCookies += cookies;
      if (i === 12) {
        this.dailyReport.push(`${i}pm: ${cookies} cookies`);
      } else {
        this.dailyReport.push(`${i}am: ${cookies} cookies`);
      }
    }
    for (var i = 1; i < 8; i++) {
      var cookies = Math.floor(this.avgSales * this.getCustomers());
      this.totalCookies += cookies;
      this.dailyReport.push(`${i}pm: ${cookies} cookies`);
    }
    var parentElement = document.querySelector('main');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for (var i = 0; i < this.dailyReport.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.dailyReport[i];
      ul.appendChild(li);
    }

    var totalCookies = document.createElement('li');
    totalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    ul.appendChild(totalCookies);

  }
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

var homePage = document.getElementById('homepage');
var img = document.createElement('img');
img.setAttribute('src', 'img/salmon.png');
img.setAttribute('alt', 'picture of logo of product');
homePage.appendChild(img)

