import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "../shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn("border-t bg-background/60 backdrop-blur-xl", className)}
    >
      <div className="py-4">
        <div className="container flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <Link
              href="/"
              className="group relative z-30 flex h-5 items-center space-x-1.5 text-base font-semibold text-black dark:text-white"
            >
              <span className="-translate-y-0.5 text-xl duration-300 ease-in-out group-hover:-rotate-12 group-hover:scale-[1.2]">
                ✦
              </span>
              <span className="-translate-y-0.5"> {siteConfig.name}</span>
            </Link>
            <span className="text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:border-l sm:border-neutral-300 sm:pl-4 dark:sm:border-neutral-700">
              &copy; 2025 Gagandeep Singh. All rights are reserved.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.linkedin className="size-5" />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.gitHub className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
