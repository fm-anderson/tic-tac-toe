import { IconX, IconCircle } from "@tabler/icons-react";

function Score({ currentPlayer }) {
  return (
    <>
      <div className="rounded-box border-base-content/5 bg-base-100 overflow-x-auto border shadow-md">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <IconX stroke={3} />
              </td>
              <td className="text-end text-xl font-semibold">0</td>
            </tr>
            <tr>
              <td>
                <IconCircle stroke={3} />
              </td>
              <td className="text-end text-xl font-semibold">0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-ghost bg-base-100 btn-lg pointer-events-none">
          {currentPlayer === "playerX" && (
            <IconX stroke={2} size={70} className="text-primary" />
          )}
          {currentPlayer === "playerO" && (
            <IconCircle stroke={2} size={70} className="text-secondary" />
          )}
        </button>
      </div>
    </>
  );
}

export default Score;
