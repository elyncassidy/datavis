// scripts/main.js
// Handle navigation button clicks

document.addEventListener("DOMContentLoaded", () => {
  const navMap = {
    btnHome: "home.html",
    btnTelevision: "television.html",
    btnAboutUs: "aboutus.html",
  };

  Object.keys(navMap).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        window.location.href = navMap[id];
      });
    }
  });
});
