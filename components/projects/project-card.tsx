"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <>
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
      >
        {/* Thumbnail */}
        <div className="h-48 w-full overflow-hidden bg-muted">
          <Image
            src={project.images.min}
            alt={project.title}
            width={100}
            height={100}
            className="h-full w-full object-cover"
            onError={(e) => {
              // Fallback: hide broken img so SVG sibling shows (if you render both)
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Body */}
        <div className="px-5 py-4">
          {/* Title + Live badge */}
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[1.05rem] font-bold leading-tight tracking-tight text-[#111]">
              {project.title}
            </span>
            {/* {project.status === "Live" && (
              <span className="rounded-full bg-[#eef9f0] px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-[#2d7a3a]">
                Live
              </span>
            )} */}
          </div>

          {/* Domains */}
          <p className="mb-3 text-[0.8rem] leading-relaxed text-[#666]">
            {project.domains}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f0f0ee] px-2.5 py-0.5 text-[0.7rem] font-medium text-[#555]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}
