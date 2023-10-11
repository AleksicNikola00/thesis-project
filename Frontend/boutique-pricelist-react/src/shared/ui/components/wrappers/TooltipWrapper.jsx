import clsx from "clsx";
import "./TooltipWrapper.css";

/**
 * @param {object} props
 * @param {string} [props.label]
 * @param {React.ReactNode} [props.children]
 * @param {string} props.tooltip
 * @param {number} props.labelLimit Limit for label legnth
 * @param {'center' | 'below'} [props.tooltipPosition='below']
 */
const TooltipWrapper = ({
  label,
  children,
  tooltip,
  labelLimit,
  tooltipPosition = "below",
}) => {
  const shortenedLabel = labelLimit
    ? label.substring(0, labelLimit - 1) + "..."
    : label;

  return (
    <div className="label-container flex relative items-center justify-center">
      {shortenedLabel && <span>{shortenedLabel}</span>}
      {children}
      <span
        className={clsx(
          "tooltip absolute whitespace-nowrap dark:bg-stone-600 bg-zinc-400 p-1 rounded",
          {
            ["-bottom-8 text-xs"]: tooltipPosition === "below",
            ["text-sm  p-2"]: tooltipPosition === "center",
          }
        )}
      >
        {tooltip}
      </span>
    </div>
  );
};

export default TooltipWrapper;
