import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  // const grid2Container = useRef();
  return (
    <section className="c-space mt-20" id="about">
      <h2 className="text-heading font-mtn">About Me</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        {/* Add image with two variant, a monochrome and a colour. On hover on the monochrome image the coloured imade shows through where the mouse pointer is */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            {/* <p className="headtext">Hi, I&apos;m Damilare</p> */}
            <p className="subtext text-justify">
    
              <span className="font-bold text-white">Hi, I&apos;m Damilare</span>, a frontend developer skilled in building responsive and interactive web and mobile applications using <span className="text-white font-medium">JavaScript, TypeScript, React.js, </span>and <span className="text-white font-medium">React Native</span>. I develop fast, scalable UIs with <span className="text-white font-medium">TailwindCSS</span>. On the backend, I use <span className="text-white font-medium">Node.js, Mongodb</span> and <span className="text-white font-medium">Express.js</span> to build APIs and handle server logic. I&apos;m passionate about clean code, performance, and creating great user experiences.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        
        {/* Grid 2 */}
        <div className="grid-default-color grid-2 flex items-center justify-left">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in build<br/>robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

        {/* Grid 3 */ }
        <div className="grid-special-color grid-2">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
