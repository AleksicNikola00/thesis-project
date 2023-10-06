import CheckroomIcon from "@mui/icons-material/Checkroom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="fixed bg-zinc-200 dark:bg-neutral-900 top-0 left-0 right-0 h-14 flex justify-between items-center px-10">
      <NavbarItem tooltip="Homepage">
        <span className="text-lg">Boutique pricelist</span>
        <CheckroomIcon />
      </NavbarItem>

      <NavbarItem tooltip="Change mode">
        <Brightness4Icon />
      </NavbarItem>
    </nav>
  );
};

export default Navbar;
