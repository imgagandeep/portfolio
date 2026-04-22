import Image from "next/image";

export default function About() {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
        About Me
      </h1>
      <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-4 sm:text-base sm:leading-7 lg:mt-6 lg:text-lg lg:leading-8">
        Hello 👋 I&apos;m Gagandeep Singh, a versatile full stack developer with
        a strong foundation in QA, based in India. I specialize in crafting
        robust, scalable web applications using React.js and Next.js on the
        frontend, and Node.js and Python on the backend. I&apos;m passionate
        about writing clean, maintainable code and designing systems that
        perform seamlessly at scale. Driven by continuous learning and a
        commitment to quality-driven development, I love transforming complex
        challenges into elegant, user-centric solutions. I&apos;m always excited
        to collaborate on innovative projects that create meaningful impact.
      </p>

      <Image
        src="/_static/images/about.jpg"
        alt="Gagandeep"
        width={1200}
        height={700}
        className="relative z-30 my-10 w-full rounded-xl"
        priority
      />
    </section>
  );
}
