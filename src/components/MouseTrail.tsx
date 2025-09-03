'use client';

import { useEffect } from "react";

const MouseTrail = () => {
  useEffect(() => {
    const createTrail = (e: MouseEvent) => {
      const trail = document.createElement("div");
      trail.className = "mouse-trail";
      document.documentElement.appendChild(trail); // Append to <html>

      // Position the trail
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;

      // Remove trail after animation
      setTimeout(() => {
        trail.remove();
      }, 500);
    };

    // Attach event listener
    window.addEventListener("mousemove", createTrail);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", createTrail);
    };
  }, []);

  return null; // No visible component
};

export default MouseTrail;
