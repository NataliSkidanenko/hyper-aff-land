const grid = document.getElementById('grid');

if (grid && document.body.scrollWidth > 1000) {
  document.addEventListener('mousemove', (e) => {
    grid.style.top = `${document.body.scrollWidth - e.clientY - grid.clientWidth / 2}px`;
    grid.style.left = `${document.body.scrollWidth - e.clientX - grid.clientWidth / 2}px`;
  });
}
