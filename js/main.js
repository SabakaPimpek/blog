const menuBtn = document.querySelector('.hamburger');
let menuOpen = false;
const hamburger = document.querySelector('.navitem');

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        hamburger.classList.add('display');
        menuOpen = true;
       
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        hamburger.classList.remove('display');
    }
});