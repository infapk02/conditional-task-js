# JavaScript Conditional Logic Practice

A beginner-friendly JavaScript practice project focused on understanding and implementing **conditional statements** in JavaScript.

This project contains several small programming tasks that demonstrate how to use `if`, `else if`, `else`, **nested conditions**, logical operators, and the **ternary operator** to solve common programming problems.

## 📌 Overview

The purpose of this project is to practice JavaScript decision-making and strengthen fundamental programming logic.

The project includes:

- Free drink / burger price calculation
- BMI calculator and health category
- Student grade calculator
- Nested friend-score conditions
- `if-else` and ternary operator practice
- Ticket fare calculator with discounts

## 🛠️ Technologies Used

- **JavaScript (Vanilla JavaScript)**
- `if`
- `else if`
- `else`
- Nested `if-else`
- Ternary operator
- Comparison operators
- Logical operators
- Variables
- Arithmetic operators
- `toFixed()`

## 📂 Tasks Included

### 1. Free Drinks

Checks the burger price and determines whether the customer receives a free Coke.

**Logic:**

- Burger price greater than `500 tk` → Free Coke
- Otherwise → Coke costs `30 tk`

```javascript
var burgerPrice = 500;

if (burgerPrice > 500) {
  console.log("Congratulations, you got a free burger!");
} else {
  console.log("You have to pay 30tk for the coke");
}
```

> Note: The original task asks for a **free Coke**, so the output message can be adjusted accordingly.

---

### 2. BMI Calculator and Health Category

Calculates Body Mass Index (BMI) and determines the health category based on the BMI value.

**BMI Formula:**

```text
BMI = weight (kg) / height (m)²
```

**Categories:**

| BMI         | Category    |
| ----------- | ----------- |
| Below 18.5  | Underweight |
| 18.5 – 24.9 | Normal      |
| 25 – 29.9   | Overweight  |
| 30 or above | Obese       |

The height is provided in inches and converted into meters before calculating BMI.

```javascript
var weight = 70;
var height = 68;

var bmi = (weight / (height * 0.0254) ** 2).toFixed(1);
```

---

### 3. Grade Calculator

Determines a student's grade based on their score.

**Grading Scale:**

| Score    | Grade |
| -------- | ----- |
| 90 – 100 | A     |
| 80 – 89  | B     |
| 70 – 79  | C     |
| 60 – 69  | D     |
| 0 – 59   | F     |

Example:

```javascript
var score = 85;

if (score >= 90 && score <= 100) {
  console.log("Your grade is A");
} else if (score >= 80 && score < 90) {
  console.log("Your grade is B");
}
```

---

### 4. Friend Score Decision

This task demonstrates the use of **nested `if-else-if-else` statements**.

First, the program checks the user's score. If the user's score is greater than `80`, it then checks the friend's score.

**Logic:**

- My score > 80
  - Friend score > 80 → Go for lunch
  - Friend score 60–80 → Good luck next time
  - Friend score 40–59 → Keep message unseen
  - Friend score < 40 → Block friend

- My score ≤ 80
  - Go home, sleep, and act sad

---

### 5. Number Comparison

Compares two numbers and stores the result in a variable.

**Logic:**

- If `num1 > num2` → Result is double of `num1`
- Otherwise → Result is the sum of `num1` and `num2`

#### Using `if-else`

```javascript
var num1 = 10;
var num2 = 5;
var result;

if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}

console.log(result);
```

#### Using Ternary Operator

```javascript
var result = num1 > num2 ? num1 * 2 : num1 + num2;

console.log(result);
```

---

### 6. Ticket Fare Calculator

Calculates ticket prices based on age and student status.

**Ticket Fare:** `800 tk`

**Rules:**

- Children under `10` → Free
- Students → `50% discount`
- Senior citizens aged `60+` → `15% discount`
- Others → Regular fare

| Passenger            |   Fare |
| -------------------- | -----: |
| Child (< 10)         |   Free |
| Student              | 400 tk |
| Senior Citizen (60+) | 680 tk |
| Regular Passenger    | 800 tk |

Example:

```javascript
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
```

## 📚 Concepts Practiced

Through these exercises, I practiced:

- Variables
- Arithmetic operations
- Comparison operators
- Logical operators (`&&`)
- `if` statements
- `if-else` statements
- `else if`
- Nested conditional statements
- Ternary operator
- BMI calculation
- Percentage and discount calculations
- String concatenation
- `toFixed()` method
- Basic problem-solving and programming logic

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Open the project

Open the project folder in **VS Code**.

### 3. Run the JavaScript file

You can run the JavaScript file using **Node.js**:

```bash
node script.js
```

Or run the code inside a browser using the browser's **Developer Console**.

## 🎯 Learning Goal

The main goal of this project is to build a strong foundation in **JavaScript conditional logic and problem-solving** before moving on to more advanced JavaScript concepts.

## 👨‍💻 Author

**Infa Pramanik**

Frontend / MERN Stack Developer
