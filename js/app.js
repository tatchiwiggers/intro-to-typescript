"use strict";
function startGame() {
    // starting new game
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
}
;
function logPlayer(name) {
    if (name === void 0) { name = 'Player'; }
    console.log("New game starting for " + name + ".");
}
;
function getInputValue(elementID) {
    // document.getElementById(elementID) as HTMLInputElement
    // <HTMLInputElement>document.getElementById(elementID)
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
;
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'Player'; }
    var scoreElement = document.getElementById('postedscores');
    scoreElement.innerText = playerName + ": " + score;
}
;
document.getElementById('startGame').addEventListener('click', startGame);
