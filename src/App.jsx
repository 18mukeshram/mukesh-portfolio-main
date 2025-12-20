// src/App.jsx
import emailjs from "@emailjs/browser";
import { projects, skills } from "./data/portfolioData";
import ProjectCard from "./components/ProjectCard";
import SkillsSection from "./components/SkillsSection";
import ToolsSection from "./components/ToolsSection";
import Reveal from "./components/Reveal";
import profilePic from "./assets/Mukesh ram.jpg";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiCode,
  FiHome,
  FiGrid,
  FiTool,
  FiFolder,
} from "react-icons/fi";

function Navbar() {
  return (
    <nav className="sticky top-0 z-30 backdrop-blur bg-slate-950/70 border-b border-white/10">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3 py-3 px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/15 border border-sky-500/40">
            <FiCode className="text-sky-400" />
          </div>
          <span className="font-semibold tracking-tight text-sm sm:text-base">
            Mukesh<span className="text-sky-400">.dev</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
          <a
            href="#home"
            className="flex items-center gap-1 hover:text-sky-400"
          >
            <FiHome className="text-[13px]" />
            <span>Home</span>
          </a>
          <a
            href="#skills"
            className="flex items-center gap-1 hover:text-sky-400"
          >
            <FiGrid className="text-[13px]" />
            <span>Skills</span>
          </a>
          <a
            href="#tools"
            className="flex items-center gap-1 hover:text-sky-400"
          >
            <FiTool className="text-[13px]" />
            <span>Tools</span>
          </a>
          <a
            href="#projects"
            className="flex items-center gap-1 hover:text-sky-400"
          >
            <FiFolder className="text-[13px]" />
            <span>Projects</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1 hover:text-sky-400"
          >
            <FiMail className="text-[13px]" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 px-4 border-b border-white/5"
    >
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={profilePic}
              alt="Mukesh Ram"
              className="h-10 w-10 rounded-full object-cover border border-sky-400/60"
            />
            <p className="text-xs text-slate-300">
              Web development enthusiast • React, Angular & full-stack learner
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-sky-300/80">
            Frontend & Full-Stack Developer
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-sky-400">Bellamkonda Sai Mukesh Ram</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            I build responsive, modern web applications using React, Angular,
            Tailwind CSS, and full-stack tools like Node.js, Express, and
            MongoDB. I enjoy converting ideas and learning paths into real,
            interactive products.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="mailto:mukeshrambellamkonda@gmail.com"
              className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-sm font-medium shadow-lg shadow-sky-500/30"
            >
              Contact Me
            </a>
            <a
              href="/Mukesh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-emerald-500/70 text-sm hover:bg-emerald-500/10"
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/bellamkonda-sai-mukesh-ram-60619731b/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-slate-500 text-sm hover:border-sky-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/18mukeshram"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-slate-500 text-sm hover:border-sky-400"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Highlight card */}
        <div className="flex-1 max-w-sm w-full">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-sky-500/20">
            <p className="text-xs text-sky-300 mb-2">Highlight Project</p>

            <h2 className="text-lg font-semibold mb-2">
              SkillBridge – AI-Powered Learning Roadmap Platform
            </h2>

            <p className="text-xs text-slate-300 mb-3">
              A full-stack learning platform featuring a secure, context-aware
              AI assistant that helps users understand concepts, track progress,
              and decide what to learn next.
            </p>

            <ul className="text-xs text-slate-300 space-y-1 mb-4 list-disc list-inside">
              <li>AI-assisted learning with step-aware explanations</li>
              <li>JWT authentication & protected REST APIs</li>
              <li>Dynamic roadmaps with progress tracking</li>
              <li>Role-based tracks for Frontend / Backend / Full-Stack</li>
            </ul>

            <p className="text-[11px] text-slate-400">
              Built end-to-end: frontend UI, backend APIs, database models,
              authentication, AI integration, and production debugging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold mb-6">
        <FiFolder className="text-sky-400" />
        <span>Projects</span>
      </h2>
      <p className="text-sm text-slate-300 mb-6 max-w-2xl">
        A selection of projects that demonstrate my skills in SPA development,
        API integration, and full-stack engineering.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(() => {
        alert("✅ Message sent successfully! I’ll get back to you soon.");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold mb-4">
        <FiMail className="text-sky-400" />
        <span>Let’s Connect</span>
      </h2>
      <p className="text-sm text-slate-300 mb-8 max-w-xl">
        I’m open to internships, entry-level roles, and collaboration on web
        apps or learning platforms. The quickest way to reach me is by email or
        LinkedIn.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left: contact methods */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-full bg-sky-500/15 p-2">
              <FiMail className="text-sky-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Email
              </p>
              <a
                href="mailto:mukeshrambellamkonda@gmail.com"
                className="text-sm text-sky-400"
              >
                mukeshrambellamkonda@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-full bg-sky-500/15 p-2">
              <FiLinkedin className="text-sky-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/bellamkonda-sai-mukesh-ram-60619731b/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-sky-400"
              >
                /bellamkonda-sai-mukesh-ram-60619731b
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-full bg-sky-500/15 p-2">
              <FiGithub className="text-sky-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                GitHub
              </p>
              <a
                href="https://github.com/18mukeshram"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-sky-400"
              >
                github.com/18mukeshram
              </a>
            </div>
          </div>
        </div>

        {/* Right: simple contact form (visual) */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 space-y-4 shadow-lg shadow-sky-500/10"
        >
          <div>
            <label className="block text-xs mb-1 text-slate-300">Name</label>
            <input
              name="from_name" //
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
            />
          </div>
          <div>
            <label className="block text-xs mb-1 text-slate-300">Email</label>
            <input
              name="reply_to" //
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
            />
          </div>
          <div>
            <label className="block text-xs mb-1 text-slate-300">Message</label>
            <textarea
              name="message" //
              rows="4"
              placeholder="Tell me about your idea, role, or project…"
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-sky-500 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-sky-500 hover:bg-sky-600 text-sm font-medium py-2 mt-2"
          >
            Send
          </button>
          <p className="text-[11px] text-slate-400 text-center">
            I'll respond as soon as possible.
          </p>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <main className="max-w-5xl mx-auto">
        <Reveal className="px-4" delay={50}>
          <SkillsSection skills={skills} />
        </Reveal>
        <Reveal delay={100}>
          <ToolsSection tools={skills.tools} />
        </Reveal>
        <Reveal delay={150}>
          <ProjectsSection />
        </Reveal>
        <Reveal delay={200}>
          <ContactSection />
        </Reveal>
      </main>
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-white/5 mt-10">
        © {new Date().getFullYear()} Mukesh Ram. Built with React & Tailwind
        CSS.
      </footer>
    </div>
  );
}
