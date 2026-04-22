"use client";

import Link from "next/link";

export default function AboutFooter() {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-bold dark:text-neutral-200">
        Let&apos;s Connect
      </h2>
      <p className="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
        If you want to stay up to date with my work, be sure to{" "}
        <Link
          href="https://www.linkedin.com/in/imgagandeep/"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-600 underline"
        >
          follow me on LinkedIn
        </Link>
        , or you can send me an{" "}
        <Link
          href="mailto:gagandeepdevs@gmail.com"
          className="text-indigo-600 underline"
        >
          email
        </Link>{" "}
        and I&apos;ll be sure to get back to you.
      </p>
    </section>
  );
}
