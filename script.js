const weapons = document.querySelectorAll('.weapon');
const results = document.querySelector('.results');
const myArray = ['Rock', 'Paper', 'Scissors'];
let machineScore = 0;
let humanScore = 0;
let humanWeapon = '';
let machineWeapon = '';
let matchCount = 0;

function getMatch() {
    for (let wpn of weapons) {
        wpn.addEventListener('click', (e) => {
            matchCount++;
            if (matchCount <= 5) {
                humanWeapon = e.target.alt;
                machineWeapon = setMachineWeapon();
                showResult(setRoundResult(machineWeapon, humanWeapon));
            }
            if (matchCount === 5) showResult(`Final Result  :${FinalResultCalc(humanScore, machineScore)}`)
        })
    }
}

function setMachineWeapon() {
    return myArray[~~(Math.random() * myArray.length)];
}

function setRoundResult(weapon1, weapon2) {
    if (weapon1 === 'Paper' && weapon2 === 'Rock') {
        machineScore++; return ' Machine wins with Paper against Rock'
    }
    else if (weapon1 === 'Rock' && weapon2 === 'Scissors') {
        machineScore++; return 'Machine wins with Rock against Scissors'
    }
    else if (weapon1 === 'Scissors' && weapon2 === 'Paper') {
        machineScore++; return 'Machine wins with Scissors against Paper'
    }
    else if (weapon2 === 'Rock' && weapon1 === 'Scissors') {
        humanScore++; return 'Human wins with Rock against Scissors'
    }
    else if (weapon2 === 'Scissors' && weapon1 === 'Paper') {
        humanScore++; return 'Human wins with Scissors against Paper'
    }
    else if (weapon2 === 'Paper' && weapon1 === 'Rock') {
        humanScore++; return 'Human wins with Paper against Rock'
    }
    else if (weapon1 === weapon2) return 'Tie';
}

function showResult(Text) {
    const result = document.createElement('p');
    results.appendChild(result);
    result.innerText = (Text);

}

function FinalResultCalc(humanScore, machineScore) {
    if (humanScore > machineScore) return " Human wins the best of 5! Refresh the page to start again!";
    else if (humanScore < machineScore) return ("Machine wins the best of 5!  Refresh the page to start again!");
    else return " We have a Tie!  Refresh the page and try again!";
}


getMatch();

