"use client";

import Link from "next/link";
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
} from "next/navigation";

import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import { ModeToggle } from "./mode-toggle";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const pathname = usePathname();
  const scrolled = useScroll(50);
  const router = useRouter();

  const selectedLayout = useSelectedLayoutSegment();

  const links = marketingConfig.mainNav;

  return (
    <header
      className={`sticky top-0 z-[100] flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"}`}
    >
      <MaxWidthWrapper className="flex h-14 max-w-7xl items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/"
            className="group relative z-30 flex h-5 items-center space-x-1.5 text-base font-semibold text-black dark:text-white"
          >
            <span className="-translate-y-0.5 text-xl duration-300 ease-in-out group-hover:-rotate-12 group-hover:scale-[1.2]">
              ✦
            </span>
            <span className="-translate-y-0.5 font-urban text-xl font-bold">
              {siteConfig.shortName}
            </span>
          </Link>

          {links && links.length > 0 ? (
            <nav className="hidden gap-6 md:flex">
              {links.map((item, index) =>
                item.subMenu ? (
                  <div key={index} className="group relative flex items-center">
                    <button
                      className={cn(
                        "flex items-center gap-1 text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                        item.subMenu.some((sub) =>
                          pathname.startsWith(sub.href),
                        )
                          ? "text-foreground"
                          : "text-foreground/60",
                      )}
                    >
                      {item.title}
                      <Icons.chevronDown className="size-4" />
                    </button>
                    <div className="absolute left-0 top-full hidden min-w-[200px] flex-col rounded-lg border bg-background py-2 shadow-md group-hover:flex">
                      {item.subMenu.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.href}
                          className={cn(
                            "px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground",
                            pathname.startsWith(sub.href)
                              ? "text-foreground"
                              : "text-foreground/60",
                            sub.disabled && "cursor-not-allowed opacity-80",
                          )}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    prefetch={true}
                    className={cn(
                      "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                      item.href.startsWith(`/${selectedLayout}`)
                        ? "text-foreground"
                        : "text-foreground/60",
                      item.disabled && "cursor-not-allowed opacity-80",
                    )}
                  >
                    {item.title}
                  </Link>
                ),
              )}
            </nav>
          ) : null}
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center space-x-3">
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
