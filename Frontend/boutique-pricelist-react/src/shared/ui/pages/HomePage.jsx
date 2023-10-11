import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const onShoesHandler = () => {
    navigate("/products?type=shoes");
  };

  const onClothesHandler = () => {
    navigate("/products?type=clothes");
  };

  return (
    <div className="flex h-full px-10 justify-center items-center gap-10  dark:bg-neutral-950 dark:text-white">
      <button
        onClick={onClothesHandler}
        className="w-1/2 h-5/6 bg-zinc-300 dark:bg-neutral-900"
      >
        <img
          src="/pngs/clothes.png"
          className="w-full h-full object-cover
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        />
      </button>
      <button
        onClick={onShoesHandler}
        className="w-1/2 h-5/6 bg-zinc-300 dark:bg-neutral-900
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
      >
        <img
          src="/pngs/air-force-1.png"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default HomePage;
