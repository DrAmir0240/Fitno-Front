import * as React from "react";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef(
  (
    { className, label, error, required, options, value, onChange, ...props },
    ref
  ) => {
    const handleChange = (selectedValue) => {
      if (onChange) {
        onChange(selectedValue);
      }
    };

    return (
      <div className={cn("grid w-full gap-3", className)}>
        {label && (
          <label
            className={cn(
              "block text-sm font-medium text-gray-700 ",
              error && "text-destructive"
            )}
          >
            {label}
            {required && <span className="text-red-500 mr-1">*</span>}
          </label>
        )}

        <div className="flex gap-6 space-x-reverse">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="radio"
                name={props.name}
                value={option.value}
                checked={value === option.value}
                onChange={() => handleChange(option.value)}
                className="sr-only"
              />

              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center ml-2 transition-all duration-200",
                  value === option.value
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-300 bg-white group-hover:border-blue-400"
                )}
              >
                {value === option.value && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>

              <span
                className={cn(
                  "text-sm transition-colors duration-200",
                  value === option.value
                    ? "text-blue-600 font-medium"
                    : "text-gray-700",
                  "group-hover:text-gray-900"
                )}
              >
                {option.label}
              </span>
            </label>
          ))}
        </div>

        {error && <p className="text-sm text-destructive mt-1">{error}</p>}
      </div>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
