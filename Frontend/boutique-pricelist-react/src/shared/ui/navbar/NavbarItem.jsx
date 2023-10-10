import clsx from "clsx";
import "./NavbarItem.css";

/**
 * @param {object} props
 * @param {string} props.id
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {string} props.tooltip Optional tooltip
 * @param {boolean} props.active Wheter route for given item is active
 */
const NavbarItem = ({ id, children, className, tooltip, active }) => {
  return (
    <li
      id={id}
      className={clsx("flex justify-center   relative navbar-item", {
        [className]: !!className,
      })}
    >
      <div
        className={clsx(
          "flex  transition-opacity  cursor-pointer  items-center gap-2  hover:opacity-80 active:opacity-60",
          {
            ["opacity-60"]: active,
          }
        )}
      >
        {children}
      </div>

      {tooltip && (
        <span className="tooltip text-xs  whitespace-nowrap dark:bg-stone-600 bg-zinc-400 p-1 rounded  absolute opacity-100  -bottom-8">
          {tooltip}
        </span>
      )}
    </li>
  );
};

export default NavbarItem;
