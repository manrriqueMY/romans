const {inArabic} = require("./functions");

const colections = [
    {arabic: 21, roman: "XXI"},
    {arabic: 40, roman: "XL"},
    {arabic: 58, roman: "LVIII"},
    {arabic: 958, roman: "CMLVIII"},
    {arabic: 454, roman: "CDLIV"},
];
describe("Test all", () => {
    colections.forEach(numbers => {
        test(`${numbers.roman} is ${numbers.arabic}`, () => {
            expect(inArabic(numbers.roman)).toBe(numbers.arabic);
        });
    });
});