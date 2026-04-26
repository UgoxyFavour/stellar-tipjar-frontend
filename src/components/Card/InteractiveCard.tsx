"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardProps } from "./index";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface InteractiveCardProps extends Omit<CardProps, "children" | "onClick"> {
  children: ReactNode;
  onClick?: () => void;
  onDoubleClick?: () => void;
  selected?: boolean;
  selectable?: boolean;
  ripple?: boolean;
  pressEffect?: boolean;
}

export function InteractiveCard({
  children,
  onClick,
  onDoubleClick,
  selected = false,
  selectable = false,
  ripple = true,
  pressEffect = true,
  className = "",
  ...cardProps
}: InteractiveCardProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const prefersReduced = useReducedMotion();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick();
    }

    if (ripple && !prefersReduced) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x, y };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    }
  };

  const cardContent = (
    <Card
      className={[
        "relative overflow-hidden",
        (onClick || selectable) && "cursor-pointer",
        selected && "ring-2 ring-purple-500 ring-offset-2 dark:ring-offset-gray-800",
        selectable && "hover:ring-2 hover:ring-purple-300 hover:ring-offset-2 dark:hover:ring-purple-600 dark:hover:ring-offset-gray-800",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={handleClick}
      onDoubleClick={onDoubleClick}
      hoverable={!!onClick}
      {...cardProps}
    >
      {children}
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full bg-purple-400/30 pointer-events-none"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </Card>
  );

  if (!prefersReduced && pressEffect && (onClick || onDoubleClick)) {
    return (
      <motion.div
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}