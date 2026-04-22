import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/config/projects";
import { constructMetadata } from "@/lib/utils";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return constructMetadata({
    title: `${project.title} | Side Projects`,
    description: project.description,
  });
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen pb-16 pt-8">
      <MaxWidthWrapper className="max-w-4xl px-6 sm:px-8">
        <Link
          href="/projects"
          className="mb-8 inline-flex text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          ← Back to Projects
        </Link>

        <header className="mb-10">
          <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {project.publishDate} · {project.author}
          </p>
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            {project.domains}
          </p>
        </header>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
          <Image
            src={project.images.cover}
            alt={project.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {project.description && (
          <div className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Project Overview
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
        )}

        {project.overview && (
          <div className="mt-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              {project.overview}
            </p>
          </div>
        )}

        {project.futurePlans && project.futurePlans.length > 0 && (
          <div className="mt-12">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Future Plans
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {project.futurePlans.map((plan) => (
                <li key={plan}>{plan}</li>
              ))}
            </ul>
          </div>
        )}
      </MaxWidthWrapper>
    </main>
  );
}
