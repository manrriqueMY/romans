const { irregulars, regulars } = require("./data");

const inArabic = (roman) =>{
    let sum = 0;
    let numbers = [];
    Object.keys(irregulars).forEach((key,value) => {
        if(roman.includes(key)){
            numbers.push(key);
            roman = roman.replace(key, "");
            sum = sum + irregulars[key];
        }
    });
    Object.keys(regulars).forEach((key,value) => {
        if(roman.includes(key)){
            numbers.push(key);
            roman = roman.replace(key, "");
            sum = sum + regulars[key];
        }
    });
    
    console.log({numbers, sum});
    return sum;
};

module.exports = {inArabic};