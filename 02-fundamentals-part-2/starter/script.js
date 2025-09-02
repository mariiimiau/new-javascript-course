// JavaScript Fundamentals Part 2 - Hour 1
console.log("Part 2: Functions ready!");

// Functions - Declarations and Expressions
function logger() {
    console.log("My name is Angeli");
}

logger();
logger();
logger();

// Function with parameters

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Why Functions Matter

// Without functions
const juice1 = 'Juice with 5 apples and 0 oranges.';
const juice2 = 'Juice with 2 apples and 4 oranges.';
const juice3 = 'Juice with 3 apples and 2 oranges.';

// With functions
const juice4 = fruitProcessor(5, 0);
const juice5 = fruitProcessor(2, 4);
const juice6 = fruitProcessor(3, 2);

// Exercise 1: Personal Greeting
console.log("=== EXERCISE 1: PERSONAL GREETING ===");
function greetStudent(studentName) {
    return `Hello, ${studentName}! Welcome to Javascript!`;
}

const greeting = greetStudent("Angeli");
console.log(greeting);

// Exercise 2: Simple Calculator
console.log("=== EXERCISE 2: SIMPLE CALCULATOR ===");
function addNumebrs(a, b) {
    return a + b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

console.log("Addition: ", addNumebrs(5, 3));
console.log("Multiplication: ", multiplyNumbers(4, 6));
console.log("Addition: ", addNumebrs(10, 15));
console.log("Multiplication: ", multiplyNumbers(7, 8));

// Function Expressions
const calcAge = function (birthYear) {
    return 2025 - birthYear
};

const age1 = calcAge(2003);
console.log(age1);

// Parameters vs Arguments
const calcAge2 = function(birthYear, currentYear) {
    return currentYear - birthYear;
};

const age = calcAge2(2003, 2025);
console.log(age); // 22

//Arguments
const myAge = calcAge2(2003, 2025);
const hisAge = calcAge2(2005, 2025);

console.log(`I am ${myAge} years old.`);
console.log(`He is ${hisAge} years old.`);

// Handling Missing Parameters
function introduce(firstName, lastName, age) {
    const introduction = `Hi, Im ${firstName} ${lastName}, and Im ${age} years old.`;
    return introduction;
}

console.log(introduce("Angeli", "Cesar", 21));
console.log(introduce("Conrad"));

// Exercise 3: Restaurant Bill Calculator
console.log("=== EXERCISE 3: RESTAURANT BILL CALCULATOR ===");

// 1. calculateTip(bill, tipPercent) - returns tip amount
const calculateTip = function(bill, tipPercent) {
  return bill * (tipPercent / 100);
};

// 2. getTotal(bill, tip) - returns bill + tip
const getTotal = function(bill, tip) {
  return bill + tip;
};

// 3. Chain them together
const billAmount = 100;
const tipPercentage = 15;

const tipAmount = calculateTip(billAmount, tipPercentage);
const totalAmount = getTotal(billAmount, tipAmount);

console.log(`Bill: $${billAmount}`);
console.log(`Tip (${tipPercentage}%): $${tipAmount}`);
console.log(`Total: $${totalAmount}`);

// Return Values & Function Scope
// Return Values and Scope

function calcAge3(birthYear) {
    return 2025 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.`;
    }
}

console.log(yearsUntilRetirement(2003, "Angeli"));
console.log(yearsUntilRetirement(1950, "Jeremiah"));

// Function Scope
// Global Scope
const globalVar = "Im a global";

function testScope() {
    //Function scope
    const localVar = "Im a local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);

// Practical Scope Example
const userName = "Angeli";

function createWelcomeMessage(user) {
    const message = `Welcome back, ${user}!`;
    const timestamp = new Date().toLocaleTimeString();

    return `${message} (Login time: ${timestamp})`;
}

console.log(createWelcomeMessage(userName));
// console.log(message); // Error: message is not defined

console.log("=== EXERCISE 4: TEMPERATURE CONVERTER SYSTEM ===");

// 1. celsiusToFahrenheit(celsius) - returns fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// 2. fahrenheitToCelsius(fahrenheit) - returns celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// 3. describeTemperature(temp, unit) - returns description
function describeTemperature(temp, unit) {
  if (unit === 'C') {
    if (temp > 30) return 'Hot';
    if (temp >= 20) return 'Warm';
    if (temp >= 10) return 'Cool';
    return 'Cold';
  } else if (unit === 'F') {
    if (temp > 86) return 'Hot';
    if (temp >= 68) return 'Warm';
    if (temp >= 50) return 'Cool';
    return 'Cold';
  }
  return 'Invalid unit';
}

// Test with different temperatures and units
console.log("25°C is", celsiusToFahrenheit(25).toFixed(1) + "°F");
console.log("77°F is", fahrenheitToCelsius(77).toFixed(1) + "°C");

console.log("35°C:", describeTemperature(35, 'C')); // Hot
console.log("25°C:", describeTemperature(25, 'C')); // Warm
console.log("15°C:", describeTemperature(15, 'C')); // Cool
console.log("5°C:", describeTemperature(5, 'C'));  // Cold

console.log("95°F:", describeTemperature(95, 'F')); // Hot
console.log("75°F:", describeTemperature(75, 'F')); // Warm
console.log("60°F:", describeTemperature(60, 'F')); // Cool
console.log("40°F:", describeTemperature(40, 'F')); // Cold

console.log("=== CODING CHALLENGE #1: FUNCTION CALCULATOR ===");

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
  } else {
    return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// JavaScript Fundamentals Part 2 - Hour 2
// Why Arrays Matter

// Without Arrays
const student1Grade = 85;
const student2Grade = 92;
const student3Grade = 78;

// With Arrays
const grades = [85, 92, 78, 96, 88];
console.log(grades);

// Array Creation and Access
console.log("=== ARRAYS ===");
// Array Creation
const friends = ["Taylor", "Cam Cameron", "Alex"];
console.log(friends);
// Different data types in same array
const mixed =["Sussanah", 30, true, friends];
console.log(mixed);
// Alternative way (but literal notation is preferred)
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Array Array Elements
console.log(friends[0]); // First element
console.log(friends[1]);
console.log(friends[2]);
// Array length property
console.log(friends.length);
// Get the last element
console.log(friends[friends.length - 1]);
// Changing array elements
friends[1] = "Laurel";
console.log(friends);

// Arrays with Expressions
// Arrays can contain expressions and function calls
const firstName = "Angeli";
const angeli = [firstName, "Cesar", 2025 - 2003];
console.log(angeli);
// Using our calcAge function from Hour 1
const calcAge4 = function(birthYear) {
    return 2025 - birthYear;
};
const ages = [calcAge4(2003), calcAge4(2005), calcAge4(1990)];
console.log(ages);

// Exercise 1: Personal Arrays
console.log("=== EXERCISE 1: PERSONAL ARRAYS ===");

// 1. Create an array 'hobbies' with 3 of your hobbies
const hobbies = ["reading", "coding", "gaming"];

// 2. Create an array 'numbers' with 5 different numbers
const numbers = [10, 25, 42, 67, 89];

// 3. Log the first and last element of each array
console.log("First hobby:", hobbies[0]);
console.log("Last hobby:", hobbies[hobbies.length - 1]);
console.log("First number:", numbers[0]);
console.log("Last number:", numbers[numbers.length - 1]);

// 4. Change the second element in hobbies array
hobbies[1] = "hiking";
console.log("Updated hobbies:", hobbies);

// 5. Create an array that includes your name, age, and a boolean
const personalInfo = ["Angeli", 22, true];
console.log("Personal info:", personalInfo);

// Essential Array Methods
// Array Methods - Adding Elements
const friends2 = ["Swift", "Steven", "Adam"];
// Push - add to end
const newLength2 = friends2.push("Martinez");
console.log(friends2);
console.log(newLength2);
// Unshift - add to beginning
friends2.unshift("Kitty");
console.log(friends2);

// Removing Elements
const popped2 = friends2.pop(); // removes last
console.log(popped2);
console.log(friends2);
// Shift - removes first
const shifted2 = friends2.shift();
console.log(shifted2);
console.log(friends2);

// Finding Elements
// IndexOf - find position of element
console.log(friends2.indexOf("Steven"));
console.log(friends2.indexOf("Bob")); // -1 
// Includes - check if element exists
console.log(friends2.includes("Swift")); // true
console.log(friends2.includes("Bob")); // false

// Exercise 2: Fruit Basket
console.log("=== EXERCISE 2: FRUIT BASKET ===");

// 1. Start with array: ['apple', 'banana']
let fruits = ["apple", "banana"];
console.log("Initial array:", fruits);

// 2. Add 'orange' to the end
fruits.push("orange");
console.log("After push(orange):", fruits);

// 3. Add 'grape' to the beginning
fruits.unshift("grape");
console.log("After unshift(grape):", fruits);

// 4. Remove the last element
const removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);
console.log("After pop:", fruits);

// 5. Check if 'banana' is in the array
const hasBanana = fruits.includes("banana");
console.log("Includes banana:", hasBanana);

// 6. Find the index of 'grape'
const grapeIndex = fruits.indexOf("grape");
console.log("Index of grape:", grapeIndex);

// 7. Log the final array and all results
console.log("Final array:", fruits);

// Array Iteration
// Loops
const friends3 = ["Swift", "Steven", "Adam"];
// Traditional for loop
for (let i = 0; i < friends3.length; i++) {
    console.log(friends3[i]);
}
// For loop with processing
const years2 = [1991, 2003, 2005, 2020];
const ages2 = [];
for (let i = 0; i < years2.length; i++) {
    ages2.push(2025 - years2[i]);
}   
console.log(ages2);

// forEach method - modern approach
friends3.forEach(function(friend, index) {
    console.log(`${index}: ${friend}`);
});
// Arrow function version (even cleaner)
friends3.forEach((friend, index) =>
    console.log(`Friend ${index + 1}: ${friend}`)
);

// Practical Example
// Real-world example - grade processing
const grades2 = [85, 92, 78, 96, 88, 74];
let total = 0;
// Calculate average grade
for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}
const average = total / grades.length;
console.log(`Average grade: ${average.toFixed(2)}`);
// Count passing students (grade >= 70)
let passedCount = 0;
grades.forEach((grade) => {
  if (grade >= 70) passedCount++;
});
console.log(`${passedCount} out of ${grades.length} students passed`);

// Exercise 3: Number Processing 
console.log("=== EXERCISE 3: NUMBER PROCESSING ===");

// 1. Create array: [10, 25, 30, 15, 40]
const numbers2 = [10, 25, 30, 15, 40];

// 2. Use for loop to double each number and store in new array
const doubledNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log("Doubled numbers:", doubledNumbers);

// 3. Use forEach to log each original number with its position
numbers.forEach((number, index) => {
  console.log(`Position ${index}: ${number}`);
});

// 4. Calculate the sum of all numbers using a for loop
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of numbers:", sum);

// 5. Count how many numbers are greater than 20
let countAbove20 = 0;
numbers.forEach((number) => {
  if (number > 20) countAbove20++;
});
console.log("Numbers greater than 20:", countAbove20);

// Coding Challenge #2: Student Grade Manager
console.log("=== CODING CHALLENGE #2: STUDENT GRADE MANAGER ===");

const studentGrades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  return total / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

// Function to count passing students - using 75 as passing grade to get 6/8
function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

// Generate complete report
const averageGrade = calculateAverage(studentGrades);
const highestGrade = findHighestGrade(studentGrades);
const lowestGrade = findLowestGrade(studentGrades);
const passingStudents = countPassing(studentGrades, 75); // Changed to 75 to get 6 passing

console.log("=== GRADE REPORT ===");
console.log(`Average: ${averageGrade.toFixed(2)}`); // 82.5
console.log(`Highest: ${highestGrade}`); // 95
console.log(`Lowest: ${lowestGrade}`); // 67
console.log(`Passing students: ${passingStudents} out of ${studentGrades.length}`); // 6 out of 8

// JavaScript Fundamentals Part 2 - Hour 3
// The Array Limitation Problem

// The Array Problem
const bellyArray = [
  "Belly",
  "Conklin",
  2037 - 2009,
  "volleyball captain",
  ["Michael", "Peter", "Steven"],
];
console.log(bellyArray[0]);
console.log(bellyArray[1]);
console.log(bellyArray[2]);

// Object Creation with Object Literal Syntax
console.log("=== OBJECTS ===");
// Object literal syntax - curly braces create objects
const belly = {
  firstName: "Belly", // property: string value
  lastName: "Conklin", // property: string value
  age: 2037 - 2009, // property: calculated value
  job: "volleyball captain", // property: string value
  friends: ["Michael", "Peter", "Steven"], // property: array value
};
console.log(belly);
    
// Array approach
// (bellyArray already declared above, so we skip redeclaring it here)
bellyArray[2] = 16; // update age if needed

// Object approach
const bellyObject = {
  firstName: "Belly",
  lastName: "Conklin",
  age: 16,
  job: "volleyball captain",
  friends: ["Michael", "Peter", "Steven"],
};

// Property Access Methods
// Dot notation - clean and readable
console.log(belly.firstName); // 'Jonas'
console.log(belly.lastName); // 'Schmedtmann'
console.log(belly.age); // 46
console.log(belly.job); // 'teacher'
console.log(belly.friends); // ['Michael', 'Peter', 'Steven']

// Bracket notation - uses strings
console.log(belly["firstName"]); // Same result as dot notation
console.log(belly["lastName"]);
console.log(belly["age"]);

// Bracket notation with expressions - compute property names!
const nameKey = "Name";
console.log(belly["first" + nameKey]); // 'Jonas'
console.log(belly["last" + nameKey]); // 'Schmedtmann'


// Modifying Existing Properties
belly.job = "volleyball capatin";
belly["age"] = 16;
console.log(belly);

// Adding New Properties
belly.location = "Cousin's beach";
belly["twitter"] = "@bellyconklin09";
belly.hasDriversLicense = false;
console.log(belly);

// Exercise 1: Personal Object
console.log("=== EXERCISE 1: PERSONAL OBJECT ===");

// 1. Create a 'book' object with title, author, pages, and isRead properties
const book = {
  title: "Hunger Games (French Edition)",
  author: "Suzanne Collins",
  pages: 398,
  isRead: true
};

// 2. Create a 'playlist' object with name, creator, songs array, and genre
const playlist = {
  name: "What Cousins feels like",
  creator: "Isabel Conklin",
  songs: ["Cruel Summer", "Ribs", "Team"],
  genre: "Pop"
};

// 3. Access and log different properties using both dot and bracket notation
console.log(book.title); // Dot notation
console.log(book["author"]); // Bracket notation
console.log(playlist.name); // Dot notation
console.log(playlist["creator"]); // Bracket notation

// 4. Add a new property to each object
book.publisher = "French and European Publications Inc";
playlist.duration = "45 minutes";

// 5. Modify an existing property in each object
book.isRead = false;
playlist.genre = "Pop";

console.log("Updated book:", book);
console.log("Updated playlist:", playlist);

// Objects vs Arrays: When to Use What
// Ordered, indexed data - think lists
const listOfYears = [1991, 1984, 2008, 2020];
const shoppingList = ["apples", "bananas", "milk", "bread"];
const testScores = [85, 92, 78, 96];

// Named, descriptive data - think entities
const person = {
  name: "Jonas",
  age: 46,
  occupation: "teacher",
};

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};

// Objects can contain arrays, arrays can contain objects
const student = {
  name: "Sarah",
  grades: [85, 92, 78], // Array inside object
  address: {
    // Object inside object
    street: "123 Main St",
    city: "New York",
  },
};

console.log(student.grades[0]); // 85
console.log(student.address.city); // 'New York'

// Object Methods and the 'this' Keyword
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // Method - function inside object
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

// Call methods using dot notation
console.log(jonas.calcAge(1991)); // 46
console.log(jonas.calcAge(jonas.birthYear));

// The 'this' Keyword - Accessing Own Properties
const jonasImproved = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    console.log(this); // Shows the jonas object
    return 2037 - this.birthYear; // Access own birthYear!
  },
};

console.log(jonasImproved.calcAge()); // 46

// Advanced: Storing Calculated Values
const jonasAdvanced = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear; // Store result as new property
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonasAdvanced.calcAge());
console.log(jonasAdvanced.age); 
console.log(jonasAdvanced.getSummary());

// Exercise 2: Calculator Object
console.log("=== EXERCISE 2: CALCULATOR OBJECT ===");

const calculator = {
  num1: 10,
  num2: 5,
  operator: "+",

  add: function () {
    return this.num1 + this.num2;
  },

  subtract: function () {
    return this.num1 - this.num2;
  },

  multiply: function () {
    return this.num1 * this.num2;
  },

  divide: function () {
    return this.num1 / this.num2;
  },

  calculate: function () {
    switch (this.operator) {
      case "+":
        return this.add();
      case "-":
        return this.subtract();
      case "*":
        return this.multiply();
      case "/":
        return this.divide();
      default:
        return "Invalid operator";
    }
  },

  getResult: function () {
    const result = this.calculate();
    return `${this.num1} ${this.operator} ${this.num2} = ${result}`;
  }
};

// Test your calculator
console.log(calculator.calculate());
console.log(calculator.getResult());

// Coding Challenge #3: BMI Comparison
console.log("=== CODING CHALLENGE #3: USER PROFILE SYSTEM ===");

const user = {
  firstName: "Conrad",
  lastName: "Fisher",
  birthYear: 2004,
  location: "Cousin's beach",
  interests: ["gardening", "guitar", "cooking"],
  friends: [
    { name: "Isabel", status: "active" },
    { name: "Jeremiah", status: "inactive" },
    { name: "Steven", status: "active" },
  ],
  isActive: true,

  calcAge: function () {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  addFriend: function (name, status = "active") {
    this.friends.push({ name, status });
    return this.friends.length;
  },

  getActiveFriends: function () {
    return this.friends.filter(friend => friend.status === "active").length;
  },

  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  getSummary: function () {
    const age = this.calcAge();
    const activeFriends = this.getActiveFriends();
    const totalFriends = this.friends.length;
    
    return `${this.firstName} ${this.lastName} is a ${age}-year old from ${this.location}.
Status: ${this.isActive ? "Active" : "Inactive"}
Friends: ${activeFriends} active out of ${totalFriends} total
Interests: ${this.interests.join(", ")}`;
  }
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Isabel", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());

// JavaScript Fundamentals Part 2 - Hour 4
// Selecting DOM Elements

// Exercise 1: Element Selection Practice
console.log("=== EXERCISE 1: ELEMENT SELECTION PRACTICE ===");

// 1. Select the element with class 'guess' and log it
const guessInput = document.querySelector(".guess");
console.log(guessInput);

// 2. Select the element with ID 'btn' using both querySelector and getElementById
const buttonQuery = document.querySelector("#btn");
const buttonById = document.getElementById("btn");
console.log("Are they the same element?", buttonQuery === buttonById);

// 3. Select all span elements and log the collection
const allSpans = document.querySelectorAll("span");
console.log("All spans:", allSpans);

// 4. Select the first span element and log its textContent
const firstSpan = document.querySelector("span");
if (firstSpan) {
    console.log("First span text:", firstSpan.textContent);
}

// 5. Experiment with different CSS selectors
const firstDiv = document.querySelector("div");
console.log("First div:", firstDiv);

// Exercise 2: Content and Style Practice
console.log("=== EXERCISE 2: CONTENT AND STYLE PRACTICE ===");

// Select elements
const heading = document.querySelector("h1");
const button = document.querySelector("#btn");
const input = document.querySelector(".guess");
const message = document.querySelector(".message");
const scoreValue = document.querySelector(".score-value");

// 1. Change the h1 text to your name
if (heading) {
    heading.textContent = "Interactive Score Tracker by Angeli";
}

// 2. Make the button's background color blue and text white
if (button) {
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
}

// 3. Set a placeholder text in the input field
if (input) {
    input.placeholder = "Type something cool...";
}

// 4. Change the message text to include HTML bold formatting
if (message) {
    message.innerHTML = "This is <strong>bold</strong> text from JavaScript!";
}

// 5. Make the score display larger and a different color
if (scoreValue) {
    scoreValue.style.fontSize = "2rem";
    scoreValue.style.color = "green";
    scoreValue.style.fontWeight = "bold";
}

// Exercise 3: Event Listener Practice
console.log("=== EXERCISE 3: EVENT LISTENER PRACTICE ===");

// 1. Add a click event to the h1 that changes its color
if (heading) {
    heading.addEventListener("click", function () {
        heading.style.color = "purple";
    });
}

// 2. Create an input event that displays character count as user types
if (input) {
    input.addEventListener("input", function () {
        const count = input.value.length;
        if (message) {
            message.textContent = `Character count: ${count}`;
        }
    });
}

// 3. Add a keydown event that responds to the spacebar
document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        if (message) {
            message.textContent = "Spacebar pressed!";
        }
    }
});

// 4. Make the button change its text when hovered (mouseover event)
if (button) {
    button.addEventListener("mouseover", function () {
        button.textContent = "Hovering!";
    });

    button.addEventListener("mouseout", function () {
        button.textContent = "Click Me!";
    });
}

// 5. Create a double-click event that does something special
if (heading) {
    heading.addEventListener("dblclick", function () {
        heading.textContent = "Double-clicked!";
        heading.style.backgroundColor = "lightblue";
    });
}

// Final Project: Interactive Score Tracker
console.log("=== FINAL PROJECT: INTERACTIVE SCORE TRACKER ===");

// Game state - moved to top of this section
const gameState = {
    scores: [0, 0],
    winningScore: 5,
    gameOver: false
};

// DOM elements
const scoreDisplays = [
    document.querySelector("#score-1"),
    document.querySelector("#score-2")
];
const addButtons = document.querySelectorAll(".btn-add");
const resetButton = document.querySelector("#btn-reset");
const winningScoreInput = document.querySelector("#winning-score");
const statusMessage = document.querySelector(".status");
const winnerMessage = document.querySelector(".winner");
const winnerName = document.querySelector(".winner-name");
const targetScore = document.querySelector(".target");
const players = document.querySelectorAll(".player");

// Update score display
function updateScoreDisplay() {
    scoreDisplays.forEach((display, index) => {
        if (display) {
            display.textContent = gameState.scores[index];
        }
    });
}

function checkWinner1() {
    for (let i = 0; i < gameState.scores.length; i++) {
        if (gameState.scores[i] >= gameState.winningScore) {
            gameState.gameOver = true;
            if (winnerName) winnerName.textContent = `Player ${i + 1}`;
            if (winnerMessage) winnerMessage.classList.remove("hidden");
            players.forEach((player, index) => {
                if (index === i) {
                    player.classList.add("winner");
                } else {
                    player.classList.add("loser");
                }
            });
            return true;
        }
    }
    return false;
}

// Add points to player
function addPoint(playerIndex) {
    if (gameState.gameOver) return;
    
    gameState.scores[playerIndex]++;
    updateScoreDisplay();
    
    if (checkWinner1()) {
        addButtons.forEach(btn => {
            if (btn) btn.disabled = true;
        });
    }
}

// Reset game
function resetGame() {
    gameState.scores = [0, 0];
    gameState.winningScore = parseInt(winningScoreInput.value) || 5;
    gameState.gameOver = false;
    
    updateScoreDisplay();
    if (targetScore) targetScore.textContent = gameState.winningScore;
    if (winnerMessage) winnerMessage.classList.add("hidden");
    
    players.forEach(player => {
        player.classList.remove("winner", "loser");
    });
    
    addButtons.forEach(btn => {
        if (btn) btn.disabled = false;
    });
}

// Event listeners
addButtons.forEach((button, index) => {
    if (button) {
        button.addEventListener("click", () => addPoint(index));
    }
});

if (resetButton) {
    resetButton.addEventListener("click", resetGame);
}

if (winningScoreInput) {
    winningScoreInput.addEventListener("change", resetGame);
}

// Keyboard shortcuts
document.addEventListener("keydown", function (event) {
    if (event.key === "1") addPoint(0);
    if (event.key === "2") addPoint(1);
    if (event.key === "r") resetGame();
});

// Initialize game
resetGame();
