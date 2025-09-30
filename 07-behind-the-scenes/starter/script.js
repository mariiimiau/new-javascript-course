'use strict';
console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');
console.log('Starting program');
function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace(); // Add this to see the call stack
}

outerFunction();
const globalVar = 'I am global';

function anyFunction() {
  console.log(globalVar); // Accessible everywhere
}

function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar); // Works here
}

if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out'; // var ignores block scope
}
console.log(notBlockScoped);

const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  console.log(outer, inner, /* blockConst not here */ functionVar);
}

demoScope();

const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name); // 'FunctionName' via scope chain
  }
  b();
}

a();

console.log(varX); // undefined (var hoisted, initialized to undefined)
// console.log(letX); // ReferenceError (TDZ)
// console.log(constX); // ReferenceError (TDZ)

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX); // 1
console.log(letX); // 2
console.log(constX); // 3

console.log(addDecl(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // 5
console.log(addArrow(2, 3)); // 5

const apiUrl = 'https://example.com';
console.log(apiUrl);

// Event handlers and this binding
const userCard = {
  name: 'Sarah',
  
  setupEvents() {
    console.log('Event setup for:', this.name);
    
    // Simulating an event handler scenario
    const simulateClick = () => {
      // This would be the event handler
      console.log('Clicked user:', this.name); // this = userCard object!
    };
    
    // Simulate a click event
    console.log('Simulating click event...');
    simulateClick();
  },
};

userCard.setupEvents();

// Array methods with this context
const calculator = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 2,

  processNumbers() {
    return this.numbers.map(num => num * this.multiplier);
  },
};

console.log('Processed numbers:', calculator.processNumbers()); // [2, 4, 6, 8, 10]

// Your Turn: Mini-Challenge
const myTimer = {
  name: 'My Timer',

  startCountdown() {
    console.log(`${this.name} starting countdown...`);

    // Using arrow function to preserve 'this'
    setTimeout(() => {
      console.log(`${this.name} countdown finished!`);
    }, 1000);
  },
};

myTimer.startCountdown();