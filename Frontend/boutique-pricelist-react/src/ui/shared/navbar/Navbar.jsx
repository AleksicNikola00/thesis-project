import CheckroomIcon from "@mui/icons-material/Checkroom";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Navbar = () => {
  return (
    <nav className="fixed bg-neutral-900 top-0 left-0 right-0 h-14 flex justify-between items-center px-5">
      <div className="flex hover:text-red-500 items-center gap-2">
        <span className="text-lg">Boutique pricelist</span>
        <CheckroomIcon />
      </div>
      <div className="">
        <Brightness4Icon />
      </div>
    </nav>
  );
};

export default Navbar;
