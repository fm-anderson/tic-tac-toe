import { useState, useEffect } from "react";
import { updatePlayerMoves, updateWinner } from "./utils/helper";
import Square from "./components/square";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SelectPlayer from "./components/SelectPlayer";

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
    setCurrentPlayer("playerX");
    setWinner(null);
    // TODO: OPEN MODAL AND CHOOSE PLAYER INSTEAD OF SELECTING "playerX"
  };

  // const startGame = () => {
  // TODO:
  //   setCurrentPlayer(player);
  //   setIsModalOpen(false);
  // };

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
      />
    </div>
  );
}

export default App;
