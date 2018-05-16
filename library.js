var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
// var firefox = require('selenium-webdriver/firefox');
// var path = require('geckodriver').path;


By = webdriver.By;
until = webdriver.until;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

// var driver = new webdriver.Builder()
//     .withCapabilities(webdriver.Capabilities.chrome())
//     .build();

// var driver = new webdriver.Builder().forBrowser('firefox').build();
var driver = new webdriver.Builder().forBrowser('chrome').build();

var timeout = 5000;

driver.get('http://cc.qupworld.com');
// driver.wait(until.titleIs('QUp World'), 1000);
driver.findElements(By.css('input'));
driver.findElements(By.id('username')).then(found => console.log('User Name Textbox found? %s', !!found.length));
driver.findElement(By.id('username')).sendKeys('nhan.phan');
driver.findElements(By.id('password')).then(found => console.log('Password Textbox found? %s', !!found.length));
driver.findElement(By.id('password')).sendKeys('bebaymau@123');
driver.findElements(By.css('#frmLogin > div:nth-child(3) > div > label')).then(found => console.log('Remember me found? %s', !!found.length));
driver.findElements(By.className('btn')).then(found => console.log('Login button found? %s', !!found.length));
driver.findElements(By.xpath('//*[@id="frmLogin"]/button')).then(found => console.log('Login button found? %s', !!found.length));
driver.findElement(By.xpath('//*[@id="frmLogin"]/button')).click(console.log('Login successful'));
// driver.findElement(By.css('#frmLogin > button')).click();

driver.sleep(10000);

driver.wait(until.elementLocated(By.className('indication-th‌​at-login-was-success‌​ful')), 20000).then(function (elm) {
    driver.quit();
}).catch(function (ex) {
    driver.quit();
});

