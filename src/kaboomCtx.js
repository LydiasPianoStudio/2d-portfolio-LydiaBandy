import kaboom from "https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs"; // Use the aliased import // Use absolute path
import { scaleFactor } from "./constants.js"; // Add .js extension

export const k = kaboom({
  canvas: document.getElementById("gameCanvas"),
  width: window.innerWidth,
  height: window.innerHeight,
  scale: 1,
  touchToMouse: true,
  debug: false,
  background: [0, 19, 222], // This restores your blue background
});
