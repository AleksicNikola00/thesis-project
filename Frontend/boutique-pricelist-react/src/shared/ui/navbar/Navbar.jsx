import CheckroomIcon from "@mui/icons-material/Checkroom";
import NavbarItem from "./NavbarItem";
import OppositeVariantButton from "../components/controls/OppositeVariantButton";

import SearchBar from "../components/inputs/SearchBar";
import useButtonVariant from "./useButtonVariant";
import TooltipLabel from "../components/labels/TooltipLabel";

const Navbar = () => {
  const { lightModeVariant, darkModeVariant } = useButtonVariant();

  return (
    <nav className="fixed z-10 bg-zinc-300 dark:bg-neutral-900 top-0 left-0 right-0 h-14 px-8">
      <ul className="flex justify-between items-center h-full">
        <NavbarItem id="homepage" tooltip="Homepage">
          <span className="text-lg">Boutique pricelist</span>
          <CheckroomIcon />
        </NavbarItem>

        <TooltipLabel label="Pera" tooltip="Perica" />
        <TooltipLabel
          label="Perasadasdadad"
          labelLimit={5}
          tooltip="Perasadasdadad"
          tooltipPosition="center"
        />

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
