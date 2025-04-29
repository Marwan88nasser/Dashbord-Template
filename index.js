const toggleSidebar = document.getElementById('toggleSidebar');
const appContent = document.getElementById('app')

toggleSidebar.addEventListener('click', () => {
  appContent.classList.toggle('active')
})