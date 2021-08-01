const navSlide = () => {
   
const burger = document.querySelector('.burger');
const nav = document.querySelector('#nav-links');
const navLinks = document.querySelectorAll('#nav-links li');


burger.addEventListener('click',() => {
    nav.classList.toggle('navl');


    navLinks.forEach((link, index) => {
     
        if (link.style.animation) {
            link.style.animation = '';
        } else {
           
          
    link.style.animation = `fade 1.5s ease forwards  ${index / 7}s `;
   
   

        }
    

});
});




}
navSlide();