import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="flex  flex-col gap-5 justify-center items-center h-screen text-4xl">
      <div className="flex items-center">
        <img src="public/pngs/broken_thumb_png.png" />
        <span>Unfortunately this page isn&apos;t available</span>
      </div>

      <Link to="/" className="underline hover:opacity-70">
        Return to homepage{" "}
      </Link>
    </div>
  );
};

export default ErrorPage;
