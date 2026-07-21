import { test, expect, Page, Locator } from '@playwright/test';

async function findEmailByName(page: Page, name: string): Promise<Locator> {
    while (true) {
        const row = page.locator('#employees-tbody tr').filter({ hasText: name });
        if (await row.count()) return row;

        const next = page.getByTestId('next-page');
        if (await next.isDisabled()) throw new Error(`Row not found: ${name}`);
        await next.click();
    }
}

test("Find Email of Mia Hoffman in a Web table with Pagination", async ({ page }) => {

    // Navigating to the Playwright Web Table with Pagination
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    // Finding email of Mia Hoffman
    let name: string = "Mia Hoffman";
    const rowEmail = await findEmailByName(page, name);
    const email = await rowEmail.locator('td[data-col="email"]').innerText();
    console.log(`Email of ${name} is ${email}`);

})