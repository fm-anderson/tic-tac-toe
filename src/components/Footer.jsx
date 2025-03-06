import {
  IconPlayerPlay,
  IconRotate,
  IconBrandGithub,
} from "@tabler/icons-react";

function Footer({ resetGame, currentPlayer, setIsModalOpen, winner }) {
  return (
    <div className="dock">
      <button onClick={() => setIsModalOpen(true)} disabled={currentPlayer}>
        <IconPlayerPlay stroke={2} />
        <span className="dock-label">Start Game</span>
      </button>

      <button onClick={resetGame} disabled={!currentPlayer}>
        <IconRotate stroke={2} />
        <span className="dock-label">
          {winner ? "Play Again" : "Reset Game"}
        </span>
      </button>
      <a
        href="https://github.com/fm-anderson"
        className="dock-label"
        target="_blank"
      >
        <IconBrandGithub stroke={2} />
        <span className="dock-label">fm-anderson</span>
      </a>
    </div>
  );
}

export default Footer;
