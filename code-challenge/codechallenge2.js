function windowResize() {
  const currentWidth = window.innerWidth;

  document.body.classList.toggle(
    "middle",
    currentWidth >= 800 && currentWidth < 1200
  );
  document.body.classList.toggle("max", currentWidth >= 1200);
}

window.addEventListener("resize", windowResize);
