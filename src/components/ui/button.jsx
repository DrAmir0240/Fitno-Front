import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium  ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#289DFC] text-slate-50 hover:bg-blue-500 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 ",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-white dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4  dark:text-slate-50",
        custom: "",
      },
      size: {
        default: "h-12 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      startIcon,
      endIcon,
      color,
      href,
      children,
      ...props
    },
    ref
  ) => {
    let Comp = asChild ? Slot : "button";

    if (href) {
      Comp = Link;
    } else if (asChild && href) {
      Comp = Link;
    }

    const getColorStyle = () => {
      if (!color) return {};

      if (variant === "custom") {
        return {
          backgroundColor: color,
          color: "#FFFFFF",
        };
      }

      return {
        color: color,
        borderColor: color,
      };
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={getColorStyle()}
        href={href}
        ref={ref}
        {...props}
      >
        {startIcon && (
          <span className="inline-flex items-center ml-2">{startIcon}</span>
        )}

        {children}

        {endIcon && (
          <span className="inline-flex items-center mr-2">{endIcon}</span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
