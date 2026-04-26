"use client";

import { ReactNode } from "react";

export interface CardHeaderProps {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  avatar?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function CardHeader({
  title,
  subtitle,
  icon,
  avatar,
  actions,
  children,
  className = "",
}: CardHeaderProps) {
  if (children) {
    return (
      <div className={`flex items-center justify-between mb-4 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <div className="flex items-center gap-3">
        {(icon || avatar) && (
          <div className="flex-shrink-0">
            {avatar || (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                {icon}
              </div>
            )}
          </div>
        )}
        <div className="min-w-0 flex-1">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {actions && <div className="flex-shrink-0">{actions}</div>}
    </div>
  );
}