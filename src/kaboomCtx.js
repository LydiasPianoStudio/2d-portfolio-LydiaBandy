import kaboom from "https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs"; // Use the aliased import // Use absolute path
import { scaleFactor } from "./constants.js"; // Add .js extension

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  debug: false,
});
