/*
This file serves as the entry point for running the application using Node.js.
It imports functions from SecondFile.js.
The functions include:
- Printing a welcome message
- Converting weight between pounds and kilograms
- Calculating BMI (Body Mass Index)
- Estimating body fat percentage based on BMI, age, and gender
*/

import { welcomeMessage, convertWeight, calculateBMI, bodyFatCal } from "./SecondFile.js";

// Calling functions from SecondFile.js
console.log("Starting Application...\n");

//First Function: Print message
welcomeMessage("Daniela", "Escobar");

//Second Function: Converts pounds to kilograms and vice versa
console.log("\n**Convert from pounds to kilograms**");
console.log(convertWeight(150, "lb"));

console.log("\n**Convert from kilograms to pounds**");
console.log(convertWeight(52, "kg"));

//Third Function: BMI calculator
console.log("\n**Calculate BMI using kilograms and meters**");
let bmiString = calculateBMI(52, 1.51);
console.log(bmiString);

let bmiValue = parseFloat(bmiString.match(/[\d.]+/)[0]);

console.log("\n**Estimate body fat percentage by gender ('female' or 'male') and age**");
console.log(bodyFatCal(parseFloat(bmiValue), 34, "female"));