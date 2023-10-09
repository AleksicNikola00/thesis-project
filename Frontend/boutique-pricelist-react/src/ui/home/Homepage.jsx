import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLightModeHandler = () => {
    dispatch(uiActions.setDisplayMode("light"));
  };
  const onDarkModeHandler = () => {
    dispatch(uiActions.setDisplayMode("dark"));
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center dark:bg-neutral-950 dark:text-white">
      <h1 className="text-7xl font-bold ">Welcome user!</h1>
      <div className="flex flex-col gap-4 ms-5">
        <button
          onClick={onDarkModeHandler}
          className="bg-slate-500 p-3 rounded-lg"
        >
          Set dark mode
        </button>
        <button
          onClick={onLightModeHandler}
          className="bg-yellow-500 p-3 rounded-lg"
        >
          Set light mode
        </button>
        <button
          onClick={() => navigate("/products")}
          className="bg-yellow-500 p-3 rounded-lg"
        >
          Product page
        </button>
      </div>
    </div>
  );
};

export default HomePage;
