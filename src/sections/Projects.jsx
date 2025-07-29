import { useState, useEffect, use } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";


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
  return (
    // <section
    //   onMouseMove={handleMouseMove}
    //   className="relative c-space section-spacing"
    // >
    //   <h2 className="text-heading">My Selected Projects</h2>
    //   <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
    //   {myProjects.map((project) => (
    //     <Project key={project.id} {...project} setPreview={setPreview} />
    //   ))}
    //   {preview && (
    //     <motion.img
    //       className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
    //       src={preview}
    //       style={{ x: springX, y: springY }}
    //     />
    //   )}
    // </section>
    // <section
    //   className=" c-space "
    // >
    //   <h2 className="text-heading">My Projects</h2>
    //   <div style={{
    //     position: 'relative',
    //   }}>
              
    //     <div style={{
    //     width: '550px',
    //     height: '350px',
    //     backgroundColor: 'blue',
    //     borderRadius: '2rem'
    //     }}>

    //     </div>

    //     <div style={{
    //       height: '100%',
    //       borderRadius: '1rem',
    //       position: 'absolute',
    //       bottom: '0',
    //       left: '0',
    //       right:'0',
    //       top: '0',
    //       margin: 'auto',
    //       width: '100%',
          
    //     }}>
    //       <div style={{
    //         width: '50%', 
    //         marginLeft: 'auto',  
    //         height:'100%', display:'flex', flexDirection:'column', gap:10, borderRadius:'1rem'}}>
            
    //         <div style={{ width:'100%', height:'100px'}}>
    //         <h2 style={{textAlign:'end'}}>Featured Project</h2>
    //         <h2 style={{textAlign:'end'}}>Project Name</h2>
            
    //         </div>

    //         <div style={{backgroundColor: 'red', width:'100%', height:'100px', flex:'2', borderTopRightRadius:'2rem', borderBottomLeftRadius:'2rem', padding: '15px 30px', textAlign: 'justify'}}>
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.
    //         </div>

    //         <div style={{width:'100%', height:'100px', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'end'}}>
    //         <div style={{display:'flex', flexDirection:'row', gap:10,  justifyContent:'end'}}>
    //           <h2>Javascript</h2>
    //           <h2>React</h2>
    //           <h2>Node</h2>
    //         </div>

    //         <div style={{display:'flex', flexDirection:'row', gap:10, justifyContent:'end', marginTop: '10px', alignItems:"center", padding: '5px 10px', borderRadius: '0.5rem', width: '50%'}}>
    //           <button
    //             style={{
    //               color: 'white',
    //               padding: '5px 10px',
    //               borderRadius: '0.5rem',
    //               borderWidth: '1px',
    //               borderStyle: 'solid',
    //               borderColor: 'white',
    //               backgroundColor: 'transparent', // optional
    //               fontSize: '0.7rem',
    //               flex: 1,
    //             }}
    //           >
    //             Github
    //           </button>

    //           <button
    //             style={{
    //               color: 'white',
    //               padding: '5px 10px',
    //               borderRadius: '0.5rem',
    //               borderWidth: '1px',
    //               borderStyle: 'solid',
    //               borderColor: 'white',
    //               backgroundColor: 'transparent', // optional
    //               fontSize: '0.7rem',
    //               flex: 1,
    //             }}
    //           >
    //             Live demo
    //           </button>
    //         </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  <>
    <section className="c-space ">
      <h2 className="text-heading mb-12">My Projects</h2>

      <div className="relative mb-15 mt-15"
        onMouseMove={handleMouseMove}
      
      >
        <div className="w-[550px] h-[350px] bg-blue-500 rounded-3xl"></div>

        <div className="absolute inset-0 m-auto h-full w-full rounded-xl">
          <div className="w-1/2 ml-auto h-full flex flex-col gap-2.5 rounded-xl">
            <div className="w-full h-[100px]">
              <h2 className="text-end">Featured Project</h2>
              <h2 className="text-end">Project Name</h2>
            </div>

            <div className="bg-red-500 w-full h-[100px] flex-2 rounded-tr-3xl rounded-bl-3xl p-[15px] text-justify text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.
            </div>

            <div className="w-full h-[100px] flex flex-col justify-between items-end">
              <div className="flex flex-row gap-2 justify-end">
                <h2>Javascript</h2>
                <h2>React</h2>
                <h2>Node</h2>
              </div>

              <div className="flex flex-row gap-2 justify-end items-center mt-2 p-2 rounded-md w-1/2">
                <button className="text-white px-2 py-1 rounded-md border border-white bg-transparent text-xs flex-1">
                  Github
                </button>
                <button className="text-white px-2 py-1 rounded-md border border-white bg-transparent text-xs flex-1">
                  Live demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-15 mt-15">
          {/* Blue Box */}
          <div className="w-[550px] h-[350px] bg-blue-500 rounded-[2rem] ml-auto"></div>

          {/* Overlayed Info Section */}
          <div className="absolute inset-0 w-full h-full rounded-xl mr-auto">
            <div className="w-1/2 h-full flex flex-col gap-2.5 rounded-xl">
              {/* Project Titles */}
              <div className="w-full h-[100px]">
                <h2 className="text-start">Featured Project</h2>
                <h2 className="text-start">Project Name</h2>
              </div>

              {/* Description Box */}
              <div className="bg-red-500 w-full h-[100px] flex-2 rounded-tr-[2rem] rounded-bl-[2rem] px-[30px] py-[15px] text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.
              </div>

              {/* Tags & Buttons */}
              <div className="w-full h-[100px] flex flex-col justify-between items-start">
                {/* Tags */}
                <div className="flex flex-row gap-2 justify-end">
                  <h2>Javascript</h2>
                  <h2>React</h2>
                  <h2>Node</h2>
                </div>

                {/* Buttons */}
                <div className="flex flex-row gap-2 justify-end mt-[10px] items-center p-2.5 rounded-md w-1/2">
                  <button className="text-white text-[0.7rem] px-2.5 py-1.5 rounded-md border border-white flex-1 bg-transparent">
                    Github
                  </button>
                  <button className="text-white text-[0.7rem] px-2.5 py-1.5 rounded-md border border-white flex-1 bg-transparent">
                    Live demo
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>

    </section>
   
</>
  );
};

export default Projects;
