import { useState, useEffect } from "react";
import { updatePlayerMoves, updateWinner } from "./utils/helper";
import Square from "./components/Square";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SelectPlayer from "./components/SelectPlayer";
import Score from "./components/Score";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerXMoves, setPlayerXMoves] = useState([]);
  const [playerOMoves, setPlayerOMoves] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentPlayer === "playerO") {
      updateWinner(currentPlayer, playerXMoves, setWinner);
    } else if (currentPlayer === "playerX") {
      updateWinner(currentPlayer, playerOMoves, setWinner);
    }
  }, [playerXMoves, playerOMoves, currentPlayer, winner, setWinner]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayerXMoves([]);
    setPlayerOMoves([]);
    setWinner(null);
    setCurrentPlayer("playerX");
  };

  const handleCellClick = (index) => {
    if (board[index] || winner || !currentPlayer) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    if (currentPlayer === "playerX") {
      updatePlayerMoves(index, playerXMoves, setPlayerXMoves, newBoard);
    } else {
      updatePlayerMoves(index, playerOMoves, setPlayerOMoves, newBoard);
    }

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "playerX" ? "playerO" : "playerX");
  };

  return (
    <div className="flex h-screen flex-col items-center">
      <Navbar />
      <div className="my-auto p-3">
        <div className="grid grid-cols-2">
          <Score currentPlayer={currentPlayer} />
        </div>
        <div className="mt-10 grid grid-cols-3 gap-3">
          {board.map((item, index) => (
            <div key={index} onClick={() => handleCellClick(index)}>
              <Square value={item} />
            </div>
          ))}
        </div>
        <SelectPlayer
          setCurrentPlayer={setCurrentPlayer}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
      </div>

      <Footer
        resetGame={resetGame}
        currentPlayer={currentPlayer}
        setIsModalOpen={setIsModalOpen}
        winner={winner}
      />
    </div>
  );
}

export default App;
