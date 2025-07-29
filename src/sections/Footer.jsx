import { mySocials } from "../constants";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space 
      flex-col sm:flex-row
    ">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </motion.a>
        ))}
      </div>
      <p>© 2025 Damilare. All rights reserved.</p>
    </section>
  );
};

export default Footer;
