import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "javascript",
    "react",
    "reactnative",
    "typescript",
    "tailwindcss",
    "expo",
    "node",
    "mongodb",
    "express",
     "webflow",
    "framer",
    "wordpress",
     "git",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={70}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={80} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
