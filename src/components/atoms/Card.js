import React from "react";

const Card = ({
  children,
  title,
  subtitle,
  className = "",
  padding = "p-6",
  shadow = "shadow-sm",
  border = "border",
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-lg ${shadow} ${border} ${padding} ${className}`}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>
          )}
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
