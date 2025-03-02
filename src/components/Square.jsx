import iconRoundedX from "../assets/icon-x.svg";
import iconRoundedO from "../assets/icon-o.svg";
import iconLoader from "../assets/icon-loader.svg";

function Square() {
  return (
    <div className="bg-base-300 p-4">
      <img src={iconLoader} className="h-20 w-20 opacity-0" alt="" />
    </div>
  );
}

export default Square;
