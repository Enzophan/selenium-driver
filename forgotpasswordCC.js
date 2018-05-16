const { Builder, By, Key, until } = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;


async function main() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    await driver.get('https://cc.lab.qup.vn')

    const forgotpassword = await driver.findElement(By.css('#frmLogin > div:nth-child(3) > div > a'))

    await forgotpassword.click()
    await driver.wait(until.titleIs('cc.lab.qup.vn'), 10000)

    const username = await driver.findElement(By.id('username'))
    await username.sendKeys('nhan.phan', Key.RETURN)
    
    await driver.findElement(By.className('form-control is-realperson')).then(found => console.log('Captcha Text 1 found? %s', !found.length))
    await driver.findElement(By.name('defaultReal')).then(found => console.log('Captcha Text 2 found? %s', !found.length))
    await driver.findElement(By.id('defaultReal')).then(found => console.log('Captcha Text 3 found? %s', !found.length))


    await driver.quit()
}
main()
