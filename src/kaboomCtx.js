import kaboom from "../node_modules/kaboom/dist/kaboom.mjs";
import { scaleFactor } from "./constants.js";

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  debug: false,
});
