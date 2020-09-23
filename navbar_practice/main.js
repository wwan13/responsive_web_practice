const toggleBtn = document.querySelector('.navbar_toggle');
const menus = document.querySelector('.navbar_menus');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menus.classList.toggle('active');
    icons.classList.toggle('active');
});