
//DOM elements
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const resultEl = document.getElementById('result');
const choiceButtons = document.querySelectorAll('.choice');
const resetBtn = document.getElementById('reset');
const btnRockEl = document.querySelector('.btnrock');
const btnPaperEl = document.querySelector('.btnpaper');
const btnScissorsEl = document.querySelector('.btnscissors');

//global states
let userScore = 0;
let computerScore = 0;

//Step 1: Get my choice
btnRockEl.addEventListener('click', function () {
    const userChoice = btnRockEl.textContent
    console.log(userChoice)
})
//Step 2: Get computer choice
const computerChoice = Math.trunc(Math.random() * 3) + 1
    console.log(computerChoice)

//Step 3: Compare them

//Step 4: Decide winner

//Step 5: Show winner



