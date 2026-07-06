const spotlight = document.querySelector('.spotlight');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;

// حرکت موس
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// موبایل (touch)
window.addEventListener('touchmove', (e) => {
  mouseX = e.touches[0].clientX;
  mouseY = e.touches[0].clientY;
});

// انیمیشن نرم (lerp)
function animate() {
  currentX += (mouseX - currentX) * 0.12;
  currentY += (mouseY - currentY) * 0.12;

  spotlight.style.setProperty('--x', currentX + 'px');
  spotlight.style.setProperty('--y', currentY + 'px');

  requestAnimationFrame(animate);
}

animate();