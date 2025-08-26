// Variables with let
console.log("=== VARIABLES ===");

let firstName = "Marygail";
console.log(firstName);

let age = 21;
age = 21; 
console.log(age);

// Variables with const
const birthYear = 2003;
console.log(birthYear);

const PI = 3.1415;
console.log(PI);

// The Old Way: var
var job = "programmer";
job = "artist";
console.log(job);

// Best Practices
const country = "Philippines";
const language = "Filipino";
const population = 20;

let currentAge = 21;
currentAge = 21; // This will change

// ✅ Good names
// let firstName = "Marygail"; // Removed redeclaration to avoid error
let myCurrentJob = "programmer";
// let PI = 3.1415; // Removed redeclaration to avoid error

// Basic Data Types
console.log("=== DATA TYPES ===");
// Number (integers and decimals)
let anotherAge = 22;
console.log(anotherAge);
console.log(typeof anotherAge); // "number"

// String (text in quotes)
// let firstName = "Marygail"; // Removed redeclaration to avoid error
console.log(firstName);
console.log(typeof firstName); // "string"

// Boolean (true or false)
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // "boolean"

// Undefined (no value assigned yet)
let year;
console.log(year); // undefined
console.log(typeof year); // "undefined"

// Start as a number
let dynamicVariable = 22;
console.log(dynamicVariable, typeof dynamicVariable); // 23, "number"

// Change to a string
dynamicVariable = "Now I'm a string!";
console.log(dynamicVariable, typeof dynamicVariable); // "Now I'm a string!", "string"

// Change to a boolean
dynamicVariable = true;
console.log(dynamicVariable, typeof dynamicVariable); // true, "boolean"

// JavaScript Fundamentals - Hour 1
// Insert your complete code here

// Exercise 1: Personal Info Variables
console.log("===EXERCISE 1: About Me ===");
// Use the already declared firstName variable above
console.log(firstName, typeof firstName);

let myCurrentAge = 21; // 2. Your age (let - it changes every year!)
console.log(myCurrentAge, typeof myCurrentAge);

const favoriteNumber = 3; // 3. Your favorite number (const)
console.log(favoriteNumber, typeof favoriteNumber);

const likesJavaScript = true; // 4. Whether you like JavaScript so far (boolean)
console.log(likesJavaScript, typeof likesJavaScript);

// Exercise 2: Variable Reassignment
console.log("===EXERCISE 2: TVariable Reassignment ===");
let score = 100; // 1. Create a let variable called 'score' with value 100

console.log(score); // 2. Log it to the console

score = 150; // 3. Change it to 150

console.log(score); // 4. Log it again

const constScore = 100; // 5. Try the same with const - what happens?
console.log(constScore);

// Exercise 3: Data Type Detective
// Use typeof to check the data type of these values:
console.log("===EXERCISE 3: Data Type Detective ===");

// JavaScript Fundamentals - Hour 2
// Insert your complete code here

// Basic Operators - Math operators
console.log("=== MATH OPERATORS ===");
const now = 2040;
const ageDanielle = now - 2005;
const ageLia = now - 2000;
console.log(ageDanielle, ageLia);

// All Math Operators 
console.log(ageDanielle * 2, ageDanielle / 10, 2 ** 3);

console.log("Math operations:");
console.log("Addition:", 22 + 31);
console.log("Subtraction:", 22 - 31);
console.log("Multiplication:", 22 * 31);
console.log("Division:", 22 / 31);
console.log("Exponentiation:", 2 ** 3); 

// String Concatenation
console.log(firstName);
const lastName = "Cesar";
console.log(firstName + " " + lastName);

console.log("Hello" + "World" + "!");
console.log("I am" + 21 + "years old.");

// Assignment Operators
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 3 + 5;
console.log("x starts as:", x);

// Assignment Shortcuts
x += 10; // x = x + 10
console.log("After x += 10:", x);

x *= 4; // x = x * 4
console.log("After x *= 4:", x);

x /= 2; // x = x / 2
console.log("After x /= 2:", x);

// Increment and Decrement
x++; // x = x + 1
console.log("After x++:", x);

x--; // x = x - 1
x--;
console.log("After x-- twice:", x);

// Exercise: Score Calculator
// Practice assignment operators:

console.log("=== EXERCISE: SCORE CALCULATOR ===");

// 1. Create a variable 'score' with value 100
score = 100;
console.log("Initial score:", score);
// 2. Add 100 using +=
score += 100;
console.log("After score += 100:", score);
// 3. Multiply by 2 using *=
score *= 2;
console.log("After score *= 2:", score);
// 4. Subtract 25 using -=
score -= 25;
console.log("After score -= 25:", score);

// Revised steps:
score = 100;
score += 100;    // 200
score *= 2;      // 400
score -= 23;     // 377

console.log("Final score:", score); // 377

// Basic Comparisons 
console.log("=== COMPARISONS ===");

console.log("Age comparisons:");
console.log(ageDanielle > ageLia); // false (20 > 25)
console.log(ageLia >= 25); //true
console.log(ageDanielle <30); //false

console.log("Number comparisons:");
console.log(25 > 20); //true
console.log(15 < 10); //false
console.log(18 >= 18); //true
console.log(16 <= 15); //false

// Storing Comparison Results
const isDanielleFullAge = ageDanielle >= 18;
console.log("Danielle is adult:", isDanielleFullAge); //true

const isLiaOlder = ageLia > ageDanielle;
console.log("Is Lia older than Danielle?", isLiaOlder); //true

// Complex Expressions
console.log("Complex expressions:");
console.log(now - 2005 > now - 2000); // false

// Exercise: Age Comparison
console.log("=== EXERCISE: AGE VERIFICATION ===");

const myAge = 21;
// 1. Compare your age to 18 (>=)
console.log("Am I an adult?", myAge >= 18); // true

// 2. Check if 100 is greater than 99
console.log("Is 100 greater than 99?", 100 > 99); // true

// 3. Store a comparison result in a variable
const isAdult = myAge >= 18;
console.log("Am I an adult? (stored in variable):", isAdult); // true

// 4. Try comparing the result of two calculations
const calculation1 = 15 * 4; // 60
const calculation2 = 100 - 40; // 60
console.log("Is 15*4 greater than 100-40?", calculation1 > calculation2); // false (60 > 60 is false)
console.log("Is 15*4 equal to 100-40?", calculation1 === calculation2); // true (60 === 60)

// Operators Precedence
console.log("=== OPERATOR PRECEDENCE ===");

const currentYear = 2040;
const ageLi = currentYear - 2005;
const ageDanielle2 = currentYear - 2000;

console.log(currentYear - 2005 > currentYear - 2000); // false

// Assignment Precedence
let x2, y2;
x2 = y2 = 25 - 10 - 5; // x2 = y2 = 10
console.log("x2:", x2); // 10

// Parentheses Override Everything
const averageAge = (ageLi + ageDanielle2) / 2;
console.log("ageLi:", ageLi, "ageDanielle2:", ageDanielle2);

// Coding Challenge #1 - BMI Calculator
console.log("=== CODING CHALLENGE #1: BMI CALCULATOR ===");

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// 1. Calculate BMIs using both formula versions
const BMIMark1 = massMark / heightMark ** 2;
const BMIMark2 = massMark / (heightMark * heightMark);
const BMIJohn1 = massJohn / heightJohn ** 2;
const BMIJohn2 = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI (version 1):", BMIMark1);
console.log("Mark's BMI (version 2):", BMIMark2);
console.log("John's BMI (version 1):", BMIJohn1);
console.log("John's BMI (version 2):", BMIJohn2);

// 2. Create boolean variable for comparison
const markHigherBMI = BMIMark1 > BMIJohn1;

// 3. Log results to console
console.log("Does Mark have a higher BMI than John?", markHigherBMI);
console.log("Mark's BMI:", BMIMark1.toFixed(2));
console.log("John's BMI:", BMIJohn1.toFixed(2));

// JavaScript Fundamentals - Hour 3
// Insert your complete code here

// Strings and Template Literals
const firstName2 = "Marygail";
const job2 = "artist";
const birthYear2 = 2003;
const year2 = 2025;

const marygail =
  "I'm " + firstName2 + ", a " + (year2 - birthYear2) + " year old " + job2 + "!";
console.log(marygail);

// The modern way - Template Literals
const marygailNew = `I'm ${firstName2}, a ${year2 - birthYear2} year old ${job2}!`;
console.log(marygailNew);

// Any expression works inside ${}
console.log(`I'm ${2025 - 2003} years old.`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3} `); 

console.log(`Just a regular string...`);

// Old way - painful
console.log(
  "String with \n\
multiple \n\
lines"
);

// New way - natural
console.log(`String
multiple
lines`);

// Exercise 1: Personal Intrdoduction
const myName = "Angeli";
const myAge2 = 21;
const myJob2 = "artist";
const currentYear2 = 2025;

const introduction = `Hi, I'm ${myName}, a ${myAge2} year old ${myJob2}!`;
console.log(introduction);

// Exercise 2: Math in Templates
const currentYear3 = 2025;
const myAge3 = 2023;
const birthYear3 = currentYear3 - myAge;

const templateLiteral = `Born in ${birthYear}, 10*5 = ${10 * 5}, Adult: ${myAge >= 18}`;
console.log(templateLiteral);

//Taking Decisions: if / else Statements 
const LaraJeanAge = 15;

if (LaraJeanAge >= 18) {
    console.log("Lara Jean can start driving license 🚗");
} else {
    const yearsLeft = 18 - LaraJeanAge;
    console.log(`LaraJean is too young. Wait another ${yearsLeft} years :)`);
}

// Variable Assignment with Decisions
birthYear4 = 2015;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); //21

// Real-World Decision-Making
score = 90;

if (score >= 60) {
  console.log(`You passed with ${score} points! 🎉`);
  console.log("Congratulations!");
} else {
  const pointsNeeded = 60 - score;
  console.log(`You failed. Need ${pointsNeeded} more points.`);
}

// Exercise 1: Grade Calculator
console.log("=== EXERCISE 1: GRADE CALCULATOR ===");

const testScore = 75;

if (testScore >= 90) {
    console.log("Excellent! Grade A");
} else if (testScore >= 80) {
    console.log("Good job! Grade B");
} else if (testScore >= 70) {
    console.log("Not bad! Grade C");
} else if (testScore >= 60) {
    console.log("You passed! Grade D");
} else {
    console.log("You failed! Study harder");
}

// Exercise 2: Age Verification
// Create an age verification system
console.log("=== EXERCISE 2: AGE VERIFICATION ===");

const userAge = 17;

if (userAge >= 18) {
    console.log("Welcome! You can access all content");
} else if (userAge >= 13) {
    console.log("Welcome! Restricted content only");
} else {
    console.log("Sorry, you're too young");
}

// Truthy and Falsy Values
// 5 Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Danielle")); // true
console.log(Boolean({})); // true (empty object)
console.log(Boolean("")); // false (empty string)

// Practical Application
const money = 20;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

// Common Gotcha
let height = 55; // This is a valid height!
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED"); // This runs even though height IS defined!
}

// Better approach for checking if defined:
if (height !== undefined) {
  console.log("Height is defined");
}

// Test these values with Boolean(): and if statements:
console.log("=== TRUTHY/FALSY VALUES TEST ===");

const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

for (let i = 0; i < values.length; i++) {
    const value = values[i];
    console.log(`\nValue:`, value);
    console.log("Boolean:", Boolean(value));
    
    if (value) {
        console.log("Truthy!");
    } else {
        console.log("Falsy!");
    }
}

console.log("=== CODING CHALLENGE #2: BMI COMPARISON ===");

// Reuse your BMI calculation from Challenge #1

const massMark2 = 78;
const heightMark2 = 1.69; 
const massJohn2 = 92;
const heightJohn2 = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI:", BMIMark.toFixed(1));
console.log("John's BMI:", BMIJohn.toFixed(1));

// Your if/else statement here:
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
} else if (BMIJohn > BMIMark) {
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
} else {
    console.log(`Mark and John have the same BMI (${BMIMark.toFixed(1)})!`);
}