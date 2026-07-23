import { test, expect } from '@playwright/test';

test("Handling Dynamic DropDown for SpiceJet", async ({ page }) => {

    // Navigating to SpiceJet URL
    await page.goto("https://www.spicejet.com/");
    // Entering imput in the From textbox
    await page.getByTestId('to-testID-origin').getByRole('textbox').fill("De");
    // Clicking on "Delhi"
    await page.locator('div').filter({ hasText: /^Delhi$/ }).first().click();
    // Entering input in the To textbox
    await page.getByTestId('to-testID-destination').getByRole('textbox').fill("Ban");
    // Clicking on "Bengaluru"
    await page.locator('div').filter({ hasText: /^Bengaluru$/ }).first().click();
    // Timeout for visibility
    await page.waitForTimeout(3000);

});