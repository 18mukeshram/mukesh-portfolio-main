// src/components/ToolsSection.jsx
import { TechIcon } from "./TechIcon";
import { FiTool } from "react-icons/fi";

export default function ToolsSection({ tools }) {
  // we’ll group the tools into nicer visual cards
  const groups = [
    {
      title: "Editor & Browser",
      description: "Where I write and test most of my code.",
      items: ["VS Code", "Browser Developer Tools"],
    },
    {
      title: "Version Control",
      description: "Collaboration, history, and clean workflows.",
      items: ["Git", "GitHub"],
    },
    {
      title: "CLI & Build Tools",
      description: "Running dev servers, builds, and automation.",
      items: ["Angular CLI", "npm", "Nodemon"],
    },
    {
      title: "API & Debugging",
      description: "Inspecting requests and debugging backends.",
      items: ["Postman / Thunder Client"],
    },
  ];

  // keep everything that was passed in too (as a subtle tag row)
  const uniqueTools = Array.from(new Set(tools));

  return (
    <section id="tools" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold mb-4">
        <FiTool className="text-sky-400" />
        <span>Tools & Development Environment</span>
      </h2>
      <p className="text-sm text-slate-300 mb-8 max-w-2xl">
        I’m comfortable across the full workflow: editing, version control,
        debugging, and shipping production-ready builds.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="group rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-800/80 p-5 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-sky-500/60 transition"
          >
            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {group.title}
            </h3>
            <p className="text-xs text-slate-300 mb-4">{group.description}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechIcon key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* subtle “all tools” strip */}
      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-3">
          Also using
        </p>
        <div className="flex flex-wrap gap-2">
          {uniqueTools.map((tool) => (
            <TechIcon key={tool} label={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
