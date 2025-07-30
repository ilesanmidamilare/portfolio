import { motion, } from "motion/react";

const Projects = () => {

  return (
    <section className="relative c-space  mt-20" id="projects">
      <h2 className="text-heading mb-12 font-mtn">My Projects</h2>

       
        <motion.div className="relative "
          whileHover={{ scale:  1.01}}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="w-full md:w-6/10 h-[350px] bg-blue-500 rounded-3xl relative overflow-hidden"
          >
            <img
              src="assets/projects/accessories.jpg"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              alt="Featured Project"
            />
          </div>

          {/* //start */}
          <div className="absolute inset-0 m-auto h-full w-full rounded-xl flex bg-gradient-to-b from-indigo/10 to-indigo/100 md:bg-none
            ">
              {/* mobile */}
              <div className="self-end md:hidden p-5">
                <div className="w-full">
                  <h2 className="md:text-base  text-end hidden text-smtext-pretty">Featured Project</h2>
                  <h2 className="subtext">Project Name</h2>
                </div>

                <div className="mt-4 mb-4">
                  <div className=" text-justify text-sm md:text-base text-pretty">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <span className="hidden">Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.</span>
                  </div>
                  <div className="flex flex-row gap-5 text-sand text-sm md:text-base text-pretty">
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Node</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <motion.a
                    target="_blank"
                    href=""
                    rel="noopener noreferrer"
                    className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 py-1 rounded-md text-sm md:text-base text-pretty"
                    
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 1.05 }}
                  
                  >
                    Github
                  </motion.a>
                  <motion.a 
                    className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-md py-1 text-sm md:text-base text-pretty"
                    target="_blank"
                    href=""
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 1.05 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
                
              </div>

              {/* larger screen */}
              <div className="hidden w-1/2 h-full  ml-auto justify-between md:flex flex-col p-">
                  <div className="pt-2">
                    <h2 className="text-end textheading">Featured Project</h2>
                    <h2 className="text-end subtext">Project Name</h2>
                  </div>

                  <div>
                    <div className="bg-gradient-to-b from-storm to-indigo w-full rounded-tr-4xl rounded-bl-4xl py-5 px-7 text-justify ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.
                    </div>

                    <div className="flex gap-7 justify-end text-sand mt-1">
                      <span>Javascript</span>
                      <span>React</span>
                      <span>Node</span>
                    </div>
                  </div>

                  <div className="lg:pl-50 md:pl-25 flex flex-row gap-3 pb-2">
                    <motion.a
                      target="_blank"
                      href=""
                      rel="noopener noreferrer"
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-md py-1 text-sm md:text-base text-pretty flex-1
                      "
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 1.05 }}
                    
                    >
                      Github
                    </motion.a>
                    <motion.a 
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-md py-1 text-sm md:text-base text-pretty flex-1
                      "
                      target="_blank"
                      href=""
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 1.05 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
              </div>
          </div>
        </motion.div> 

        <motion.div className="relative mt-10 mb-10"
          whileHover={{ scale:  1.01}}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="w-full md:w-6/10 h-[350px] bg-blue-500 rounded-3xl relative overflow-hidden"
          >
            <img
              src="assets/projects/game-engine.jpg"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              alt="Featured Project"
            />
          </div>

          {/* //start */}
          <div className="absolute inset-0 m-auto h-full w-full rounded-xl flex bg-gradient-to-b from-indigo/10 to-indigo/100 md:bg-none
            ">
              {/* mobile */}
              <div className="self-end md:hidden p-5">
                <div className="w-full">
                  <h2 className="md:text-base  text-end hidden text-smtext-pretty">Featured Project</h2>
                  <h2 className="subtext">Project Name</h2>
                </div>

                <div className="mt-4 mb-4">
                  <div className=" text-justify text-sm md:text-base text-pretty">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <span className="hidden">Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.</span>
                  </div>
                  <div className="flex flex-row gap-5 text-sand text-sm md:text-base text-pretty">
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Node</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <motion.a
                    target="_blank"
                    href=""
                    rel="noopener noreferrer"
                    className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 py-1 rounded-md text-sm md:text-base text-pretty"
                    
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 1.05 }}
                  
                  >
                    Github
                  </motion.a>
                  <motion.a 
                    className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-md py-1 text-sm md:text-base text-pretty"
                    target="_blank"
                    href=""
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 1.05 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
                
              </div>

              {/* larger screen */}
              <div className="hidden w-1/2 h-full  ml-auto justify-between md:flex flex-col p-">
                  <div className="pt-2">
                    <h2 className="text-end textheading">Featured Project</h2>
                    <h2 className="text-end subtext">Project Name</h2>
                  </div>

                  <div>
                    <div className="bg-gradient-to-b from-storm to-indigo w-full rounded-tr-4xl rounded-bl-4xl py-5 px-7 text-justify ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.
                    </div>

                    <div className="flex gap-7 justify-end text-sand mt-1">
                      <span>Javascript</span>
                      <span>React</span>
                      <span>Node</span>
                    </div>
                  </div>

                  <div className="lg:pl-50 md:pl-25 flex flex-row gap-3 pb-2">
                    <motion.a
                      target="_blank"
                      href=""
                      rel="noopener noreferrer"
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-md py-1 text-sm md:text-base text-pretty flex-1
                      "
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 1.05 }}
                    
                    >
                      Github
                    </motion.a>
                    <motion.a 
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-md py-1 text-sm md:text-base text-pretty flex-1
                      "
                      target="_blank"
                      href=""
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 1.05 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
              </div>
          </div>
        </motion.div> 

        <motion.div className="relative "
          whileHover={{ scale:  1.01}}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="w-full md:w-6/10 h-[350px] bg-blue-500 rounded-3xl relative overflow-hidden"
          >
            <img
              src="assets/projects/wordpress-theme.jpg"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              alt="Featured Project"
            />
          </div>

          {/* //start */}
          <div className="absolute inset-0 m-auto h-full w-full rounded-xl flex bg-gradient-to-b from-indigo/10 to-indigo/100 md:bg-none
            ">
              {/* mobile */}
              <div className="self-end md:hidden p-5">
                <div className="w-full">
                  <h2 className="md:text-base  text-end hidden text-smtext-pretty">Featured Project</h2>
                  <h2 className="subtext">Project Name</h2>
                </div>

                <div className="mt-4 mb-4">
                  <div className=" text-justify text-sm md:text-base text-pretty">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <span className="hidden">Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.</span>
                  </div>
                  <div className="flex flex-row gap-5 text-sand text-sm md:text-base text-pretty">
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Node</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <motion.a
                    target="_blank"
                    href=""
                    rel="noopener noreferrer"
                    className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 py-1 rounded-md text-sm md:text-base text-pretty"
                    
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 1.05 }}
                  
                  >
                    Github
                  </motion.a>
                  <motion.a 
                    className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-md py-1 text-sm md:text-base text-pretty"
                    target="_blank"
                    href=""
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 1.05 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
                
              </div>

              {/* larger screen */}
              <div className="hidden w-1/2 h-full  ml-auto justify-between md:flex flex-col p-">
                  <div className="pt-2">
                    <h2 className="text-end textheading">Featured Project</h2>
                    <h2 className="text-end subtext">Project Name</h2>
                  </div>

                  <div>
                    <div className="bg-gradient-to-b from-storm to-indigo w-full rounded-tr-4xl rounded-bl-4xl py-5 px-7 text-justify ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.
                    </div>

                    <div className="flex gap-7 justify-end text-sand mt-1">
                      <span>Javascript</span>
                      <span>React</span>
                      <span>Node</span>
                    </div>
                  </div>

                  <div className="lg:pl-50 md:pl-25 flex flex-row gap-3 pb-2">
                    <motion.a
                      target="_blank"
                      href=""
                      rel="noopener noreferrer"
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-md py-1 text-sm md:text-base text-pretty flex-1
                      "
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 1.05 }}
                    
                    >
                      Github
                    </motion.a>
                    <motion.a 
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-md py-1 text-sm md:text-base text-pretty flex-1
                      "
                      target="_blank"
                      href=""
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 1.05 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
              </div>
          </div>
        </motion.div>      
    </section>
  );
};

export default Projects;
