"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
      <SliderPrimitive.Range className="absolute h-full bg-blue-500 dark:bg-blue-400" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="flex h-4 w-4 items-center justify-center rounded-full bg-white shadow ring-2 ring-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:ring-blue-400">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 ring-1 ring-inset ring-slate-900/5 dark:bg-blue-400" />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
