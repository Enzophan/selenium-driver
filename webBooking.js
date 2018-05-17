const { Builder, By, Key, until } = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;


async function main(login) {
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    const url = await driver.get('https://wb.lab.qup.vn/booking.html?fleet=ecar')

    const titleStep1 = await driver.getTitle().then(function (title) {
        if (title !== ('Web Booking')) {
            throw Error('Unexpected title: ' + title, driver.quit());

        } else {
            console.log('Title is: ' + title)
        }
    });
    const pickup = await driver.wait(until.elementLocated(By.name('pickup')), 10000);
    await pickup.sendKeys('Sân Bay Đà Nẵng', Key.DOWN);
    // await pickup.click();



    const pickup2 = await driver.findElements(By.css('#contentStep1 > div > div:nth-child(1) > input')).then(found => console.log('Pickup Textbox found? %s', !!found.length));

    const destination = await driver.wait(until.elementLocated(By.name('destination')), 10000);
    await destination.sendKeys('Thừa Thiên Huế');

    
    // const pickUp = await driver.findElements(By.css('#contentStep1 > div > div:nth-child(1) > input')).sendKeys('Dai Hoc Bach Khoa, Da Nang').then(found => console.log('User Name Textbox'));

    // const username = await driver.findElement(By.id('username')).sendKeys('nhan.phan').then(found => console.log('User Name Textbox'));
    // const password = await driver.findElement(By.id('password')).sendKeys('bebaymau@123').then(found => console.log('Password Textbox'));
    // const submit = await driver.findElement(By.className('btn')).click().then(found => console.log('Login Successful'));

    // await element.sendKeys('webdriver', Key.RETURN)
    // await driver.wait(until.titleIs('Map'), 10000).then(console.log('Title Map: Passed'));
    await driver.quit()
}
main();
