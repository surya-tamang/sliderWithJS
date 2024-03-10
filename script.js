let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');
let slider = document.querySelector('.slider');
let images = document.querySelectorAll('img');

let slideNumNext = 1;

let slideNumPrev = images.length;

nextBtn.addEventListener('click', slideNext)


prevBtn.addEventListener('click',slidePrev)



function slideNext() {
    if (slideNumNext < images.length) {
        slider.style.transform = `translateX(-${slideNumNext * 100}%)`;
        slideNumNext ++;
    } else {
        slider.style.transform = `translateX(0)`;
        slideNumNext = 1;
    }
}
function slidePrev() {
   
}
