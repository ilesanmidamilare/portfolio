import { useState } from "react";
import { motion } from "motion/react";


export const Logo = ({hovered, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 210.2 210.1"
    style={{
      enableBackground: "new 0 0 210.2 210.1",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <g id="Layer_1">
      <path
        fill={ hovered ? '#a3a3a3' : '#ffff'}
        className="st0"
        d="M52.3,52.1c-7.4,0-14.4,0-21.4,0c-6.4,0-12.7,0-19.1,0.3C5.2,52.8,0.6,56.9,0.4,63.6 c-0.4,13.8-0.1,27.6-0.1,41.7c14.5,0,28.6,0.2,42.7-0.1c6.1-0.2,10.3-5.6,10.3-12.3c0.1-11.7,0.1-23.3,0-35c0-3.5,0.7-5,4.6-4.9 c15.2,0.2,30.5,0.2,45.7,0.2c30.7,0,54.2,23.1,53.3,53.7c-0.7,27.4-22.8,49.8-51.8,49.9c-29.5,0.2-59.1,0.4-88.6-0.1 C3.1,156.5-0.2,163.6,0,173.2c0.3,12.1,0.1,24.2,0.1,36.9c3.7,0,6.7,0,9.8,0c33.3-0.1,66.5,0.4,99.8-0.4 c32.5-0.8,58.7-15.2,78.8-40.6c33-41.7,27.7-104.9-11.6-140.8C155.7,8.9,130.8-0.4,102.2,0C90.1,0.2,77.9-0.1,65.8,0.2 c-9.5,0.2-13.4,4.7-13.4,14.5c0,11.5,0.1,23,0.2,34.5C52.5,50,52.4,50.7,52.3,52.1z"
      />
    </g>
    <g id="Layer_2">
      <rect x={-1229} y={-691.2} width={39} height={128} />
      <rect x={-1031} y={-676.2} width={76} height={198} />
      <path d="M-766-731.5c-27.1-27.9-60.7-43.1-99.9-44.2c-20.7-0.6-28.3-0.4-49-0.1c-10.2,0.2-15.9,3.9-18,11.8v62.7h63.9v0.6 c40.8,2.6,71.3,34.4,70.1,75.8c-1.1,38.8-32.4,70.4-73.4,70.6c-41.8,0.2-26.6,0.5-68.4-0.1c-18.9-0.3-23.7,9.7-23.4,23.4 c0.4,17.1,0.1,34.2,0.1,52.2c5.5,0,10,0,14.6,0c46.4-0.1,35.8,0.2,82.2-0.5c70.7-0.9,132.4-56,141.9-126 C-718.6-653.7-731.9-696.3-766-731.5z" />
      <rect x={-1031} y={-771.2} width={73} height={65} />
    </g>
  </svg>
);


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
        <motion.a className="nav-link font-semibold text-xs flex-1 cursor-pointer " 
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
   const [hovered, setHovered] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-5xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors hover:text-neutral-400 font-mtn"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Logo hovered={hovered} className="w-6 h-6"/>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg" }
              className="w-6 h-6"
              alt="toggle"
              loading="lazy"
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
