import { cn } from "@/lib/utils";
import React from "react";
export interface EllipseProps extends React.HTMLAttributes<HTMLDivElement> {}
const Ellipse = React.forwardRef<HTMLDivElement, EllipseProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          `absolute z-10 bg-[#141c4899] ${className} `
        )}
      />
    );
  }
);
Ellipse.displayName = "Ellipse";
export default Ellipse;