import kaboom from "https://cdn.jsdelivr.net/npm/kaboom@3000.0.0-beta.2/dist/kaboom.mjs";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scaleFactor = 4;
const dialogueData = {
  pc: `
   <div style="text-align: center; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
    <p>
      👋 Hi, I’m <strong>Lydia Bandy</strong> — software engineer, music composer, and music educator.
    </p>
   
    <p>
      I graduated from <strong>Joy of Coding Academy</strong> (May–Dec 2024) with a strong foundation in
      <strong>computer science fundamentals</strong> and <strong>data structures</strong>.
      During my internship, I mastered algorithms, built full-stack apps, and solved technical challenges on platforms like
      <em>HackerRank</em>.
    </p>

    <p>
      The program emphasized both theoretical and hands-on learning — from writing clean, testable code to using
      <strong>Python, React, TypeScript, Next.js and Node.js</strong> in real-world projects. I also gained experience with
      <strong>GitHub collaboration, version control,</strong> and <strong>unit testing</strong> to ensure production-ready code.
    </p>
    <p>
      I’m passionate about <strong>music and technology</strong>, and I love how they intersect. I’m excited to apply my
      skills in a software engineering role, where I can contribute to innovative projects and continue learning.
    </p>
    <p>
      💻 See more on my
      <a href="https://github.com/LydiasPianoStudio" target="_blank">GitHub</a> or connect on
      <a href="https://linkedin.com/in/lydia-bandy-2b160745/" target="_blank">LinkedIn</a>!
    <p> Here is my resume: <a href="https://github.com/LydiasPianoStudio/Resume/blob/main/Lydia%20Bandy%20Resume%20Github.pdf" target="_blank">Lydia Bandy Software Engineer</a>
  </p>
  </div>
`,
  "cs-degree": `
 <div style="text-align: center; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
    <p>
      I attended <strong>McDaniel College</strong>, receiving a B.A. in Music.
    </p>
    <img src="./McDanielCollege.jpg" width="200" height="160" alt="McDaniel College Degree" style="margin: 10px 0; border-radius: 8px;" />
    
    <p>
      For over 25 years, I've been a <strong>professional harpist, pianist, and award-winning music educator</strong>.
    </p>
    <p>
      🎵 I currently rank among the <strong>Top 5 Piano Teachers in Maryland</strong> and was awarded 
      <strong>Carroll's Best in Music Lessons (2022)</strong>.
    </p>
    <p>
      I offer private lessons and am available for performances.<br>
      👉 <a href="https://lydiaspianostudio.com/contact/" target="_blank">Contact Me</a>
    </p>
    <p>
      Curious how music and coding connect? Read my blog:<br>
      💻 <a href="https://lydiaspianostudio.com/2024/11/05/bridging-music-and-coding/" target="_blank"><em>Music and Coding</em></a>
    </p>
  </div>
`,
  "sofa-table": `
  <div style="text-align: center; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
    <p>🎹 I love relaxing on the couch and uploading harp and piano videos to my YouTube and TikTok channels.</p>
    <p>
      📺 Subscribe on YouTube: 
      <a href="https://youtube.com/@lydiaspianostudio" target="_blank">@LydiasPianoStudio</a>
    </p>
    <p>
      🎵 Follow on TikTok for short-form music fun: 
      <a href="https://www.tiktok.com/@lydiaspianostudio" target="_blank">@lydiaspianostudio</a>
    </p>
    <p>🎮 I'm also a HUGE gamer and longtime Final Fantasy fan.</p>
    <p>Here’s a throwback — my entry for a Final Fantasy contest in 2014:</p>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/OP11fdAAoJM?si=tc7VCVeIiFK0Xxj4" 
      title="Final Fantasy Contest Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
`,
  tv: `
<div style="text-align: center; font-family: 'Segoe UI', sans-serif; line-height: 1.6; max-width: 100%; overflow-x: hidden;">
  <p>📺 What’s your favorite comedy show?</p>
  <p>I love kicking back and watching <strong>The Office</strong> — it never gets old!</p>
  <p>So naturally, I made a <em>Hangman Game</em> based on it 😄</p>
  <p>I made it using basic HTML, CSS, and JavaScript — check it out 👉:</p>
  <p>
    <a href="https://lydiaspianostudio.github.io/Hangman-Game/" target="_blank">
      The Office Hangman Game
    </a>
  </p>
  <img src="./Hangman_Office_Edition.png" style="width: 100%; max-width: 300px; height: auto; margin-top: 10px; border-radius: 8px;" alt="The Office Hangman Game" />
</div>
`,
  bed: `
  <div style="text-align: center; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
    <p>🛏️ Not only am I a software engineer, I’m also a music composer! 🎶🎹</p>
    <p>Having trouble sleeping? Drift off with my album <strong>"Piano Pearls"</strong> — peaceful piano music to soothe your soul. 👶🏻💤</p>
    <iframe style="border-radius:12px; margin-top: 10px;" 
      src="https://open.spotify.com/embed/artist/52xxPzgfdnhflFnTu5g0OY?utm_source=generator" 
      width="100%" height="352" frameBorder="0" allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
    </iframe>
    <p style="margin-top: 10px;">🎧 Follow me on Spotify for more calming harp and piano music!</p>
  </div>
`,
  resume: `<div style="text-align: center; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
  <p><strong>Freelance Web Developer</strong></p>
  <p>
    I created this simple but effective landing page for 
    <a href="https://albertbandy.com/" target="_blank">Al's Woodcraft Creation</a>, an Etsy-based woodworking business.
    By implementing smart SEO tactics and marketing strategies, I helped boost his sales by <strong>80%</strong>!
  </p>
  <img src="./AlsWoodcraft.png" width="300" height="240" alt="Al's Woodcraft Creation" style="margin: 20px auto; display: block; border-radius: 8px;" />
  <p> 
    Need a website for your small business or personal brand? I'm available for freelance work! 
    <br>Whether it's a landing page, portfolio, or custom site — I’d love to help bring your vision to life.
    <br>  
      👉 <a href="https://lydiaspianostudio.com/contact/" target="_blank">Contact Me</a>
    </p>
  </p>
</div>
`,
  projects: `
  <div style="text-align: left; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
    <p>💻 My portfolio includes:</p>

    <ul style="list-style: none; padding-left: 0;">
      <li>
        🧠 <a href="https://github.com/LydiasPianoStudio/MERN-AI-ChatBot-App" target="_blank"><strong>Johnny5</strong></a> — a MERN stack ChatGPT-style clone. 
      </li>
      <img src="./JohnnyChatExample.png" width="400" style="height: auto; margin: 20px auto; display: block; border-radius: 8px;" alt="Johnny Chat Bot" />
      
      <li>
        🎮 <a href="https://github.com/LydiasPianoStudio/react-trivia" target="_blank"><strong>React Trivia Game</strong></a> — built with React, TypeScript, JavaScript, and Bootstrap.
      </li>
      <img src="./MusicHistoryQuiz2.png" width="300" height="240" alt="Music Quiz" style="margin: 20px auto; display: block; border-radius: 8px;" />
      <li>
        🎼 <a href="https://github.com/LydiasPianoStudio/-joy-of-coding--internship-solo-project-" target="_blank">
          <strong>Practice Log App</strong>
        </a> — for my piano students, using <em>Next.js, React, Tailwind, Radix UI, Prisma, MySQL, and Axios</em>.
      </li>
      <img src="./PracticeLogPage.png" width="300" height="240" alt="Practice Log Page" style="margin: 20px auto; display: block; border-radius: 8px;" />
    </ul>
  </div>
`,
  library: `  <div style="text-align: left; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
  <p>
    🧑‍💻 I’m a Junior Developer at <strong>TechJoy Software</strong> where I help bring ideas to life.
  </p>
    <p>
    Our current project is <a href="https://supportlocalusa.com/" target="_blank"><strong>SupportLocalUSA.com</strong></a> — a platform that empowers local communities by promoting their businesses online. 💼🌟
  </p>
  <img src="./SupportLocal.png" alt="Support Local USA Project" width="300" height="240" style="border-radius: 8px; margin: 20px auto; display: block;" />
  <p>
    By leveraging Agile (Scrum) methodologies to drive efficiency and participating in stand-ups, sprint planning, and backlog prioritization, I helped reduce development cycle times by 15% and increase user engagement by 20%.. 🚀
  </p>
  <p>
    Highlights:
    <ul>
      <li>✅ Reduced unit test failure rates by 35% by fixing critical 500 errors</li>
      <li>✅ Boosted ad revenue by 30% with optimized API routes for banners</li>
      <li>✅ Improved GitHub workflows, cutting Scrum delays by 40%</li>
      <li>✅ Mentored interns, increasing team productivity by 50%</li>
      <li>✅ Reached 90% code reliability with Vitest testing</li>
    </ul>
  </p>
<p>
  🚀 I'm currently looking for my next opportunity as a Software Developer! 
  <br>Let’s connect and chat on 
  <a href="https://linkedin.com/in/lydia-bandy-2b160745/" target="_blank">LinkedIn</a>.
</p>
`,
  exit: `<div style="text-align: left; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
  Thanks for stopping by and visiting me at my virtual home!  
  <img src="./LydiaBandy.jpg" alt="Lydia Bandy" width="160" height="160" style="border-radius: 50%; margin: 10px 0;" />
  <br>Feel free to check out my website at
   <a href="https://lydiaspianostudio.com/" target="_blank">LydiasPianoStudio</a>,
    just close the tab and stop by anytime!`
};
const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  debug: false
});
function displayDialogue(text, onDisplayEnd) {
  const dialogueUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");
  dialogueUI.style.display = "block";
  let index = 0;
  let currentText = "";
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }
    clearInterval(intervalRef);
  }, 1);
  const closeBtn = document.getElementById("close");
  function onCloseBtnClick() {
    onDisplayEnd();
    dialogueUI.style.display = "none";
    dialogue.innerHTML = "";
    clearInterval(intervalRef);
    closeBtn.removeEventListener("click", onCloseBtnClick);
  }
  closeBtn.addEventListener("click", onCloseBtnClick);
  addEventListener("keypress", (key) => {
    if (key.code === "Enter") {
      closeBtn.click();
    }
  });
}
function setCamScale(k2) {
  const resizeFactor = k2.width() / k2.height();
  if (resizeFactor < 1) {
    k2.camScale(k2.vec2(1));
  } else {
    k2.camScale(k2.vec2(1.5));
  }
}
const baseUrl = "/2d-portfolio-LydiaBandy/";
async function preloadAssets() {
  const font = new FontFace("monogram", `url(${baseUrl}monogram.ttf)`);
  await font.load();
  document.fonts.add(font);
  k.loadSprite("spritesheet", `${baseUrl}spritesheet.png`, {
    sliceX: 39,
    sliceY: 31,
    anims: {
      "idle-down": 952,
      "walk-down": { from: 952, to: 955, loop: true, speed: 8 },
      "idle-side": 991,
      "walk-side": { from: 991, to: 994, loop: true, speed: 8 },
      "idle-up": 1030,
      "walk-up": { from: 1030, to: 1033, loop: true, speed: 8 }
    }
  });
  k.loadSprite("map", `${baseUrl}map.png`);
  k.loadFont("monogram", `${baseUrl}monogram.ttf`);
  k.setBackground(k.Color.fromHex("#0013de"));
  const mapResponse = await fetch(`${baseUrl}map.json`);
  const mapData = await mapResponse.json();
  return { mapData };
}
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
      isInDialogue: false
    },
    "player"
  ]);
  for (const layer of layers) {
    if (layer.name === "boundaries") {
      for (const boundary of layer.objects) {
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height)
          }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name
        ]);
        if (boundary.name) {
          player.onCollide(boundary.name, () => {
            player.isInDialogue = true;
            displayDialogue(
              dialogueData[boundary.name],
              () => player.isInDialogue = false
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
  k.onMouseDown((mouseBtn) => {
    if (mouseBtn !== "left" || player.isInDialogue)
      return;
    const worldMousePos = k.toWorld(k.mousePos());
    player.moveTo(worldMousePos, player.speed);
    const mouseAngle = player.pos.angle(worldMousePos);
    const lowerBound = 50;
    const upperBound = 125;
    if (mouseAngle > lowerBound && mouseAngle < upperBound) {
      if (player.curAnim() !== "walk-up")
        player.play("walk-up");
      player.direction = "up";
      return;
    }
    if (mouseAngle < -lowerBound && mouseAngle > -upperBound) {
      if (player.curAnim() !== "walk-down")
        player.play("walk-down");
      player.direction = "down";
      return;
    }
    if (Math.abs(mouseAngle) > upperBound) {
      player.flipX = false;
      if (player.curAnim() !== "walk-side")
        player.play("walk-side");
      player.direction = "right";
      return;
    }
    if (Math.abs(mouseAngle) < lowerBound) {
      player.flipX = true;
      if (player.curAnim() !== "walk-side")
        player.play("walk-side");
      player.direction = "left";
    }
  });
  function stopAnims() {
    if (player.direction === "down")
      player.play("idle-down");
    else if (player.direction === "up")
      player.play("idle-up");
    else
      player.play("idle-side");
  }
  k.onMouseRelease(stopAnims);
  k.onKeyRelease(stopAnims);
  k.onKeyDown(() => {
    const keyMap = [
      k.isKeyDown("right"),
      k.isKeyDown("left"),
      k.isKeyDown("up"),
      k.isKeyDown("down")
    ];
    let nbOfKeyPressed = keyMap.filter(Boolean).length;
    if (nbOfKeyPressed > 1)
      return;
    if (player.isInDialogue)
      return;
    if (keyMap[0]) {
      player.flipX = false;
      if (player.curAnim() !== "walk-side")
        player.play("walk-side");
      player.direction = "right";
      player.move(player.speed, 0);
      return;
    }
    if (keyMap[1]) {
      player.flipX = true;
      if (player.curAnim() !== "walk-side")
        player.play("walk-side");
      player.direction = "left";
      player.move(-player.speed, 0);
      return;
    }
    if (keyMap[2]) {
      if (player.curAnim() !== "walk-up")
        player.play("walk-up");
      player.direction = "up";
      player.move(0, -player.speed);
      return;
    }
    if (keyMap[3]) {
      if (player.curAnim() !== "walk-down")
        player.play("walk-down");
      player.direction = "down";
      player.move(0, player.speed);
    }
  });
}
startGame();
//# sourceMappingURL=main-WXxCC2zb.js.map
