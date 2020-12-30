var today = new Date();

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", "dark");
  console.log("nata");
}
function darkModeTime() {
  let hour = today.getHours();
  hour >= 17 || hour <= 6
    ? toggleDarkMode()
    : localStorage.setItem("theme", "light");
}
darkModeTime();
