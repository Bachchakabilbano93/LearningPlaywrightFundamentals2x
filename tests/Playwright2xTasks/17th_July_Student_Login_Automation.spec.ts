import { test, expect } from '@playwright/test';

test("Verify student is logged in successfully", async ({ page }) => {

    // Navigating to the Playwright Multiple Element Filter Page
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    // Finding email field and entering email
    await page.locator("[id='email']").fill("abirbhattacharya7@gmail.com");
    // Finding password field and entering password
    await page.locator("[id='password']").fill("Test@3991");
    // Checking the Remember Me checkbox
    await page.locator("[name='remember']").check();
    // Clicking on the Login Button
    await page.getByTestId("login-button").click();
    // Fetching current URL after Login
    let currentUrl = page.url();
    // Assertions for current URL
    expect(currentUrl).toContain("abirbhattacharya7");
    expect(currentUrl).toContain("Test");
    expect(currentUrl).toContain("success");
    // Timeout for user visibility
    // await page.waitForTimeout(3000);

});