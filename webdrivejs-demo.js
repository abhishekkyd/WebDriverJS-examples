var assert = require('assert'),
    webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();
driver.manage().window().maximize();
driver.get('http://www.google.com').then(function(get) {
    console.log("URL opened successfully");
});
var searchBox = driver.findElement(webdriver.By.name('q'));
searchBox.sendKeys('xebia india');
searchBox.getAttribute('value').then(function(value) {
  assert.equal(value, 'xebia india');
});
driver.quit();