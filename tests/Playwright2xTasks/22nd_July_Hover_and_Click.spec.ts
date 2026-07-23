import { test, expect, Locator } from '@playwright/test';

test("hover and click on Wi-Fi", async ({ page }) => {

    // Navigate to the URL
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    // await page.pause();
    // Hover on the Add-ons
    await page.getByTestId('nav-add-ons').hover();
    // Storing all the Locators for the submenu items in an array
    let menuItems: Locator[] = await page.locator("[aria-label='Add-ons submenu'] a").all();
    // Printing each submenu item and clicking on Wi-Fi
    for (const item of menuItems) {
        console.log(await item.textContent());
        if ((await item.innerText()).includes("Wi-Fi")) {
            await item.click();
        }
    }

});