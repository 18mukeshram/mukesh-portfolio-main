// src/components/ProjectCard.jsx
import { TechIcon } from "./TechIcon";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/80 p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <p className="text-sm text-slate-300 mb-4">{project.shortDescription}</p>

      <h4 className="text-sm font-semibold mb-1">Key Features</h4>
      <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 mb-4">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {project.badges && (
        <div className="flex flex-wrap gap-2 mb-3">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="text-[10px] px-2 py-1 rounded-full
                   bg-indigo-500/10 text-indigo-300
                   border border-indigo-500/20"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      <div className="space-y-2 mb-4">
        <h4 className="text-sm font-semibold">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechIcon key={tech} label={tech} />
          ))}
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <h4 className="text-sm font-semibold">Tools</h4>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <TechIcon key={tool} label={tool} />
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-2 rounded-full border border-sky-400/60 hover:bg-sky-500/20"
          >
            View Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-2 rounded-full border border-emerald-400/60 hover:bg-emerald-500/20"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
