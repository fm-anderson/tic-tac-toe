import { useEffect, useState } from "react";
import { IconX, IconCircle, IconLoaderQuarter } from "@tabler/icons-react";
import actions from "../utils/actions.json";

function Square({ value }) {
  const [showIcon, setShowIcon] = useState(false);
  const finalValue = value || "playerNull";
  const action = actions.find((a) => a.name === finalValue);

  const IconComponent = { IconX, IconCircle, IconLoaderQuarter }[action.icon];

  useEffect(() => {
    if (value) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [value]);

  return (
    <div className="bg-base-200 p-4">
      <IconComponent
        stroke={2}
        size={75}
        className={`${action.style} transition-transform duration-300`}
        data-show={showIcon ? "true" : "false"}
      />
    </div>
  );
}

export default Square;
