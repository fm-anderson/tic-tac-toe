import { useState, useEffect } from "react";
import Square from "./components/square";
import { winningCombos } from "./utils/consts";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerXMoves, setPlayerXMoves] = useState([]);
  const [playerOMoves, setPlayerOMoves] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("playerX");
  const [winner, setWinner] = useState(null);

  const checkWinner = (moves) => {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (moves.includes(a) && moves.includes(b) && moves.includes(c)) {
        console.log("We have a winner! ⮕");
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (winner) {
      console.log(`Player ${winner === "playerX" ? "X" : "O"} wins!`);
      // resetGame();
    }
  }, [winner]);

  const handleCellClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    if (currentPlayer === "playerX") {
      const newPlayerXMoves = [...playerXMoves, index];
      setPlayerXMoves(newPlayerXMoves);

      if (newPlayerXMoves.length === 4) {
        const removedIndex = newPlayerXMoves[0];
        newBoard[removedIndex] = null;
        setPlayerXMoves(newPlayerXMoves.slice(1));
      }
    } else {
      const newPlayerOMoves = [...playerOMoves, index];
      setPlayerOMoves(newPlayerOMoves);

      if (newPlayerOMoves.length === 4) {
        const removedIndex = newPlayerOMoves[0];
        newBoard[removedIndex] = null;
        setPlayerOMoves(newPlayerOMoves.slice(1));
      }
    }

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "playerX" ? "playerO" : "playerX");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayerXMoves([]);
    setPlayerOMoves([]);
    setCurrentPlayer("playerX");
    setWinner(null);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid grid-cols-3 gap-3">
        {board.map((item, index) => {
          return (
            <div key={index} onClick={() => handleCellClick(index)}>
              <Square value={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
