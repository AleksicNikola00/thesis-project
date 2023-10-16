import clsx from "clsx";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children Children jsx element wrapped with scrollbar
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] Size of the scrollbar
 */
const Scrollbar = ({ children, size }) => {
  return (
    <div
      className={clsx(
        "h-full scrollbar scrollbar-track-rounded-lg  scrollbar-track-gray-500 scrollbar-thumb-rounded-lg scrollbar-thumb-gray-900 overflow-y-auto",
        {
          ["scrollbar-w-1"]: size === "sm",
          ["scrollbar-w-3"]: size === "md",
          ["scrollbar-w-5"]: size === "lg",
        }
      )}
    >
      {children}
    </div>
  );
};

export default Scrollbar;
