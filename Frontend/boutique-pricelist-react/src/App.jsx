import { useEffect, useState } from "react";
import localStorageUtil from "./utils/local-storage/local-storage.util";

const displayMode = localStorageUtil.getMode();

function App() {
  const [currentMode, setCurrentMode] = useState(displayMode);

  const onDarkModeHandler = () => {
    localStorageUtil.setMode("dark");
    setCurrentMode("dark");
  };

  const onLightModeHandler = () => {
    localStorageUtil.setMode("light");
    setCurrentMode("light");
  };
  return (
    <div className={currentMode ?? ""}>
      <div className="flex h-screen w-screen justify-center items-center dark:bg-black dark:text-white">
        <h1 className="text-7xl font-bold ">Welcome user!</h1>
        <div className="flex flex-col gap-4 ms-5">
          <button
            onClick={onDarkModeHandler}
            className="bg-slate-400 p-3 rounded-lg"
          >
            Set dark mode
          </button>
          <button
            onClick={onLightModeHandler}
            className="bg-yellow-400 p-3 rounded-lg"
          >
            Set light mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
