import clsx from "clsx";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const RootLayout = () => {
  const displayMode = useSelector((state) => state.ui.displayMode);

  return (
    <div
      className={clsx("font-roboto", {
        ["dark"]: displayMode === "dark",
      })}
    >
      <div className="dark:text-white">
        <Navbar />
        <main className="pt-14 h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
