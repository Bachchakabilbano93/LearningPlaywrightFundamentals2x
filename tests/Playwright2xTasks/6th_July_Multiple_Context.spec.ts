import { test, expect } from "@playwright/test";

test("Multiple Context Task", async ({ browser }) => {

    // Opening 2 separate contexts
    let ttaCartContext = await browser.newContext();
    let ttaBankContext = await browser.newContext();

    // Opening 1 page in each separate context
    let ttaCartPage = await ttaCartContext.newPage();
    let ttaBankPage = await ttaBankContext.newPage();

    // Opening URL for ttaCart and ttaBank in the separate pages
    await ttaCartPage.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await ttaBankPage.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

    // 5 seconds wait for the pages to load
    await ttaCartPage.waitForTimeout(5000);
    await ttaBankPage.waitForTimeout(5000);

    console.log("ttaCartPage URL: ", ttaCartPage.url());
    console.log("ttaBankPage URL: ", ttaBankPage.url());

    // Closing both the pages
    await ttaCartPage.close();
    await ttaBankPage.close();

    // Closing both the contexts
    await ttaCartContext.close();
    await ttaBankContext.close();

})