import { IconPlayerPlay, IconRotate } from "@tabler/icons-react";

function Footer({ resetGame, currentPlayer, setIsModalOpen }) {
  return (
    <div className="dock">
      <button onClick={() => setIsModalOpen(true)} disabled={currentPlayer}>
        <IconPlayerPlay stroke={2} />
        <span className="dock-label">Start Game</span>
      </button>

      <button onClick={resetGame} disabled={!currentPlayer}>
        <IconRotate stroke={2} />
        <span className="dock-label">Reset Game</span>
      </button>
    </div>
  );
}

export default Footer;
