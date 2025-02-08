import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { X } from "lucide-react";
// import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router";
import Container from "./Container";

const Navbar = () => {
  //   const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
    </>
  );

  const mobileLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          onClick={() => setIsOpen(false)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          onClick={() => setIsOpen(false)}
          to="/about"
        >
          About
        </NavLink>
      </li>

      <li>
        <a
          href="https://drive.google.com/file/d/1PFXraJNWyzpTFun3tzu1ZarCrqr9hY8j/view?usp=sharing"
          target="_blank"
          className="btn btn-outline rounded-none text-[#d2ab69] hover:bg-[#d2ab69]"
        >
          Download Resume <FaDownload />
        </a>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#140505] bg-gradient-to-b from-zinc-950 to-zinc-900/0 ">
      <Container>
        <div className="navbar flex items-center">
          {/* Logo and Navigation for Larger Devices */}
          <div className="navbar-start lg:flex">
            <a href="/" className="text-xl">
              <img className="w-18" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Horizontal Links */}
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Download Resume Button */}
          <div className="navbar-end flex flex-row">
            <div className="hidden md:inline-block">
              {/* <div className="">
                <ul className="menu menu-horizontal px-1">{links}</ul>
              </div> */}

              <a
                href="https://drive.google.com/file/d/1PFXraJNWyzpTFun3tzu1ZarCrqr9hY8j/view?usp=sharing"
                target="_blank"
                className="btn btn-outline rounded-none text-[#d2ab69] hover:bg-[#aa8e5e]"
              >
                Download Resume <FaDownload />
              </a>
            </div>

            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} color="#d2ab69" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }} // Start off-screen (right side)
              animate={{ y: 0 }} // Slide into view (left)
              exit={{ y: "-100%" }} // Slide out to the right when closing
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-zinc-900 bg-opacity-50 backdrop-blur-lg flex flex-col items-center justify-center text-white text-2xl z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white hover:text-[#d2ab69]"
              >
                <X size={40} />
              </button>

              <ul className="space-y-6 text-center">{mobileLinks}</ul>
            </motion.div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
