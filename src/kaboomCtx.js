import kaboom from "/node_modules/kaboom/dist/kaboom.mjs"; // Use absolute path
import { scaleFactor } from "./constants.js"; // Add .js extension

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  debug: false,
});
