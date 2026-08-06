import { test, expect } from '@playwright/test';
// const userData = require('./293_Users.json');
import userData from "./293_Users.json"; // modern JavaScript

const fs = require("fs");

test('Verify Element by Filter', async ({ page }) => {

    console.log(userData.username);
    console.log(userData.password);

    const fileData = fs.readFileSync("./tests/19_Data_Driven_Testing/293_Users.json", "utf-8");
    const user = JSON.parse(fileData);

    console.log(user.username);
    console.log(user.password);

})