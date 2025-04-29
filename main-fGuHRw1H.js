import y from"https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function l(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(a){if(a.ep)return;a.ep=!0;const i=l(a);fetch(a.href,i)}})();const p=4,h={pc:`
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
`,"cs-degree":`
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
`,"sofa-table":`
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
`,tv:`
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
`,bed:`
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
`,resume:`<div style="text-align: center; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
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
`,projects:`
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
`,library:`  <div style="text-align: left; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
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
`,exit:`<div style="text-align: left; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">
  Thanks for stopping by and visiting me at my virtual home!  
  <img src="./LydiaBandy.jpg" alt="Lydia Bandy" width="160" height="160" style="border-radius: 50%; margin: 10px 0;" />
  <br>Feel free to check out my website at
   <a href="https://lydiaspianostudio.com/" target="_blank">LydiasPianoStudio</a>,
    just close the tab and stop by anytime!`},t=y({global:!1,touchToMouse:!0,canvas:document.getElementById("game"),debug:!1});function b(n,s){const l=document.getElementById("textbox-container"),e=document.getElementById("dialogue");l.style.display="block";let a=0,i="";const o=setInterval(()=>{if(a<n.length){i+=n[a],e.innerHTML=i,a++;return}clearInterval(o)},1),r=document.getElementById("close");function d(){s(),l.style.display="none",e.innerHTML="",clearInterval(o),r.removeEventListener("click",d)}r.addEventListener("click",d),addEventListener("keypress",c=>{c.code==="Enter"&&r.click()})}function u(n){n.width()/n.height()<1?n.camScale(n.vec2(1)):n.camScale(n.vec2(1.5))}var m,f;const g=((f=(m=import.meta)==null?void 0:m.env)==null?void 0:f.BASE_URL)||"/2d-portfolio-LydiaBandy/";async function w(){try{return t.loadRoot(g),console.log("Loading assets from:",g),t.loadSprite("spritesheet","spritesheet.png",{sliceX:39,sliceY:31,anims:{"idle-down":952,"walk-down":{from:952,to:955,loop:!0,speed:8},"idle-side":991,"walk-side":{from:991,to:994,loop:!0,speed:8},"idle-up":1030,"walk-up":{from:1030,to:1033,loop:!0,speed:8}}}),t.loadSprite("map","map.png"),t.setBackground(t.Color.fromHex("#0013de")),{mapData:await(await fetch(`${g}map.json`)).json()}}catch(n){throw console.error("Failed to preload assets:",n),n}}async function v(){try{const{mapData:n}=await w();console.log("Assets loaded!"),t.scene("main",()=>k(n)),t.go("main")}catch(n){console.error("Failed to preload assets:",n)}}function k(n){const s=n.layers,l=t.add([t.sprite("map"),t.pos(0),t.scale(p)]),e=t.make([t.sprite("spritesheet",{anim:"idle-down"}),t.area({shape:new t.Rect(t.vec2(0,3),10,10)}),t.body(),t.anchor("center"),t.pos(),t.scale(p),{speed:250,direction:"down",isInDialogue:!1},"player"]);for(const i of s){if(i.name==="boundaries"){for(const o of i.objects)l.add([t.area({shape:new t.Rect(t.vec2(0),o.width,o.height)}),t.body({isStatic:!0}),t.pos(o.x,o.y),o.name]),o.name&&e.onCollide(o.name,()=>{e.isInDialogue=!0,b(h[o.name],()=>e.isInDialogue=!1)});continue}if(i.name==="spawnpoints"){for(const o of i.objects)if(o.name==="player"){e.pos=t.vec2((l.pos.x+o.x)*p,(l.pos.y+o.y)*p),t.add(e);continue}}}u(t),t.onResize(()=>u(t)),t.onUpdate(()=>{t.camPos(e.worldPos().x,e.worldPos().y-100)}),t.onMouseDown(i=>{if(i!=="left"||e.isInDialogue)return;const o=t.toWorld(t.mousePos());e.moveTo(o,e.speed);const r=e.pos.angle(o),d=50,c=125;if(r>d&&r<c){e.curAnim()!=="walk-up"&&e.play("walk-up"),e.direction="up";return}if(r<-d&&r>-c){e.curAnim()!=="walk-down"&&e.play("walk-down"),e.direction="down";return}if(Math.abs(r)>c){e.flipX=!1,e.curAnim()!=="walk-side"&&e.play("walk-side"),e.direction="right";return}Math.abs(r)<d&&(e.flipX=!0,e.curAnim()!=="walk-side"&&e.play("walk-side"),e.direction="left")});function a(){e.direction==="down"?e.play("idle-down"):e.direction==="up"?e.play("idle-up"):e.play("idle-side")}t.onMouseRelease(a),t.onKeyRelease(a),t.onKeyDown(()=>{const i=[t.isKeyDown("right"),t.isKeyDown("left"),t.isKeyDown("up"),t.isKeyDown("down")];if(!(i.filter(Boolean).length>1)&&!e.isInDialogue){if(i[0]){e.flipX=!1,e.curAnim()!=="walk-side"&&e.play("walk-side"),e.direction="right",e.move(e.speed,0);return}if(i[1]){e.flipX=!0,e.curAnim()!=="walk-side"&&e.play("walk-side"),e.direction="left",e.move(-e.speed,0);return}if(i[2]){e.curAnim()!=="walk-up"&&e.play("walk-up"),e.direction="up",e.move(0,-e.speed);return}i[3]&&(e.curAnim()!=="walk-down"&&e.play("walk-down"),e.direction="down",e.move(0,e.speed))}})}v();
