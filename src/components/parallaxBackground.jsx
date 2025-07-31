import { motion, useScroll, useSpring, useTransform } from "motion/react";


const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
    
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            // backgroundImage: "url(assets/mountain-3.png)",
            backgroundImage: "url(https://res.cloudinary.com/dhrohwpck/image/upload/v1753947651/mountain-3_xviefx.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            // backgroundImage: "url(assets/planets.png)",
             backgroundImage: "url(https://res.cloudinary.com/dhrohwpck/image/upload/v1753947649/planets_w9hbvs.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            // backgroundImage: "url(assets/mountain-2.png)",
            backgroundImage: "url(https://res.cloudinary.com/dhrohwpck/image/upload/v1753947650/mountain-2_jgxfkf.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        {/* Mountaine Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            // backgroundImage: "url(assets/mountain-1.png)",
            backgroundImage: "url(https://res.cloudinary.com/dhrohwpck/image/upload/v1753947650/mountain-1_gqyf9z.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
