import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

import React from "react";

interface ShapetoolProps {
  onClick: () => void;
  icon: LucideIcon | IconType;
  iconClassName?: string;
}

export const ShapeTool = ({
  onClick,
  icon: Icon,
  iconClassName,
}: ShapetoolProps) => {
  return (
    <button onClick={onClick} className="aspect-square border rounded-md p-5">
      <Icon className={cn("h-full w-full", iconClassName)} />
    </button>
  );
};
