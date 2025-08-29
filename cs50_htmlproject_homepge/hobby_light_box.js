// make all gallery images clickable
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
  });
});

// click anywhere to close
document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").style.display = "none";
});
