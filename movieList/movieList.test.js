const { Builder, Capabilities, By } = require("selenium-webdriver");

const chromedriver = require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
});

afterAll(async () => {
    await driver.quit()
})


test('I can search Google', async () => {
    await driver.findElement(By.xpath("/html/body/main/section/form/input")).sendKeys('The Godfather Part 2\n');
    await driver.findElement(By.xpath("/html/body/main/ul/li/span")).click();
    await driver.findElement(By.id(`TheGodfatherPart2`)).click();
})










