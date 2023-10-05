import { useSelector } from "react-redux";
import Homepage from "./ui/home/Homepage";

import Navbar from "./ui/shared/navbar/Navbar";
import clsx from "clsx";

function App() {
  const displayMode = useSelector((state) => state.ui.displayMode);

  return (
    <div
      className={clsx("font-roboto", {
        ["dark"]: displayMode === "dark",
      })}
    >
      <div className="dark:text-white">
        <Navbar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
