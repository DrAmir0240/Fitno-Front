import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  (
    {
      className,
      type,
      label,
      error,
      required,
      startIcon,
      endIcon,
      onEndIconClick,
      ...props
    },
    ref
  ) => {
    const hasStartIcon = !!startIcon;
    const hasEndIcon = !!endIcon;

    return (
      <div className="grid w-full gap-3">
        {label && (
          <label
            htmlFor={props.id}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300 transition-colors duration-300",
              error && "text-red-500 dark:text-red-400"
            )}
          >
            {label}
            {required && <span className="text-red-500 dark:text-red-400 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {hasStartIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 transition-colors duration-300">
              {startIcon}
            </div>
          )}

          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-white transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:border-blue-500 dark:focus-visible:border-blue-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              hasStartIcon && "pl-10",
              hasEndIcon && "pr-10",
              error && "border-red-500 dark:border-red-400 focus-visible:ring-red-500 dark:focus-visible:ring-red-400",
              className
            )}
            ref={ref}
            {...props}
          />

          {hasEndIcon && (
            <button
              type="button"
              className={cn(
                "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 transition-colors duration-300",
                onEndIconClick && "cursor-pointer hover:text-gray-600 dark:hover:text-gray-300"
              )}
              onClick={onEndIconClick}
              disabled={props.disabled}
            >
              {endIcon}
            </button>
          )}
        </div>

        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 transition-colors duration-300">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };