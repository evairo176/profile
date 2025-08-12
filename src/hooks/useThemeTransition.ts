import { useTheme } from "next-themes";
import { useState, useCallback, useRef } from "react";

export const useThemeTransition = () => {
  const { setTheme, theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const changeTheme = useCallback(
    (newTheme: string, buttonElement?: HTMLElement) => {
      if (isTransitioning) return; // Prevent multiple rapid changes

      setIsTransitioning(true);

      // Get button position for circle animation origin
      const button = buttonElement || buttonRef.current;
      let buttonRect = { top: 20, left: 20, width: 40, height: 40 };

      if (button) {
        buttonRect = button.getBoundingClientRect();
      }

      // Calculate circle animation properties
      const centerX = buttonRect.left + buttonRect.width / 2;
      const centerY = buttonRect.top + buttonRect.height / 2;

      // Calculate maximum radius to cover entire screen
      const maxRadius = Math.sqrt(
        Math.pow(Math.max(centerX, window.innerWidth - centerX), 2) +
          Math.pow(Math.max(centerY, window.innerHeight - centerY), 2),
      );

      // Create circle overlay element
      const circleOverlay = document.createElement("div");
      circleOverlay.className = "theme-circle-overlay";

      // Set initial styles for circle
      const isDarkMode = newTheme === "dark";
      const overlayColor = isDarkMode
        ? "hsl(0 0% 0%)" // Dark background
        : "hsl(0 0% 100%)"; // Light background

      circleOverlay.style.cssText = `
      position: fixed;
      top: ${centerY}px;
      left: ${centerX}px;
      width: 0;
      height: 0;
      background: ${overlayColor};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    `;

      document.body.appendChild(circleOverlay);

      // Add transition classes
      document.documentElement.classList.add("theme-transitioning");
      document.body.classList.add("theme-circle-transition");

      // Start circle expansion animation
      requestAnimationFrame(() => {
        circleOverlay.classList.add("expanding");
        circleOverlay.style.width = `${maxRadius * 2}px`;
        circleOverlay.style.height = `${maxRadius * 2}px`;
      });

      // Change theme at the middle of animation
      setTimeout(() => {
        setTheme(newTheme);
      }, 250);

      // Start circle contraction after theme change
      setTimeout(() => {
        circleOverlay.classList.remove("expanding");
        circleOverlay.classList.add("contracting");
        circleOverlay.style.width = "0";
        circleOverlay.style.height = "0";
        circleOverlay.style.opacity = "0";
      }, 350);

      // Clean up after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
        document.documentElement.classList.remove("theme-transitioning");
        document.body.classList.remove("theme-circle-transition");

        // Remove circle overlay
        if (circleOverlay.parentNode) {
          circleOverlay.parentNode.removeChild(circleOverlay);
        }
      }, 1000);
    },
    [setTheme, isTransitioning],
  );

  return {
    theme,
    changeTheme,
    isTransitioning,
    buttonRef,
  };
};
