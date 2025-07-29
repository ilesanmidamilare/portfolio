import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex ">  
        {/* //c-space */}
        <motion.h1
          className="text-4xl font-extralight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m Damilare
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-bold text-white font-mtn mb-10 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Frontend Developer <span className="text-orange-500">.</span>
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            
            <span className="font-semibold text-white text-3xl ">I specialize in building </span> 
            <FlipWords
              words={words}
              className="font-bold text-white text-3xl "
            /><br/>
            <span className="font-semibold text-white text-3xl ">web and mobile applications.</span>
          </motion.div>
    
        </div>
        
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-2xl font-extralight mt-10"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          I&apos;m Damilare
        </motion.p>
        <div>
          <motion.p
            className="text-4xl font-black text-white font-mtn"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Frontend Developer <span className="text-orange-500">.</span>
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="mt-5"
          >
            <span className="font-semibold text-white text-1xl ">I specialize in building </span> 
            <FlipWords
              words={words}
              className="font-bold text-white text-1xl"
            /><br/>
            <span className="font-semibold text-white text-1xl ">web and mobile applications.</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
