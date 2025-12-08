// src/components/TechIcon.jsx
import {
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
} from "react-icons/si";

const iconMap = {
  React: SiReact,
  "React.js": SiReact,
  Angular: SiAngular,
  "Tailwind CSS": SiTailwindcss,
  "JavaScript (ES6+)": SiJavascript,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  "MongoDB Atlas": SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  "Postman / Thunder Client": SiPostman,
  npm: SiNpm,
  // "VS Code":  no icon for now – label will still show
};

export function TechIcon({ label }) {
  const Icon = iconMap[label] || null;

  return (
    <div className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm backdrop-blur-sm bg-white/5 border-white/10">
      {Icon && <Icon className="text-base" />}
      <span>{label}</span>
    </div>
  );
}
