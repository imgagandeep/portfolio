import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";
import WidgetMusicPlayer from "./widget-music-player";
import WidgetProjects from "./widget-projects";

export default async function HeroLanding() {
  return (
    <section>
      <div className="container flex max-w-6xl flex-col gap-10 py-16 sm:gap-y-16">
        <div className="grid auto-rows-max grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <div
              id="profile"
              className="relative mb-5 w-[40%] flex-grow justify-end md:flex"
            >
              <div className="relative z-50 w-full">
                <div className="absolute -bottom-6 -right-6 z-40 h-12 w-12 rounded-full">
                  <span className="relative z-20 flex h-full w-full items-center justify-center rounded-full border-4 border-white bg-neutral-100 text-2xl dark:border-neutral-950 dark:bg-neutral-900">
                    <span className="flex h-full w-full items-center justify-center rounded-full border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-950">
                      👋
                    </span>
                  </span>
                </div>
                <div className="relative z-30 px-1">
                  <Image
                    src="/_static/images/me.png"
                    alt="profile"
                    width={420}
                    height={420}
                    priority
                    className="relative z-30 mx-auto w-full rounded-2xl contrast-125 dark:-translate-y-0.5 dark:contrast-100 md:max-w-md"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-20 h-full w-full -translate-y-px rounded-2xl border border-neutral-300 bg-gradient-to-r from-white via-neutral-50 to-white dark:border-neutral-700 dark:from-neutral-950 dark:via-black dark:to-neutral-950 lg:h-[108px]" />
              </div>
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight dark:text-white md:text-4xl lg:text-6xl">
              Hello, <br />
              I&apos;m Gagandeep Singh.
            </h1>
            <h2 className="mb-6 text-lg font-semibold text-neutral-600 dark:text-neutral-400">
              Fullstack Developer | React, Next.js, Node.js, TypeScript |
              Building scalable web applications
            </h2>
            <p className="mb-6 text-base text-neutral-600 dark:text-neutral-400">
              I&apos;m a Fullstack Developer focused on crafting fast, visually
              engaging, and user-centric web applications. Leveraging modern
              frameworks and best practices, I build scalable, responsive, and
              secure solutions that help businesses make a lasting impact
              online.
            </p>
            <p className="mb-2 text-base text-neutral-600 dark:text-neutral-400">
              <span className="font-medium">
                Want to boost your app&apos;s performance, design, and
                usability?
              </span>{" "}
              I can help bring that vision to life.
            </p>
            <ul className="list-outside list-disc space-y-1 py-2 pl-3 text-sm text-neutral-500 dark:text-neutral-400">
              <li>
                End-to-end web applications (frontend &amp; backend) with React,
                Next.js, and Node.js
              </li>
              <li>
                Micro frontends, Single Page Applications, and Progressive Web
                Apps
              </li>
              <li>
                Building RESTful APIs and integrating third-party services
              </li>
              <li>Real-time features and live data updates with WebSockets</li>
              <li>...and more tailored to your needs</li>
            </ul>
            <div className="flex items-center gap-2 py-5">
              <Link
                className={cn(buttonVariants())}
                href="https://calendar.app.google/fKvz7V1t9YBRTpVH9"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a meeting
              </Link>
              <Link
                className={cn(buttonVariants({ variant: "outline" }))}
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </Link>
            </div>
          </div>
          <div className="relative my-auto hidden scale-[80%] pb-28 md:block">
            <div className="relative z-10">
              <WidgetProjects />
            </div>
            <div className="absolute left-20 top-[70%] z-20 w-full">
              <WidgetMusicPlayer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
