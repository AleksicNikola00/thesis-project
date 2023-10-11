import clsx from "clsx";
import "./NavbarItem.css";

/**
 * Represents a navigation bar item.
 * @param {Object} props - The properties for the NavbarItem.
 * @param {string} props.id - The unique identifier for the item.
 * @param {React.ReactNode} props.children - The content to be rendered within the item.
 * @param {string} props.className - The CSS class name for styling the item.
 * @param {string} props.tooltip - An optional tooltip to display.
 * @param {boolean} props.active - Indicates whether the route for the item is active.
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
