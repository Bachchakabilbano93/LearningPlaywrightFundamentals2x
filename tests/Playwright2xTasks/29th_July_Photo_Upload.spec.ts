import { test, expect, Locator } from '@playwright/test';
import path from 'path';

const URL = 'https://app.thetestingacademy.com';

test.describe('Uploading Profile Picture', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
        // await page.pause();
        await page.waitForLoadState("networkidle");

    });

    test('Upload Profile Picture from Local Machine', async ({ page }) => {
        await page.locator("//span[text()='Login']").click();
        await page.waitForLoadState("networkidle");
        await page.pause();
        await page.getByRole('textbox', { name: 'Email address' }).fill("abirbhattacharya7@gmail.com");
        await page.getByRole('button', { name: 'Continue', exact: true }).click();
        await page.waitForLoadState("networkidle");
        await page.getByRole('textbox', { name: 'Password' }).fill("SDET@786");
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.waitForLoadState("networkidle");
        const imageFilePath = path.join('E:\\LT14-ABA2-IND\\D\\Abir Docs', 'Abir_Profile.jpg');
        console.log(imageFilePath);

        // await page.setInputFiles('#avatar-upload', imageFilePath);
        // await page.waitForTimeout(5000);

    })

})