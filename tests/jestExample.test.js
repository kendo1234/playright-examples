const { chromium } = require("playwright");

describe('UI Test To Be Run By Jest', () => {
    
    jest.setTimeout(10000);
    let browser = null;
    let page = null;
    let context = null;

    beforeAll(async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://demoqa.com/books');

    });

    afterAll(async() => {
        await browser.close();
    })

    test('Should Load Page', async() => {
        expect(page).not.toBeNull();
        expect(await page.title).not.toBeNull();
        
    });
});