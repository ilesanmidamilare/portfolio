import { motion, } from "motion/react";
import { Lock } from 'lucide-react';

const Projects = () => {

  return (
    <section className="relative c-space  mt-20" id="projects">
      <h2 className="text-heading mb-12 font-mtn">My Projects</h2>
        <div className="flex flex-col gap-10">
          <motion.div className="relative "
            whileHover={{ scale:  1.01}}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              className="w-full h-90 md:h-140 bg-blue-500 rounded-3xl relative overflow-hidden h- "
            >
              <img
                src="https://res.cloudinary.com/dhrohwpck/image/upload/f_auto,q_auto,w_1600,dpr_auto/v1754450270/eazyfit_jlp35t.png"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
                alt="Featured Project"
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 m-auto h-full w-full rounded-xl flex bg-gradient-to-b from-indigo/40 to-indigo/100 
              ">
                <div className="self-end  p-10">
                  <div className="w-full">
                    <h2 className=" text-white font-bold">Eazyfit</h2>
                  </div>

                  <div className="mt-3 mb-7">
                    <div className=" text-justify text-sm md:text-base text-pretty">
                      Eazyfit is a fashion tech platform that connects customers with verified fashion designers for custom made clothing. Users can upload outfit ideas, get bids from stylists, chat, take measurements through video or paid home visits, place orders, and pay all within the app.
                    </div>
                    <div className="flex flex-row gap-2 text-sand text-sm md:text-base text-pretty mt-2">
                        
                        <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">React Native</span>
                        <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">Expo</span>
                        <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">Go</span>
                        <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">MongoDB</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      target="_blank"
                      href=""
                      rel="noopener noreferrer"
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 py-1 rounded-3xl text-sm md:text-base text-pretty"
                      
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 1.05 }}
                    
                    >
                      Github
                    </motion.a>
                    <motion.a 
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-3xl py-1 text-sm md:text-base text-pretty"
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
              className="w-full h-90 md:h-140 bg-blue-500 rounded-3xl relative overflow-hidden h- "
            >
              <img
                src="https://res.cloudinary.com/dhrohwpck/image/upload/f_auto,q_auto,w_1600,dpr_auto/v1753948746/wordpress-theme_vwg0ou.jpg"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
                alt="Featured Project"
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 m-auto h-full w-full rounded-xl flex bg-gradient-to-b from-indigo/40 to-indigo/100 
              ">
                <div className="self-end  p-10">
                  <div className="w-full">
                    <h2 className=" text-white font-bold">AptBooking</h2>
                  </div>

                  <div className="mt-3 mb-7">
                    <div className=" text-justify text-sm md:text-base text-pretty">
                      AptBooking connects apartment owners with potential renters in a seamless and secure way. Property owners can easily list their apartments with detailed descriptions, images, and pricing, while users can browse, compare, and book available spaces based on their preferences and budget. 
                    </div>
                    <div className="flex flex-row gap-2 text-sand text-sm md:text-base text-pretty mt-2">
                        <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">React </span>
                        <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">Typescript</span>
                        <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">Express</span>
                        <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">MongoDB</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      target="_blank"
                      href=""
                      rel="noopener noreferrer"
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 py-1 rounded-3xl text-sm md:text-base text-pretty"
                      
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 1.05 }}
                    
                    >
                      Github
                    </motion.a>
                    <motion.a 
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-3xl py-1 text-sm md:text-base text-pretty"
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
              className="w-full h-90 md:h-140 bg-blue-500 rounded-3xl relative overflow-hidden h- "
            >
              <img
                src="https://res.cloudinary.com/dhrohwpck/image/upload/f_auto,q_auto,w_1600,dpr_auto/v1754443708/Screenshot_2025-08-06_005726_sik9el.png"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
                alt="Featured Project"
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 m-auto h-full w-full rounded-xl flex bg-gradient-to-b from-indigo/40 to-indigo/100 
              ">
                <div className="self-end  p-10">
                  <div className="w-full">
                    <h2 className=" text-white font-bold">Princep Learning</h2>
                  </div>

                  <div className="mt-3 mb-7">
                    <div className=" text-justify text-sm md:text-base text-pretty">
                      Princep is a learning management system where instructors can upload and share educational videos. Students can browse available
                      courses, make payments, and gain access to video content. The platform supports secure transactions, user roles, and a structured learning experience designed to connect learners with expert-created video tutorials across various subjects.
                    
                    </div>
                    <div className="flex flex-row gap-2 text-sand text-sm md:text-base text-pretty mt-2">
                      <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">React </span>
                      <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">Tailwind css</span>
                      <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">Express</span>
                      <span className="p-1 pl-3 pr-3 rounded-3xl bg-sand/15">MongoDB</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      target="_blank"
                      href=""
                      rel="noopener noreferrer"
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 py-1 rounded-3xl text-sm md:text-base text-pretty"
                      
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 1.05 }}
                    
                    >
                      Github
                    </motion.a>
                    <motion.a 
                      className="cursor-pointer bg-radial from-lavender to-royal self-center text-center px-3 rounded-3xl py-1 text-sm md:text-base text-pretty"
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
        </div> 
    </section>
  );
};

export default Projects;


{/* <motion.div className="relative mt-10 mb-10"
          whileHover={{ scale:  1.01}}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="w-full md:w-6/10 h-[350px] bg-blue-500 rounded-3xl relative overflow-hidden"
          >
            <img
              
              src="https://res.cloudinary.com/dhrohwpck/image/upload/f_auto,q_auto,w_1600,dpr_auto/v1754443708/Screenshot_2025-08-06_005726_sik9el.png"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              alt="Featured Project"
              loading="lazy"
            />
          </div>

      
          <div className="absolute inset-0 m-auto h-full w-full rounded-xl flex bg-gradient-to-b from-indigo/10 to-indigo/100 md:bg-none
            ">
            
              <div className="self-end md:hidden p-5">
                <div className="w-full">
                  <h2 className="md:text-base  text-end hidden text-smtext-pretty">Featured Project</h2>
                  <h2 className="subtext">Princep Learning</h2>
                </div>

                <div className="mt-4 mb-4">
                  <div className=" text-justify text-sm md:text-base text-pretty">
                    Princep is a learning management system where instructors can upload and share educational videos. Students can browse available courses, make payments, and gain access to video content. The platform supports secure transactions, user roles, and a structured learning experience designed to connect learners with expert-created video tutorials across various subjects.
                  </div>
                  <div className="flex flex-row gap-5 text-sand text-sm md:text-base text-pretty">
                    <span>React </span>
                    <span>Tailwind css</span>
                    <span>Express</span>
                    <span>MongoDB</span>
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

             
              <div className="hidden w-1/2 h-full  ml-auto justify-between md:flex flex-col p-">
                  <div className="pt-2">
                    <h2 className="text-end textheading">Featured Project</h2>
                    <h2 className="text-end subtext">Princep Learning</h2>
                  </div>

                  <div>
                    <div className="bg-gradient-to-b from-storm to-indigo w-full rounded-tr-4xl rounded-bl-4xl py-3 px-7 text-justify ">
                      Princep is a learning management system where instructors can upload and share educational videos. Students can browse available...<span className="italic text-red-500">Read more</span>
                     
                    
                    </div>

                    <div className="flex gap-7 justify-end text-sand mt-1">
                      <span>React </span>
                      <span>Tailwind css</span>
                      <span>Express</span>
                      <span>MongoDB</span>
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
        </motion.div>  */}
