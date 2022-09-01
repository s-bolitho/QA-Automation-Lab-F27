const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('This test will check if addMovie works', async () => {
    let addMovieBar = await driver.findElement(By.tagName('input'))
    await addMovieBar.sendKeys('Interstellar\n')
    await driver.sleep(1000)
})

test('This test will check if crossOffMovie works', async () => {
    let crossOffMovieClick = await driver.findElement(By.tagName('span'))
    await crossOffMovieClick.click
    await driver.sleep(1000) 
})

test('This test will check if deleteMovie works', async () => {
    let deleteMovieBtn = await driver.findElement(By.xpath('//button[text()="x"]'))
    await deleteMovieBtn.click
    await driver.sleep(1000)
})



