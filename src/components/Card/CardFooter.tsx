"use client";

import { ReactNode } from "react";

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  justify?: "start" | "center" | "end" | "between";
}

const justifyVariants = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export function CardFooter({ 
  children, 
  className = "", 
  bordered = true,
  justify = "end"
}: CardFooterProps) {
  return (
    <div 
      className={[
        "flex items-center gap-3 mt-4",
        bordered && "pt-4 border-t border-gray-200 dark:border-gray-700",
        justifyVariants[justify],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}