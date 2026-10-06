/***
task 1
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
var burgerPrice = 500;

if (burgerPrice > 500) {
  console.log("Congratulations, you got a free burger!");
} else {
  console.log("You have to pay 30tk for the coke");
}
/*** 
task 2
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
var weight = 70;
var height = 68;

var bmi = (weight / (height * 0.0254) ** 2).toFixed(1);

if (bmi < 18.5) {
  console.log("You are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are overweight");
} else {
  console.log("You are obese");
}
/***
task 3
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
var score = 85;
if (score >= 90 && score <= 100) {
  console.log("Your grade is A");
} else if (score >= 80 && score < 90) {
  console.log("Your grade is B");
} else if (score >= 70 && score < 80) {
  console.log("Your grade is C");
} else if (score >= 60 && score < 70) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is F");
}

/***
task 4
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var myScore = 85;
var friendScore = 75;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("Let's go for lunch!");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("Good luck next time!");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("Keep your friend's message unseen.");
  } else {
    console.log("Block your friend.");
  }
} else {
  console.log("Go home, sleep, and act sad.");
}

/***
task 5
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

var num1 = 10;
var num2 = 5;

var result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);

/***
task 6
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age = 8;
var isStudent = true;
var ticketFare = 800;

if (age > 10 && age < 60) {
  if (isStudent) {
    console.log("You get a 50% discount. Your ticket fare is: " + ticketFare * 0.5 + " tk");
  } else {
    console.log("Your ticket fare is: " + ticketFare + " tk");
  }
} else if (age < 10) {
  console.log("You get a free ticket!");
} else if (age >= 60) {
  console.log("You get a 15% discount. Your ticket fare is: " + ticketFare * 0.85 + " tk");
}
