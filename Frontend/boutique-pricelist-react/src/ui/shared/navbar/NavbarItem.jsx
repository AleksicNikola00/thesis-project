import clsx from "clsx";
import "./NavbarItem.css";

const NavbarItem = ({ children, className, tooltip, active }) => {
  return (
    <button
      className={clsx("flex justify-center relative navbar-item", {
        [`${className}`]: !!className,
      })}
    >
      <div
        className={clsx(
          "flex  transition-opacity  items-center gap-2  hover:opacity-80 active:opacity-60",
          {
            ["opacity-60"]: active,
          }
        )}
      >
        {children}
      </div>

      {tooltip && (
        <span className="tooltip text-sm whitespace-nowrap dark:bg-stone-600 bg-zinc-400 p-1 rounded  absolute opacity-100  -bottom-8">
          {tooltip}
        </span>
      )}
    </button>
  );
};

export default NavbarItem;
