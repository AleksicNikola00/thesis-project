import CheckroomIcon from "@mui/icons-material/Checkroom";
import NavbarItem from "./NavbarItem";
import OppositeVariantButton from "../components/controls/OppositeVariantButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import SearchBar from "../components/inputs/SearchBar";

const Navbar = () => {
  const dispatch = useDispatch();

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

  const darkModeVariant = useMemo(
    () => ({
      icon: <DarkModeIcon />,
      action: onDarkModeHandler,
    }),
    [onDarkModeHandler]
  );

  return (
    <nav className="fixed z-10 bg-zinc-300 dark:bg-neutral-900 top-0 left-0 right-0 h-14 px-8">
      <ul className="flex justify-between items-center h-full">
        <NavbarItem id="homepage" tooltip="Homepage">
          <span className="text-lg">Boutique pricelist</span>
          <CheckroomIcon />
        </NavbarItem>

        <div className="flex justify-content gap-5  items-center">
          <SearchBar />
          <NavbarItem id="display-mode" tooltip="Change mode">
            <OppositeVariantButton
              firstVariant={lightModeVariant}
              secondVariant={darkModeVariant}
            />
          </NavbarItem>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;