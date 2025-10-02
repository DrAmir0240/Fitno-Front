import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-blue-400 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#289DFC] text-white hover:bg-blue-600 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 transition-colors duration-300",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:text-white dark:hover:bg-red-700 transition-colors duration-300",
        outline:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors duration-300",
        ghost:
          "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-colors duration-300",
        link: "text-blue-600 underline-offset-4 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300",
        custom: "",
      },
      size: {
        default: "h-12 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-14 rounded-md px-8 text-base",
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
          <span className="inline-flex items-center ml-2 rtl:ml-0 rtl:mr-2 transition-colors duration-300">
            {startIcon}
          </span>
        )}

        {children}

        {endIcon && (
          <span className="inline-flex items-center mr-2 rtl:mr-0 rtl:ml-2 transition-colors duration-300">
            {endIcon}
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };