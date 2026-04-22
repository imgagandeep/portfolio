"use client";

import { useState } from "react";
import Image from "next/image";

import { Icons } from "../shared/icons";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

const MAX_DURATION = 4550;

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function WidgetMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [value, setValue] = useState([1456]);

  return (
    <div
      id="widget-music-player"
      className="static-widget rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200 dark:border-slate-900 dark:bg-slate-800 dark:shadow-black"
    >
      <div className="space-y-6 p-4 pb-6 sm:space-y-8 sm:p-10 sm:pb-8 lg:space-y-6 lg:p-6 xl:space-y-8 xl:p-10 xl:pb-8">
        <div className="flex items-center space-x-4">
          <Image
            src="/_static/images/audio.jpeg"
            alt=""
            width="88"
            height="88"
            className="flex-none rounded-lg bg-slate-100"
            loading="lazy"
          />
          <div className="min-w-0 flex-auto space-y-1 font-semibold">
            <p className="text-sm leading-6 text-blue-500 dark:text-blue-400">
              <abbr title="Episode">Ep.</abbr> 128
            </p>
            <h2 className="truncate text-sm leading-6 text-slate-500 dark:text-slate-400">
              Scaling CSS at Heroku with Utility Classes
            </h2>
            <p className="text-lg text-slate-900 dark:text-slate-50">
              Full Stack Radio
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="relative">
            <Slider
              value={value}
              onValueChange={setValue}
              min={0}
              max={MAX_DURATION}
              step={1}
            />
          </div>
          <div className="flex justify-between text-sm font-medium tabular-nums leading-6">
            <div className="text-blue-500 dark:text-slate-100">
              {formatTime(value[0] ?? 0)}
            </div>
            <div className="text-slate-500 dark:text-slate-400">
              {formatTime(MAX_DURATION)}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center rounded-b-xl bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200">
        <div className="flex flex-auto items-center justify-evenly">
          <Button type="button" variant="ghost" size="icon">
            <Icons.bookmark className="size-4" />
          </Button>
          <Button type="button" variant="ghost" size="icon">
            <Icons.previous className="size-5" fill="currentColor" />
          </Button>
          <Button type="button" variant="ghost" size="icon">
            <Icons.rotateLeft className="size-5" strokeWidth={2.5} />
          </Button>
        </div>
        <Button
          type="button"
          variant="ghost"
          onClick={() => setIsPlaying((prev) => !prev)}
          className="flex size-20 items-center justify-center rounded-full bg-white text-slate-900 shadow-md ring-1 ring-slate-900/5 dark:bg-slate-100 dark:text-slate-700"
        >
          {isPlaying ? (
            <Icons.pause className="size-8" fill="currentColor" />
          ) : (
            <Icons.play className="size-8" fill="currentColor" />
          )}
        </Button>
        <div className="flex flex-auto items-center justify-evenly">
          <Button type="button" variant="ghost" size="icon">
            <Icons.rotateRight className="size-5" strokeWidth={2.5} />
          </Button>
          <Button type="button" variant="ghost" size="icon">
            <Icons.next className="size-5" fill="currentColor" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-6 w-7 rounded-lg p-0 text-xs font-semibold text-slate-500 ring-2 ring-inset ring-slate-500 dark:bg-slate-500 dark:text-slate-100 dark:ring-0"
          >
            1x
          </Button>
        </div>
      </div>
    </div>
  );
}
