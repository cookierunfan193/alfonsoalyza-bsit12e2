const text1 = document.getElementById("text1");
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  if (sidebar.style.width === '150px') {
    sidebar.style.width = '0';
  } else {
    sidebar.style.width = '150px';
  }
});



const menuButton = document.getElementById("text2");
const Intro = document.getElementById("Intro");
menuButton.addEventListener("click", () => {
  Intro.classList.toggle("open");
});



