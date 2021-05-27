


const menuBtn = document.querySelector('.menu-btn');
const proyectos = document.querySelector('.abajo');
const menuGlobal = document.querySelector('.global-nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuGlobal.classList.add('open-global-nav');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuGlobal.classList.remove('open-global-nav');
    menuOpen = false;
  }
});


const menuList = document.querySelector('.global-nav__list');
menuList.addEventListener('click',() =>{
  menuGlobal.classList.remove('open-global-nav');
  menuBtn.classList.remove('open');

})