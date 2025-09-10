// Game Development Hour 1 - Game Foundation & DOM Basics
'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

// DOM Element Selection - The Foundation
console.log('=== DOM ELEMENT SELECTION ===');

// Select elements by class name
const messageEl = document.querySelector('.message');
console.log(messageEl);

// Select elements by class name
const scoreEl = document.querySelector('.score');
console.log(scoreEl);

// Select input elements
const guessEl = document.querySelector('.guess');
console.log(guessEl);

// 🎮 Section 2: Game State Management
console.log('=== GAME STATE MANAGEMENT ===');

// Game state variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Display initial state
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
document.querySelector('.number').textContent = '?';
document.querySelector('.number').style.width = '15rem';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.message').textContent = 'Start guessing...';

console.log('Game state initialized!');
console.log('Secret:', secretNumber, 'Score:', score, 'Highscore:', highscore);

// 🎮 Section 3: Basic Game Logic Implementation
console.log('=== BASIC GAME LOGIC ===');

// Add click event to the Check button
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');

  // Get the player's guess and convert to number
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  // Basic game logic - check if guess is correct
  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    // Update highscore if current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }

  // Check if game over
  if (score <= 0) {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    document.querySelector('.check').disabled = true;
    document.querySelector('body').style.backgroundColor = '#921a1aff';
  }
});

// 🎮 Add "Again!" button functionality
document.querySelector('.again').addEventListener('click', function () {
  console.log('Again button clicked!');
  
  // Generate NEW secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New secret number:', secretNumber);
  
  // Reset score
  score = 20;
  document.querySelector('.score').textContent = score;
  
  // Reset message and input
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  
  // Reset visual elements
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  
  // Re-enable check button if it was disabled
  document.querySelector('.check').disabled = false;
  
  console.log('Game reset! New secret number generated.');
});

console.log('Game is ready! Try entering numbers and clicking the Check button.');

// Game Foundation Verification

console.log('🎮 Game Foundation Complete!');
console.log('✅ DOM element selection working');
console.log('✅ Game state variables initialized');
console.log('✅ Event listeners responding');
console.log('✅ Basic game logic implemented');
console.log('Ready for advanced features in Hour 2!');

// Test your game one more time
console.log('Secret number for testing:', secretNumber);
console.log('Try to guess it!');

console.log('🎮 Enhanced Game Complete!');
console.log('✅ Score tracking working');
console.log('✅ Win/lose conditions implemented');
console.log('✅ Game restart functionality working');
console.log('✅ Complete game experience ready');
console.log('Ready for visual polish in Hour 3!');

console.log('Test: Try to win, try to lose, then restart!');