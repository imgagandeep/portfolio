"use client";

import Image from "next/image";
import Link from "next/link";

import { projects } from "@/config/projects";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function Projects() {
  return (
    <section className="space-y-2">
      <MaxWidthWrapper className="max-w-5xl px-7 lg:px-0">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
          ✨ Here are a few of the projects I&apos;m currently working on.
          I&apos;m passionate about exploring new ideas and bringing them to
          life through thoughtful design and clean, scalable code. Whether
          it&apos;s experimenting with new technologies or solving real-world
          problems, I love turning concepts into polished, user-friendly
          applications. I&apos;m always building, refining, and learning - so
          stay tuned for what&apos;s next!
        </p>

        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="block rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
                <Image
                  src={project.images.min}
                  alt={`${project.title} thumbnail`}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {project.domains}
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-7">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
                  {project.publishDate}
                </span>
                <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                  {project.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
