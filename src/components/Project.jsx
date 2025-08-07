
import {myProjects} from '../constants/index'
import { motion, } from "motion/react";

const Project = () => {
  return (
    <>
      {myProjects.map((project) => (
        <motion.div key={project.id}
          className="bg-cover bg-center h-90 w-full rounded-3xl relative mt-7 md:h-140"
          style={{ backgroundImage: `url('${project.bgimg}')` }}>
            <div className="absolute flex inset-0 
              bg-gradient-to-b from-indigo/60 to-indigo/100 rounded-3xl
              md:bg-gradient-to-b md:from-indigo/20 md:to-indigo/100
              ">

            <motion.div className="p-3 self-end sm:p-10"
              whileHover={{ scale:  1.01}}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-white font-bold headtext">{project.title}</div>
              <div className="text-sm text-white md:text-base text-justify mt-5 mb-3">{project.description} </div>
              
              <div  className="flex flex-row gap-2">
                {project.tags?.map((tag) => (
                  <div key={tag.id} className="text-sand bg-sand/20 pr-1 pl-1  rounded-2xl">{tag?.name}</div>
                ))}
              </div>

              <div className="flex gap-2 mt-5">
                {project.githublink && (
                  <motion.a href={project.githublink} target="_blank" rel="noopener noreferrer" className="text-white cursor-pointer bg-radial from-lavender to-royal p-1 pl-4 pr-4 rounded-3xl text-sm md:text-base"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 1.05 }}
                  >Github</motion.a>
                )}
                {project.demolink && (
                  <motion.a href={project.demolink} target="_blank" rel="noopener noreferrer" className="text-white cursor-pointer bg-radial from-lavender to-royal p-1 pl-4 pr-4 rounded-3xl text-sm md:text-base"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 1.05 }}
                  >Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>

            </div>
      </motion.div>))}
    </>
  )
}

export default Project