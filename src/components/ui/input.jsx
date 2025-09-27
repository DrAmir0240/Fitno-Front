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
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              error && "text-destructive"
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {hasStartIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {startIcon}
            </div>
          )}

          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-xl border border-black bg-transparent px-3 py-2 text-base  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              hasStartIcon && "pl-10",
              hasEndIcon && "pr-10",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            ref={ref}
            {...props}
          />

          {hasEndIcon && (
            <button
              type="button"
              className={cn(
                "absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground",
                onEndIconClick && "cursor-pointer hover:text-foreground"
              )}
              onClick={onEndIconClick}
              disabled={props.disabled}
            >
              {endIcon}
            </button>
          )}
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
