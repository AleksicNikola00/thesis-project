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
        "h-full scrollbar scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg overflow-y-auto",
        "scrollbar-track-zinc-200 scrollbar-thumb-zinc-400",
        "dark:scrollbar-track-gray-500  dark:scrollbar-thumb-neutral-900",
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
