import { useState } from "react";

/**
 * @param {object} props
 * @param {{icon: React.JSX.Element, action: () => void }} props.firstVariant
 * @param {{icon: React.JSX.Element, action: () => void }} props.secondVariant
 * @param {"first" | "second"} props.initialVariant sets initial active variant
 */
const OppositeVariantButton = ({
  firstVariant,
  secondVariant,
  initialVariant = "first",
}) => {
  const [variant, setVariant] = useState(initialVariant);
  const { icon: firstIcon, action: firstAction } = firstVariant;
  const { icon: secondIcon, action: secondAction } = secondVariant;

  const firstActionHandler = () => {
    firstAction();
    setVariant("second");
  };

  const secondActionHandler = () => {
    secondAction();
    setVariant("first");
  };

  const isFirstVariant = variant === "first";

  return (
    <button onClick={isFirstVariant ? firstActionHandler : secondActionHandler}>
      {isFirstVariant ? firstIcon : secondIcon}
    </button>
  );
};

export default OppositeVariantButton;
