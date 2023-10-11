import clsx from "clsx";
import TooltipWrapper from "../components/wrappers/TooltipWrapper";

/**
 * Represents a navigation bar item.
 * @param {Object} props - The properties for the NavbarItem.
 * @param {string} props.id - The unique identifier for the item.
 * @param {React.ReactNode} props.children - The content to be rendered within the item.
 * @param {string} props.className - The CSS class name for styling the item.
 * @param {boolean} props.active - Indicates whether the route for the item is active.
 * @param {string} props.tooltip - The tooltip shown when hovering item.
 */
const NavbarItem = ({ id, children, className, active, tooltip }) => {
  return (
    <li
      id={id}
      className={clsx("flex justify-center relative navbar-item", {
        [className]: !!className,
      })}
    >
      <TooltipWrapper tooltip={tooltip}>
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
      </TooltipWrapper>
    </li>
  );
};

export default NavbarItem;
