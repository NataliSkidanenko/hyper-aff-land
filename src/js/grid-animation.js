const grid = document.getElementById('grid');
if (document.body.scrollWidth > 1000) {
  document.addEventListener('mousemove', (e) => {
    grid.style.top = `${document.body.scrollHeight - e.clientY - grid.clientWidth / 2}px`;
    grid.style.left = `${document.body.scrollWidth - e.clientX - grid.clientWidth / 2}px`;
  });
}
