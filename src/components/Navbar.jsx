import { IconInfinity } from "@tabler/icons-react";
import Theme from "./Theme";

function Navbar() {
  return (
    <div className="navbar bg-base-100 justify-between shadow-sm">
      <span className="flex items-center gap-1">
        <IconInfinity stroke={2} size={30} />
        <a className="text-xl font-semibold">Tic Tac Toe</a>
      </span>
      <Theme />
    </div>
  );
}

export default Navbar;
