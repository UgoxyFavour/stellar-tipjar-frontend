"use client";

import { ReactNode } from "react";
import { Card, CardProps } from "./index";
import { OptimizedImage } from "@/components/OptimizedImage";

export interface ImageCardProps extends Omit<CardProps, "children"> {
  imageUrl: string;
  imageAlt: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  imageHeight?: "sm" | "md" | "lg";
  overlay?: boolean;
}

const imageHeights = {
  sm: "h-32",
  md: "h-48",
  lg: "h-64",
};

export function ImageCard({
  imageUrl,
  imageAlt,
  title,
  description,
  children,
  imageHeight = "md",
  overlay = false,
  className = "",
  ...cardProps
}: ImageCardProps) {
  return (
    <Card className={`overflow-hidden p-0 ${className}`} {...cardProps}>
      <div className="relative">
        <div className={`relative ${imageHeights[imageHeight]} overflow-hidden`}>
          <OptimizedImage
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 400px, 100vw"
            className="object-cover"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          )}
        </div>
        
        {overlay && (title || description) && (
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {title && (
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
            )}
            {description && (
              <p className="text-sm text-white/90">{description}</p>
            )}
          </div>
        )}
      </div>
      
      {!overlay && (title || description || children) && (
        <div className="p-6">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>
          )}
          {children}
        </div>
      )}
      
      {overlay && children && (
        <div className="p-6">
          {children}
        </div>
      )}
    </Card>
  );
}