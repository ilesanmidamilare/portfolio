 <div className="absolute inset-0 m-auto h-full w-full rounded-xl">
  <div className="w-full md:w-1/2 ml-auto h-full  rounded-xl flex flex-col justify-between">
    <div className="w-full">
      <h2 className="text-end text-2xl">Featured Project</h2>
      <h2 className="text-end subtext">Project Name</h2>
    </div>

    <div>
      <div className="bg-gradient-to-b from-storm to-indigo w-full rounded-tr-4xl rounded-bl-4xl py-5 px-7 text-justify ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rerum ducimus cum accusantium quis aperiam obcaecati dolor voluptas illo, est consequatur quidem.
      </div>
      <div className="flex  gap-7 justify-end text-sand">
        <span>Javascript</span>
        <span>React</span>
        <span>Node</span>
      </div>
    </div>
    <div className=" md:pl-25 lg:pl-50 flex flex-row gap-3">
      <motion.a
        target="_blank"
        href=""
        rel="noopener noreferrer"
        className="text-white px-2 py-1 rounded-md flex-1 text-lg
          cursor-pointer bg-radial from-lavender to-royal self-center text-center
        "
        whileHover={{ y: -2 }}
        whileTap={{ scale: 1.05 }}
      
      >
        Github
      </motion.a>
      <motion.a 
        className="text-white px-2 py-1 rounded-md flex-1 text-lg
          cursor-pointer bg-radial from-lavender to-royal self-center text-center
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