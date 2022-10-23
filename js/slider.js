let slideIndex = 1;
let slider = document.querySelector('.slider')
let triangle = document.querySelector('.triangle-top')
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Функция перелистывания */
function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex =  slides.length
    }
    if (n < 1) {
        slideIndex = 1
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}

function guide() {
    if (slider.style.display == 'block'){
        slider.style.display = 'none'
        triangle.style.display = 'none'
    } else {
        slider.style.display = 'block'
        triangle.style.display = 'block'
    }
}