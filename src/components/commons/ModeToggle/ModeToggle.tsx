"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useThemeTransition } from "@/hooks/useThemeTransition";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { changeTheme, isTransitioning, buttonRef } = useThemeTransition();

  const handleThemeChange = (newTheme: string) => {
    const buttonElement = buttonRef.current;
    changeTheme(newTheme, buttonElement || undefined);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          animate={isTransitioning ? { scale: [1, 0.95, 1] } : {}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Button
            ref={buttonRef}
            variant="outline"
            size="icon"
            className={`cursor-pointer rounded-full transition-all duration-300 ${
              isTransitioning ? "theme-switching" : ""
            }`}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-500 ease-in-out dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all duration-500 ease-in-out dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="transition-all duration-300">
        <DropdownMenuItem
          onClick={() => handleThemeChange("light")}
          className="cursor-pointer transition-colors duration-200"
        >
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("dark")}
          className="cursor-pointer transition-colors duration-200"
        >
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("system")}
          className="cursor-pointer transition-colors duration-200"
        >
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
