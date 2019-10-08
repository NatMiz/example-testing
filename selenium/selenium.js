const selenium = require('selenium-webdriver');

(async function example() {
  let driver = await new selenium.Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000/index.html');
    await driver.findElement(selenium.By.id('button')).click();
    await driver.wait(selenium.until.alertIsPresent, 1000);
    console.log("Success!")
  } finally {
    await driver.quit();
  }
})();