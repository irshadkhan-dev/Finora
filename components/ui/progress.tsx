"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

// Define the custom props including the indicatorClassName and value
interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number;
  indicatorClassName?: string;
}

// Create the Progress component with forwardRef
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ indicatorClassName, className, value = 0, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full flex-1 bg-primary transition-all",
        indicatorClassName
      )}
      style={{ transform: `translateX(${value - 100}%)` }}
    />
  </ProgressPrimitive.Root>
));

// Set display name for debugging purposes
Progress.displayName = "Progress";

export { Progress };
