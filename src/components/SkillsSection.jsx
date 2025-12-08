// src/components/SkillsSection.jsx
import { TechIcon } from "./TechIcon";
import { FiGrid } from "react-icons/fi";

export default function SkillsSection({ skills }) {
  const { languages, frameworks, webSkills, tools, concepts } = skills;

  const renderList = (title, items) => (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <TechIcon key={item} label={item} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16">
      <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold mb-6">
        <FiGrid className="text-sky-400" />
        <span>Skills & Tech Stack</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {renderList("Languages", languages)}
        {renderList("Frameworks / Libraries", frameworks)}
        {renderList("Web Skills", webSkills)}
        {renderList("Tools", tools)}
        {renderList("Concepts", concepts)}
      </div>
    </section>
  );
}
