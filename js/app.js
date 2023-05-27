const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    nav.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    nav.style.backgroundColor = "";
  }
});
