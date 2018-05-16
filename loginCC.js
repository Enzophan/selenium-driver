const { Builder, By, Key, until } = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;


async function main(login) {
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    await driver.get('http://cc.qupworld.com')

    const username = await driver.findElement(By.id('username')).sendKeys('nhan.phan').then(found => console.log('User Name Textbox'));
    const password = await driver.findElement(By.id('password')).sendKeys('bebaymau@123').then(found => console.log('Password Textbox'));
    const submit = await driver.findElement(By.className('btn')).click().then(found => console.log('Login Successful'));

    // await element.sendKeys('webdriver', Key.RETURN)
    await driver.wait(until.titleIs('Map'), 10000).then(console.log('Title Map: Passed'));
    await driver.quit()
}
main();
