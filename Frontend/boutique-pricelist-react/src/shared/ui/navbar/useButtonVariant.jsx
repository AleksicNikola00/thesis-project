import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const useButtonVariant = () => {
  const dispatch = useDispatch();
  const displayMode = useSelector((state) => state.ui.displayMode);

  const onLightModeHandler = useCallback(() => {
    dispatch(uiActions.setDisplayMode("light"));
  }, [dispatch]);

  const onDarkModeHandler = useCallback(() => {
    dispatch(uiActions.setDisplayMode("dark"));
  }, [dispatch]);

  const lightModeVariant = useMemo(
    () => ({
      icon: <LightModeIcon />,
      action: onLightModeHandler,
    }),
    [onLightModeHandler]
  );

  const initialVariant = useMemo(
    () => (displayMode === "dark" ? "first" : "second"),
    [displayMode]
  );

  const darkModeVariant = useMemo(
    () => ({
      icon: <DarkModeIcon />,
      action: onDarkModeHandler,
    }),
    [onDarkModeHandler]
  );

  return { lightModeVariant, darkModeVariant, initialVariant };
};

export default useButtonVariant;
