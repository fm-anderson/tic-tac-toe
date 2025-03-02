import { IconX, IconCircle, IconLoaderQuarter } from "@tabler/icons-react";
import actions from "../utils/actions.json";

function Square({ value }) {
  const finalValue = value || "playerNull";
  const action = actions.find((a) => a.name === finalValue);

  const IconComponent = { IconX, IconCircle, IconLoaderQuarter }[action.icon];

  return (
    <div className="bg-base-200 p-4">
      <IconComponent stroke={2} size={75} className={action.style} />
    </div>
  );
}

export default Square;
