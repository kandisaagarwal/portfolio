import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="h-10 rounded-lg items-center justify-center flex font-bold shadow-md text-xl"
      >
        <p className="blue-gradient_text">KANDISA AGARWAL</p>
      </NavLink>
{/* 
      <nav className="flex text-lg gap-7 font-medium">
        <HashLink smooth to="/#about" className="text-white hover:text-red-500">
          ABOUT
        </HashLink>
        <HashLink smooth to="/#projects-section" className="text-white hover:text-red-500">
          PROJECTS
        </HashLink>
        <HashLink smooth to="/#resume" className="text-white hover:text-red-500">
          RESUME
        </HashLink>
      </nav> */}
      
    </header>
  );
};

export default Navbar;
