const toggleSidebar = document.querySelectorAll(".toggleSidebar");
const appContent = document.getElementById("app");

toggleSidebar.forEach((ele) => {
  ele.addEventListener("click", () => {
    appContent.classList.toggle("active");
  });
});
