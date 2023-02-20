const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

    const checks = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=radio]:nth-child(7)')
    checks[1].check();
    checks[0].uncheck();

    const radios = await page.$$('#main > div.w3-row > div:nth-child(3) > label:nth-child(2) > span')
    radios[1].check();


    await browser.close();
})();