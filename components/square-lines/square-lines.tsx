"use client";

import SquareLine from "./square-line";

export default function SquareLines() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 min-h-full w-full overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1/2 bg-neutral-100 dark:bg-neutral-800">
        <div className="pointer-events-none absolute inset-0 z-30 h-full w-full bg-gradient-to-tl from-white from-50% via-transparent via-90% to-transparent to-100% dark:from-neutral-950"></div>
        <div className="flex h-full w-full flex-col divide-y divide-dashed divide-neutral-300 border-l border-t border-neutral-300 dark:divide-neutral-700 dark:border-neutral-900">
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/2 bg-neutral-100 dark:bg-neutral-800">
        <div className="pointer-events-none absolute inset-0 z-30 h-full w-full bg-gradient-to-tr from-white from-50% via-transparent via-90% to-transparent to-100% dark:from-neutral-950"></div>
        <div className="flex h-full w-full flex-col divide-y divide-dashed divide-neutral-300 border-l border-t border-neutral-300 dark:divide-neutral-700 dark:border-neutral-900">
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
        </div>
      </div>
    </div>
  );
}
