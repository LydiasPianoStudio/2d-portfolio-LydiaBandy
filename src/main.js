import { dialogueData, scaleFactor } from "./constants.js";
import { k } from "./kaboomCtx.js";
import { displayDialogue, setCamScale } from "./utils.js";

// Use hardcoded path for GitHub Pages with fallback for development
const baseUrl = import.meta?.env?.BASE_URL || "/2d-portfolio-LydiaBandy/";

async function preloadAssets() {
  try {
    // Use baseUrl for loadRoot
    k.loadRoot(baseUrl);
    console.log("Starting asset load with path:", baseUrl);

    // Preload sprites with error handling
    try {
      console.log("Loading spritesheet...");
      await k.loadSprite("spritesheet", "spritesheet.png", {
        sliceX: 39,
        sliceY: 31,
        anims: {
          "idle-down": 952,
          "walk-down": { from: 952, to: 955, loop: true, speed: 8 },
          "idle-side": 991,
          "walk-side": { from: 991, to: 994, loop: true, speed: 8 },
          "idle-up": 1030,
          "walk-up": { from: 1030, to: 1033, loop: true, speed: 8 },
        },
      });
      console.log("✓ Spritesheet loaded");

      console.log("Loading map sprite...");
      await k.loadSprite("map", "map.png");
      console.log("✓ Map sprite loaded");
    } catch (spriteError) {
      console.error("Sprite loading failed:", spriteError);
      console.log("Full asset paths:", {
        spritesheet: `${baseUrl}spritesheet.png`,
        map: `${baseUrl}map.png`,
      });
      throw spriteError;
    }

    k.setBackground(k.Color.fromHex("#0013de"));

    // Load map data with error handling
    try {
      console.log("Loading map data...");
      const mapResponse = await fetch(`${baseUrl}map.json`);
      if (!mapResponse.ok) {
        throw new Error(`HTTP error! status: ${mapResponse.status}`);
      }
      const mapData = await mapResponse.json();
      console.log("✓ Map data loaded");
      return { mapData };
    } catch (mapError) {
      console.error("Map data loading failed:", mapError);
      console.log("Attempted map URL:", `${baseUrl}map.json`);
      throw mapError;
    }
  } catch (error) {
    console.error("Asset loading failed:", error);
    throw error;
  }
}

// --- Start the Game ---
async function startGame() {
  try {
    const { mapData } = await preloadAssets();
    console.log("Assets loaded!");

    k.scene("main", () => setupScene(mapData));
    k.go("main");
  } catch (err) {
    console.error("Failed to preload assets:", err);
  }
}

// --- Scene Setup ---
function setupScene(mapData) {
  const layers = mapData.layers;

  const map = k.add([k.sprite("map"), k.pos(0), k.scale(scaleFactor)]);

  const player = k.make([
    k.sprite("spritesheet", { anim: "idle-down" }),
    k.area({ shape: new k.Rect(k.vec2(0, 3), 10, 10) }),
    k.body(),
    k.anchor("center"),
    k.pos(),
    k.scale(scaleFactor),
    {
      speed: 250,
      direction: "down",
      isInDialogue: false,
    },
    "player",
  ]);

  // Setup layers
  for (const layer of layers) {
    if (layer.name === "boundaries") {
      for (const boundary of layer.objects) {
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
          }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);

        if (boundary.name) {
          player.onCollide(boundary.name, () => {
            player.isInDialogue = true;
            displayDialogue(
              dialogueData[boundary.name],
              () => (player.isInDialogue = false)
            );
          });
        }
      }
      continue;
    }

    if (layer.name === "spawnpoints") {
      for (const entity of layer.objects) {
        if (entity.name === "player") {
          player.pos = k.vec2(
            (map.pos.x + entity.x) * scaleFactor,
            (map.pos.y + entity.y) * scaleFactor
          );
          k.add(player);
          continue;
        }
      }
    }
  }

  setCamScale(k);

  k.onResize(() => setCamScale(k));

  k.onUpdate(() => {
    k.camPos(player.worldPos().x, player.worldPos().y - 100);
  });

  // Mouse movement
  k.onMouseDown((mouseBtn) => {
    if (mouseBtn !== "left" || player.isInDialogue) return;

    const worldMousePos = k.toWorld(k.mousePos());
    player.moveTo(worldMousePos, player.speed);

    const mouseAngle = player.pos.angle(worldMousePos);
    const lowerBound = 50;
    const upperBound = 125;

    if (mouseAngle > lowerBound && mouseAngle < upperBound) {
      if (player.curAnim() !== "walk-up") player.play("walk-up");
      player.direction = "up";
      return;
    }

    if (mouseAngle < -lowerBound && mouseAngle > -upperBound) {
      if (player.curAnim() !== "walk-down") player.play("walk-down");
      player.direction = "down";
      return;
    }

    if (Math.abs(mouseAngle) > upperBound) {
      player.flipX = false;
      if (player.curAnim() !== "walk-side") player.play("walk-side");
      player.direction = "right";
      return;
    }

    if (Math.abs(mouseAngle) < lowerBound) {
      player.flipX = true;
      if (player.curAnim() !== "walk-side") player.play("walk-side");
      player.direction = "left";
    }
  });

  function stopAnims() {
    if (player.direction === "down") player.play("idle-down");
    else if (player.direction === "up") player.play("idle-up");
    else player.play("idle-side");
  }

  k.onMouseRelease(stopAnims);
  k.onKeyRelease(stopAnims);

  // Keyboard movement
  k.onKeyDown(() => {
    const keyMap = [
      k.isKeyDown("right"),
      k.isKeyDown("left"),
      k.isKeyDown("up"),
      k.isKeyDown("down"),
    ];

    let nbOfKeyPressed = keyMap.filter(Boolean).length;
    if (nbOfKeyPressed > 1) return;
    if (player.isInDialogue) return;

    if (keyMap[0]) {
      player.flipX = false;
      if (player.curAnim() !== "walk-side") player.play("walk-side");
      player.direction = "right";
      player.move(player.speed, 0);
      return;
    }

    if (keyMap[1]) {
      player.flipX = true;
      if (player.curAnim() !== "walk-side") player.play("walk-side");
      player.direction = "left";
      player.move(-player.speed, 0);
      return;
    }

    if (keyMap[2]) {
      if (player.curAnim() !== "walk-up") player.play("walk-up");
      player.direction = "up";
      player.move(0, -player.speed);
      return;
    }

    if (keyMap[3]) {
      if (player.curAnim() !== "walk-down") player.play("walk-down");
      player.direction = "down";
      player.move(0, player.speed);
    }
  });
}

// Start the game
startGame();
