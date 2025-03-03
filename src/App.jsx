import { useState, useEffect } from "react";
import { updateWinner } from "./utils/helper";
import Square from "./components/square";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerXMoves, setPlayerXMoves] = useState([]);
  const [playerOMoves, setPlayerOMoves] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (currentPlayer === "playerO") {
      updateWinner(currentPlayer, playerXMoves, setWinner);
    } else if (currentPlayer === "playerX") {
      updateWinner(currentPlayer, playerOMoves, setWinner);
    }
  }, [playerXMoves, playerOMoves, currentPlayer, winner, setWinner]);

  const handleCellClick = (index) => {
    if (board[index] || winner || !currentPlayer) {
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

  const startGame = () => {
    setCurrentPlayer("playerX");
  };

  return (
    <div className="flex h-screen flex-col items-center">
      <Navbar />
      <div className="my-auto">
        {winner && (
          <div className="mb-4 text-2xl font-bold">
            {winner && `Player ${winner === "playerX" ? "X" : "O"} wins!`}
          </div>
        )}
        <div className="grid grid-cols-3 gap-3 p-3">
          {board.map((item, index) => (
            <div key={index} onClick={() => handleCellClick(index)}>
              <Square value={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer
        startGame={startGame}
        resetGame={resetGame}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}

export default App;
