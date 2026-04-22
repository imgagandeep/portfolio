import { constructMetadata } from "@/lib/utils";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import About from "./components/about";
import Experiences from "./components/experiences";
import AboutFooter from "./components/footer";

export const metadata = constructMetadata({
  title: "About Me | Gagandeep Singh",
  description:
    "Learn more about Gagandeep Singh, a full stack developer focused on scalable web applications, quality-driven engineering, and user-centric digital experiences.",
});

export default async function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <MaxWidthWrapper className="mx-auto flex max-w-4xl flex-col gap-4 px-7 lg:px-0">
        <About />
        <Experiences />
        <AboutFooter />
      </MaxWidthWrapper>
    </div>
  );
}
