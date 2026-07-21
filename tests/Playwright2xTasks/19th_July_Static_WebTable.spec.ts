import { test, expect } from '@playwright/test';

test("Find Country of Yoshi in a Static Web table", async ({ page }) => {

    // Navigating to the Playwright Companies Static Web Table Page
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    // CSS for number of rows = #companies-table tbody tr
    const rows = await page.locator("#companies-table tbody tr").count();
    // CSS for total count of values = #companies-table tbody tr td
    const count = await page.locator("#companies-table tbody tr td").count();
    // XPath of any row = //table[@id='companies-table']/tbody/tr[i] i is from 1 to 6
    // XPath of Contact column in a row = //table[@id='companies-table']/tbody/tr[i]/td[j] j is from 1 to 3
    // CSS of header row for number of columns = #companies-table thead tr th
    const columns = await page.locator("#companies-table thead tr th").count();

    // Dynamic XPath
    const firstPart = "//table[@id='companies-table']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    // Logic for finding Country of Yoshi
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            const data = await page.locator(dynamicPath).innerText();
            if (data.includes("Yoshi")) {
                const contactName = await page.locator(dynamicPath).innerText();
                const countryPath = `${dynamicPath}/following-sibling::td`;
                const countryName = await page.locator(countryPath).innerText();
                console.log(`${contactName} is in Country ${countryName}`);
            }
        }
    }

})