const { Builder, By, Key, until } = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;


async function main(login) {
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    await driver.get('https://cclite.lab.qup.vn')

    // const username = await driver.findElement(By.id('username')).sendKeys('nhan.phan').then(found => console.log('User Name Textbox'));
    const username = await driver.findElement(By.className('form-control')).sendKeys('nhan.phan').then(found => console.log('User Name Textbox'));
    const password = await driver.findElement(By.css('#root > div > form > div > div:nth-child(2) > input')).sendKeys('bebaymau@123').then(found => console.log('Password Textbox'));
    const submit = await driver.findElement(By.xpath('//*[@id="root"]/div/form/div/button')).click().then(found => console.log('Login Successful'));

    const titleMap = await driver.getTitle().then(function (title) {
        if (title !== ('QUp New CC')) {
            throw Error('Unexpected title: ' + title, driver.quit());
            
        }else {
            console.log ('Title is: ' + title)
        }
    });

    await driver.quit()
}
main();
