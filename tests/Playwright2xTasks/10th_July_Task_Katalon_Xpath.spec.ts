import { test, expect } from '@playwright/test';

test("Katalon Cura Relative XPath Task", async ({ page }) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let appointmentButton = page.locator('//a[@id="btn-make-appointment"]');
    await appointmentButton.click();
    let userNameInput = page.locator('//input[@id="txt-username"]');
    await userNameInput.fill("John Doe");
    let passwordInput = page.locator('//input[@id="txt-password"]');
    await passwordInput.fill("ThisIsNotAPassword");
    let loginButton = page.locator('//button[@id="btn-login"]');
    await loginButton.click();
    // await page.waitForTimeout(5000);
    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        if (message.includes('The password you just used was found in a data breach')) {
            await dialog.dismiss();
        } else {
            await dialog.accept();
        }
    })
    let facilityDropdown = page.locator('//select[@id="combo_facility"]');
    await facilityDropdown.selectOption('Tokyo CURA Healthcare Center');
    let checkbox = page.locator('//input[@id="chk_hospotal_readmission"]');
    await expect(checkbox).not.toBeChecked();
    let programRadioOption = page.locator('//input[@id="radio_program_medicare"]');
    await expect(programRadioOption).toHaveValue("Medicare");
    let visitDateField = page.locator('//input[@id="txt_visit_date"]');
    await visitDateField.fill("11/07/2026");
    let commentField = page.locator('//textarea[@id="txt_comment"]');
    commentField.fill("First time admission");
    let bookAppointmentButton = page.locator('//button[@id="btn-book-appointment"]');
    await page.waitForTimeout(3000);

});