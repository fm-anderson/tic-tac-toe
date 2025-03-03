import { IconX, IconCircle } from "@tabler/icons-react";

function SelectPlayer({ setCurrentPlayer, setIsModalOpen, isModalOpen }) {
  const setPlayerAndStartGame = (player) => {
    setCurrentPlayer(player);
    setIsModalOpen(false);
  };

  return (
    <>
      <input
        type="checkbox"
        id="modal_select_player"
        className="modal-toggle"
        checked={isModalOpen}
        readOnly
      />
      <div className="modal modal-bottom sm:modal-middle" role="dialog">
        <div className="modal-box">
          <h3 className="mb-3 text-lg font-bold">Choose your symbol:</h3>
          <span className="flex gap-2">
            <button
              className="btn btn-lg btn-square text-primary"
              onClick={() => setPlayerAndStartGame("playerX")}
            >
              <IconX stroke={3} />
            </button>
            <button
              className="btn btn-lg btn-square text-secondary"
              onClick={() => setPlayerAndStartGame("playerO")}
            >
              <IconCircle stroke={3} />
            </button>
          </span>
        </div>
        <label
          className="modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        ></label>
      </div>
    </>
  );
}

export default SelectPlayer;
