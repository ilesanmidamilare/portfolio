import { useState, useEffect, useRef } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
// import Particles from "../components/Particles";


const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });


  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);

    console.log("Mouse Position:", e.clientX, e.clientY);
  };

 
  const [preview, setPreview] = useState(null);

const videoRef = useRef(null);

const handleMouseEnter = () => {
  if (videoRef.current) {
    videoRef.current.play();
  }
};

const handleMouseLeave = () => {
  if (videoRef.current) {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }
};


  return (
    <section className="relative c-space  mt-20" id="projects">
      <h2 className="text-heading mb-12 font-mtn">My Projects</h2>

      {/* First Card */}
      <div className="flex flex-col gap-20">
        <motion.div className="relative"
          whileHover={{ scale:  1.01}}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="w-[550px] h-[350px] bg-blue-500 rounded-3xl relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {/* Static Image (fallback) */}
            <img
              src="assets/projects/accessories.jpg"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              alt="Featured Project"
            />

            {/* Video overlay */}
            {/* <video
              ref={videoRef}
              muted
              loop
              preload="none"
              className="w-full h-full object-cover absolute top-0 left-0 z-10 opacity-100 transition-opacity duration-300"
            >
              <source src="assets/projects/videos/project-one.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </motion.div>
          <div className="absolute inset-0 m-auto h-full w-full rounded-xl">
            <div className="w-1/2 ml-auto h-full flex flex-col gap-2.5 rounded-xl">
              <div className="w-full h-[100px]">
                <h2 className="text-end text-2xl">Featured Project</h2>
                <h2 className="text-end subtext">Project Name</h2>
              </div>

              <div className="bg-gradient-to-b from-storm to-indigo w-full h-[100px] flex-2 rounded-tr-[2rem] rounded-bl-[2rem] px-[30px] py-[15px] text-justify subtext">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.
              </div>

              <div className="w-full h-[100px] flex flex-col justify-between items-end">
                <div className="flex  gap-7 justify-end text-sand">
                  <span>Javascript</span>
                  <span>React</span>
                  <span>Node</span>
                </div>

                <div className="flex flex-row gap-2 items-center rounded-md w-1/2">
                  <motion.a
                    target="_blank"
                    href=""
                    rel="noopener noreferrer"
                    className="text-white px-2 py-1 rounded-md  text-xs flex-1
                      cursor-pointer bg-radial from-lavender to-royal self-center text-center
                    "
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 1.05 }}
                  
                  >
                    Github
                  </motion.a>
                  <motion.a 
                    className="text-white px-2 py-1 rounded-md  text-xs flex-1
                      cursor-pointer bg-radial from-lavender to-royal self-center text-center
                    "
                    target="_blank"
                    href=""
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 1.05 }}
                  >
                    Live demo
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Projects;





// import { motion, } from "motion/react";

// const Projects = () => {

//   return (
//     <section className="relative c-space  mt-20" id="projects">
//       <h2 className="text-heading mb-12 font-mtn">My Projects</h2>

//       <div className="flex flex-col gap-20">
//         <motion.div className="relative"
//           whileHover={{ scale:  1.01}}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div 
//             className="w-[550px] h-[350px] bg-blue-500 rounded-3xl relative overflow-hidden"
         
//           >
          
//             <img
//               src="assets/projects/accessories.jpg"
//               className="w-full h-full object-cover absolute top-0 left-0 z-0"
//               alt="Featured Project"
//             />

//           </motion.div>
//           <div className="absolute inset-0 m-auto h-full w-full rounded-xl">
//             <div className="w-1/2 ml-auto h-full flex flex-col gap-2.5 rounded-xl">
//               <div className="w-full h-[100px]">
//                 <h2 className="text-end text-2xl">Featured Project</h2>
//                 <h2 className="text-end subtext">Project Name</h2>
//               </div>

//               <div className="bg-gradient-to-b from-storm to-indigo w-full h-[100px] flex-2 rounded-tr-[2rem] rounded-bl-[2rem] px-[30px] py-[15px] text-justify subtext">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.
//               </div>

//               <div className="w-full h-[100px] flex flex-col justify-between items-end">
//                 <div className="flex  gap-7 justify-end text-sand">
//                   <span>Javascript</span>
//                   <span>React</span>
//                   <span>Node</span>
//                 </div>

//                 <div className="flex flex-row gap-2 items-center rounded-md w-1/2">
//                   <motion.a
//                     target="_blank"
//                     href=""
//                     rel="noopener noreferrer"
//                     className="text-white px-2 py-1 rounded-md  text-xs flex-1
//                       cursor-pointer bg-radial from-lavender to-royal self-center text-center
//                     "
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 1.05 }}
                  
//                   >
//                     Github
//                   </motion.a>
//                   <motion.a 
//                     className="text-white px-2 py-1 rounded-md  text-xs flex-1
//                       cursor-pointer bg-radial from-lavender to-royal self-center text-center
//                     "
//                     target="_blank"
//                     href=""
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 1.05 }}
//                   >
//                     Live demo
//                   </motion.a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

        
//       </div>
//     </section>
//   );
// };

// export default Projects;