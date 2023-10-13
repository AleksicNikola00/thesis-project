import CheckroomIcon from "@mui/icons-material/Checkroom";
import NavbarItem from "./NavbarItem";
import OppositeVariantButton from "../components/controls/OppositeVariantButton";

import SearchBar from "../components/inputs/SearchBar";
import useButtonVariant from "./useButtonVariant";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { lightModeVariant, darkModeVariant, initialVariant } =
    useButtonVariant();

  const navigate = useNavigate();

  const onHomepageClickHandler = () => {
    navigate("/");
  };

  return (
    <nav className="fixed z-10 bg-zinc-300 dark:bg-neutral-900 top-0 left-0 right-0 h-14 px-8">
      <ul className="flex justify-between items-center h-full">
        <NavbarItem
          onClick={onHomepageClickHandler}
          id="homepage"
          tooltip="Homepage"
        >
          <h1 className="text-lg">
            <strong>Boutique pricelist</strong>
          </h1>
          <CheckroomIcon />
        </NavbarItem>

        <div className="flex justify-content gap-5  items-center">
          <SearchBar />
          <NavbarItem id="display-mode" tooltip="Change mode">
            <OppositeVariantButton
              firstVariant={lightModeVariant}
              secondVariant={darkModeVariant}
              initialVariant={initialVariant}
            />
          </NavbarItem>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
