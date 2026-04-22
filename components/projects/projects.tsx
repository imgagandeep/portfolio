import Link from "next/link";

import { projects } from "@/config/projects";

import { Icons } from "../shared/icons";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section>
      <div className="container flex max-w-6xl flex-col gap-10 py-16">
        {/* Header */}
        <div className="flex max-w-xl flex-col gap-2">
          <h2 className="text-[2rem] font-extrabold leading-tight tracking-tight">
            Projects
          </h2>
          <p className="text-[0.95rem] leading-relaxed text-[#666]">
            Explore my latest side projects and discover the advanced
            frameworks, modern tools, and creative techniques that brought these
            concepts to life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-[9px] bg-[#1a1a1a] px-6 py-3 text-[0.875rem] font-semibold text-white transition-all duration-150 hover:-translate-y-px hover:bg-[#333]"
          >
            View All Projects <Icons.arrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
