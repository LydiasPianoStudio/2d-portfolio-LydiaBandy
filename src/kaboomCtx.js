import kaboom from "kaboom"; // Use the aliased import // Use absolute path
import { scaleFactor } from "./constants.js"; // Add .js extension

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  debug: false,
});
