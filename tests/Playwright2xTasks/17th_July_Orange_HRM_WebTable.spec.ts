import { test, expect } from '@playwright/test';

test("Take Screenshot of Terminated Employee", async ({ page }) => {

    // Navigate to the Orange HRM Login page
    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    // Finding Username field and entering Username
    await page.locator("[name='username']").fill("admin");
    // Finding Password field and entering Password 
    await page.locator("[name='password']").fill("Awesomeqa@4321");
    // Clicking on the Login Button
    await page.locator("[type='submit']").click();
    // Waiting for the page to load after login, not mandatory
    await page.waitForTimeout(3000);
    // Scrolling the page to bring the WebTable into view
    await page.evaluate(() => window.scrollBy(0, 500));

    // Row XPath = //div[@role='table']/div[@role='rowgroup'][2]/div
    // Row XPath = //div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row'];
    // Row XPath with Index = (//div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row'])[i] // i is the variable 
    // Exact Column Xpath = //div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row']/div[6]
    // Column XPath with Index = (//div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row'])[1]/div[j] // j is the variable

    const rows = await page.locator("//div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row']").count();
    const columns = await page.locator("(//div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row'])[1]/div").count();
    console.log(rows);
    console.log(columns);
    // Waiting for the page to load after login, not mandatory
    // await page.waitForTimeout(3000);

    const firstPart = "(//div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row'])[";
    const secondPart = "]/div[";
    const thirdPart = "]";

    // Logic for traversing columns for each row
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            // Dynamic XPath for columns in every row
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            // Content of each column in a row
            const data = await page.locator(dynamicPath).innerText();
            // console.log(data);
            // Logic for checking Terminated Employee
            if (data.includes("Terminated")) {
                // XPath for trash icon = (//div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row'])[6]/div[9]/div/button[1]/i
                // Dynamic XPath for Trash icon 
                const trashIconDynamicPath = `${firstPart}${i}${secondPart}${columns}${thirdPart}/div/button[1]/i`;
                // Clicking on the trash icon
                await page.locator(trashIconDynamicPath).click();
                // await page.waitForTimeout(5000);
                await page.screenshot({ path: "./tests/Playwright2xTasks/Orange-HRM.png" });
                // Wait for user visibility, not mandatory
                await page.waitForTimeout(3000);

            }
        }
    }

});