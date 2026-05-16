import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.05em]",
  {
    variants: {
      variant: {
        default: "border-velvet-edge bg-velvet-low text-muted-foreground",
        accent: "border-secondary bg-transparent text-secondary",
        primary: "border-primary bg-transparent text-primary"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
