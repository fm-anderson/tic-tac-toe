export const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (moves) => {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (moves.includes(a) && moves.includes(b) && moves.includes(c)) {
      return true;
    }
  }
  return false;
};

export const updateWinner = (currentPlayer, opponentMoves, setWinner) => {
  const playerToCheck = currentPlayer === "playerX" ? "playerO" : "playerX";
  const movesToCheck =
    currentPlayer === "playerX" ? opponentMoves : opponentMoves;
  if (movesToCheck.length >= 3) {
    if (checkWinner(movesToCheck)) {
      setWinner(playerToCheck);
      return true;
    }
  }
  return false;
};

export const updatePlayerMoves = (i, playerMoves, setPlayerMoves, newBoard) => {
  const newPlayerMoves = [...playerMoves, i];
  setPlayerMoves(newPlayerMoves);

  if (newPlayerMoves.length === 4) {
    const removedIndex = newPlayerMoves[0];
    newBoard[removedIndex] = null;
    setPlayerMoves(newPlayerMoves.slice(1));
  }
};
