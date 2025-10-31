// HERO STAR/PARTICLE ANIMATION
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');
let width, height;
function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = document.querySelector('.hero').offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
const STAR_COUNT = 60;
const stars = [];
for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.7 + 0.6,
    dx: (Math.random() - 0.5) * 0.18,
    dy: 0.9 + Math.random() * 1.85
  });
}
function animate() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#fff';
  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
    ctx.fill();
    s.x += s.dx;
    s.y += s.dy;
    if (s.y > height) { s.y = -5; s.x = Math.random() * width; }
    if (s.x < 0) s.x = width;
    if (s.x > width) s.x = 0;
  }
  requestAnimationFrame(animate);
}
animate();

// HAMBURGER NAVIGATION DRAWER
const navToggle = document.querySelector('.nav-toggle');
const navDrawer = document.getElementById('navDrawer');
const navClose = document.querySelector('.nav-close');
const navDrawerBg = document.querySelector('.nav-drawer-bg');
navToggle.onclick = () => {
  navDrawer.style.display = "block";
  navDrawerBg.style.display = "block";
  document.body.style.overflow = "hidden";
};
navClose.onclick = () => {
  navDrawer.style.display = "none";
  navDrawerBg.style.display = "none";
  document.body.style.overflow = "";
};
navDrawerBg.onclick = navClose;

// SMOOTH SCROLL
window.scrollToSection = function(id) {
  const section = document.getElementById(id);
  if(section) section.scrollIntoView({behavior: "smooth"});
}

// KNOWN BUTTON IS A NORMAL <a>; IT OPENS NEW WINDOW if target="_blank"
// If you want a <button> instead, add onclick="window.open('https://en.wikipedia.org/wiki/M._A._Yusuff_Ali','_blank')"

