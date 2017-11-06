var p = document.querySelector("p");
var p1 = document.querySelector("#p1-score");
var p2 = document.querySelector("#p2-score");
var input = document.querySelector("input");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var reset = document.querySelector("#reset");
var winningScore = parseInt(input.value);
var player1Score = 0;
var player2Score = 0;

var finished = function () {
  return (player1Score === winningScore || player2Score === winningScore);
}

var updateWinningScore = function(val) {
  winningScore = val;
  p.textContent = `Playing to ${winningScore}`;
}

var updateDashboard = function() {
  if (player1Score == winningScore) {
    p1.classList.add("green");
  } else if (player2Score == winningScore) {
    p2.classList.add("green");
  }
  p1.textContent = player1Score;
  p2.textContent = player2Score;
}

var resetGame = function() {
  player1Score = 0;
  player2Score = 0;
  p1.classList.remove("green");
  p2.classList.remove("green");
  updateDashboard();
}

input.addEventListener("input", function() {
  var val = parseInt(this.value);
  if (val > 0) {
    updateWinningScore(val);
    resetGame();
  }
});

player1.addEventListener("click", function() {
  if (!finished()) {
    player1Score++;
    updateDashboard();
  }
});

player2.addEventListener("click", function() {
  if (!finished()) {
    player2Score++;
    updateDashboard();
  }
});

reset.addEventListener("click", resetGame);
