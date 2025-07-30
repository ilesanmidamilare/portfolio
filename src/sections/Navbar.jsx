import { useState } from "react";
import { motion } from "motion/react";


function Navigation() {
  return (
    <ul className="nav-ul">
      
      <li className="nav-li">
        <a className="nav-link font-semibold" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link font-semibold" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link font-semibold" href="#contact">
          Contact
        </a>
      </li>

      <li className="nav-li p-2 hover:bg-radial from-lavender to-royal rounded-md">
        <motion.a className="nav-link font-semibold text-white text-xs flex-1 cursor-pointer " 
            href="../docs/damilare_Ilesanmi_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
          Resume
        </motion.a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-5xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors  hover:text-neutral-400 font-mtn"
          >
             
             Dami
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
