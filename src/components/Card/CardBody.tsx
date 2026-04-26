"use client";

import { ReactNode } from "react";

export interface CardBodyProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingVariants = {
  none: "",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
};

export function CardBody({ 
  children, 
  className = "", 
  padding = "none" 
}: CardBodyProps) {
  return (
    <div className={`${paddingVariants[padding]} ${className}`}>
      {children}
    </div>
  );
}