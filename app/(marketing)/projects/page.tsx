import { constructMetadata } from "@/lib/utils";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import Projects from "./components/projects";

export const metadata = constructMetadata({
  title: "Projects | Gagandeep Singh",
  description:
    "Learn more about Gagandeep Singh, a full stack developer focused on scalable web applications, quality-driven engineering, and user-centric digital experiences.",
});

export default async function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16">
      <MaxWidthWrapper className="mx-auto flex max-w-4xl flex-col gap-4 px-7 lg:px-0">
        <Projects />
      </MaxWidthWrapper>
    </div>
  );
}
