var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

function logTitle() {
    driver.getTitle().then(function(title) {
        console.log('Current Page Title: ' + title);
    });
}
 
function clickLink(link) {
    link.click();
}
 
function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
    closeBrowser();
}
 
function findLink() {
    return driver.findElements(webdriver.By.css('[href="https://xebia.com/"]')).then(function(result) {
        return result[0];
    });
}
 
function closeBrowser() {
    driver.quit();
}
 
driver.get('https://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('xebia india');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(findLink, 5000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);