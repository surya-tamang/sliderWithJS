let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');
let slider = document.querySelector('.slider');
let images = document.querySelectorAll('img');

let slideNumNext = 1;

let slideNumPrev = images.length;

nextBtn.addEventListener('click',()=>{
    slideNumNext < images.length ? slideNext() : firstSlide();
})


prevBtn.addEventListener('click',()=>{
    slideNumNext > 1 ? slidePrev() : lastSlide ();
})



function slideNext() {
        slider.style.transform = `translateX(-${slideNumNext * 100}%)`;
        slideNumNext ++;
}
function slidePrev() {
        slider.style.transform = `translateX(-${(slideNumNext-2) * 100}%)`;
        slideNumNext --;
}

function firstSlide(){
    slider.style.transform = `translateX(0)`;
    slideNumNext = 1;
}
function lastSlide(){
    slider.style.transform = `translateX(-${(images.length - 1)*100}%)`;
    slideNumNext = 1;
}