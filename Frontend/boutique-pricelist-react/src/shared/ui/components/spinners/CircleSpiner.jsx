import clsx from "clsx";
import "./CircleSpinner.css";
/**
 *
 * @param {object} props
 * @param {"lg" | "md" | "sm"} [props.size='md'] Size of the Circle Spiner
 */
const CircleSpinner = ({ size = "md" }) => {
  const thickness = 4;
  return (
    <div
      className={clsx(
        "lds-ring h-full w-full flex justify-center items-center"
      )}
    >
      {Array.from({ length: thickness }, (_, index) => (
        <div
          key={index}
          className={clsx("lds-ring", {
            ["w-14 h-14"]: size === "sm",
            ["w-16 h-16"]: size === "md",
            ["w-20 h-20"]: size === "lg",
          })}
        ></div>
      ))}
    </div>
  );
};

export default CircleSpinner;
