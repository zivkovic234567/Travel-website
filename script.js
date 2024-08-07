
// Header when scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

const sidebar = document.querySelector('.sidebar');
function showSidebar(){
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    sidebar.style.display = 'none';
}