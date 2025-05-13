const cells = document.querySelectorAll(".cell");
let turn = "x";

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "") {
      cell.textContent = turn;
      turn = turn === "x" ? "o" : "x"; // we are updating the turn with every another click
      checkWinner(); //on everyy click we check the winner

      //next turn text
      document.querySelector(
        ".display-turn"
      ).textContent = `${turn} should make a move`;
    }
  });
});

//win pattern is the ....button index pattern.
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    const val1 = cells[a].textContent;
    const val2 = cells[b].textContent;
    const val3 = cells[c].textContent;

    if (val1 != "" && val1 == val2 && val2 == val3) {
      alert(`${val1} has won the game !!!`);
      disableBoard();
      return;
    }
  }
}

function disableBoard() {
  cells.forEach((cell) => (cell.disabled = true));
}

document.getElementById("restart").addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.disabled = false;
  });
  turn = "x";
});
