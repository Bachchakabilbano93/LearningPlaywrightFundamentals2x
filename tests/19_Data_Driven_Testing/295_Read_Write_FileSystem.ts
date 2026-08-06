const fs = require('fs');
import path from 'path';

const filePath = path.join(__dirname, '293_Users.json');
console.log('File path:', filePath);
const fileData = fs.readFileSync(filePath, 'utf-8');

// const fileData = fs.readFileSync('E:\\LT14-ABA2-IND\\D\\The Testing Academy\\Playwright\\LearningPlaywrightFundamentals2x\\tests\\19_Data_Driven_Testing\\293_Users.json', 'utf-8');

const userData = JSON.parse(fileData);
console.log(userData.username);

// Writing Data to a JSON File

const user = {
    name: "Abir",
    role: "SDET"
};

// const jsonData = JSON.stringify(user);
const jsonData = JSON.stringify(user, null, 2);

fs.writeFileSync("output.json", jsonData);
console.log("JSON file created successfully");