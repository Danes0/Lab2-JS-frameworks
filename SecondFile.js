/*
This file contains functions and logic for module testing. It is used to demonstrate module imports and exports.
 */

//First Function: Print message
export function welcomeMessage(firstName, lastName){
    console.log(`Welcome ${firstName} ${lastName} to Assignment 2 for practicing importing and using custom modules.`);
}

//Second Function: Converts pounds to kilograms and vice versa
/*
kg = lb * 0.453592
lb = kg * 2.20462
 */
export function convertWeight(weight, unit){
    unit = unit.toLowerCase(); // Convert input to lowercase

    if(unit === 'lb'){
        return `${weight} lb is equal to ${(weight * 0.453592).toFixed(2)} kg`;
    }
    else if(unit === 'kg'){
        return `${weight} kg is equal to ${(weight * 2.20462).toFixed(2)} lb`;
    }
    else{
        return "Invalid unit. Please enter 'lb' for pounds or 'kg' for kilograms.";
    }
}

//Third Function: BMI (Body Mass Index) calculator
/*
BMI = weight / height^2 (weight in kg and height in mt)

BMI	Table
Below 18.5 -> Underweight
18.5 to 24.9 -> Normal
25 to 29.9 -> Overweight
30+ -> Obese
*/

export function calculateBMI(weight, height){
    let bmi = weight / (height * height).toFixed(2);

    let status;
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight";
    } else {
        status = "Obese";
    }
    
    return `Your BMI is ${bmi.toFixed(2)}, which is classified as ${status}.`;
    
}

// Fourth function: Body Fat Percentage Estimator
/*
Formule for women:
Body Fat=(1.20 * BMI)+(0.23 * Age) - 5.4

Formule for men:
Body Fat=(1.20 * BMI)+(0.23 * Age) - 16.2

Ideal percentage per age and gender
Women:
20-39 = 21-32%
40-59 = 23-33%
60+ = 24-35%

Men:
20-39 = 8-19%
40-59 = 11-21%
60+ = 13-24%
*/

export function bodyFatCal(bmi, age, gender) {
    let bodyFat;
    if (gender.toLowerCase() === "female") {
        bodyFat = (1.20 * bmi) + (0.23 * age) - 5.4;
    } else if (gender.toLowerCase() === "male") {
        bodyFat = (1.20 * bmi) + (0.23 * age) - 16.2;
    } else {
        return "Invalid gender. Please enter 'male' or 'female'.";
    }
    
    let idealRange;
    if (gender.toLowerCase() === "female") {
        if (age <= 39) idealRange = "21-32%";
        else if (age <= 59) idealRange = "23-33%";
        else idealRange = "24-35%";
    } else {
        if (age <= 39) idealRange = "8-19%";
        else if (age <= 59) idealRange = "11-21%";
        else idealRange = "13-24%";
    }
    
    return `Based on your BMI of ${bmi} and age ${age}, your estimated body fat percentage is ${bodyFat.toFixed(2)}%. The ideal range for your gender and age group is ${idealRange}.`;
}
