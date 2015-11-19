var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.firefox()).
   build();
   
driver.get('http://www.google.com');
console.log("URL opened successfully");