import { test, expect, Locator } from '@playwright/test';

const URL = "https://www.flipkart.com/search";

// Creating a function for extracting the price 
function extractNumericPrice(text: string | null): number | null {
    if (!text) return null;

    // Remove everything except digits
    const digitsOnly = text.replace(/[^\d]/g, "");

    // If there are no digits
    if (!digitsOnly) return null;

    // Convert to number
    return parseInt(digitsOnly, 10);

}

// Creating a function for finding the cheapest price
function findCheapestPrice(prices: number[]): number | null {
    if (prices.length === 0) return null;

    let cheapestPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < cheapestPrice) {
            cheapestPrice = prices[i];
        }
    }

    return cheapestPrice;
}

test.describe("Find the cheapest macmini", () => {

    test.beforeEach("Before Each Test Case", async ({ page }) => {
        // Navigating to the URL
        await page.goto(URL);
    });

    test("Printing all the items and price of cheapest macmini", async ({ page }) => {

        // Entering "macmini" in the Search field
        await page.locator("input[name='q']").fill("macmini");
        // Clicking on the Search Icon
        const searchIcon: Locator = page.locator('svg');
        await searchIcon.first().click();
        await page.waitForTimeout(3000); // Waiting for the page to load        
        // Print the title of all the result items   
        const titleItems: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'MPC') or contains(@data-id,'COM')]/div/a[2]");
        const count = await titleItems.count();
        for (let i = 0; i < count; i++) {
            const titleItem: string | null = await titleItems.nth(i).textContent();
            console.log(titleItem);
        }

        // Print the price of all the result items and finding the cheapest price
        const priceItems: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'MPC') or contains(@data-id,'COM')]/div/a[3]/div/div[1]");
        const priceCount = await priceItems.count();
        const numericPrices: number[] = [];
        for (let i = 0; i < priceCount; i++) {
            const priceItem: string | null = await priceItems.nth(i).textContent();
            console.log(priceItem);

            const numericPrice = extractNumericPrice(priceItem);
            if (numericPrice !== null) {
                numericPrices.push(numericPrice);
            }
        }

        const cheapestItemPrice = findCheapestPrice(numericPrices);
        console.log(`Cheapest price is Rs ${cheapestItemPrice}`);

        // Print the price of all the result items using Locator Array and for...of loop
        // const priceItemsArray: Locator[] = await page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'MPC') or contains(@data-id,'COM')]/div/a[3]/div/div[1]").all();
        // for (const eachPrice of priceItemsArray) {
        //     console.log(await eachPrice.textContent());
        // }

    });

});