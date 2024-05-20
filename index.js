import inquirer from "inquirer";
let currency = {
    PKR: 1,
    USD: 0.0036,
    EURO: 0.0033,
    SAUDI_RIYAL: 0.013,
    TURKISH_LIRA: 0.12,
};
let user_Answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter from currency',
        type: 'list',
        choices: ["PKR", "USD", "EURO", "SAUDI-RIYAL", "TURKISH-LIRA"],
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: 'list',
        choices: ["PKR", "USD", "EURO", "SAUDI-RIYAL", "TURKISH-LIRA"],
    },
    {
        name: 'number',
        message: 'Enter your number',
        type: 'number',
    },
]);
let from_Amount = currency[user_Answer.from];
let to_Amount = currency[user_Answer.to];
let number = user_Answer.number;
let baseAmount = number / from_Amount;
let convertedAmount = baseAmount * to_Amount;
let roundedAmount = Math.round(convertedAmount);
console.log(convertedAmount);
