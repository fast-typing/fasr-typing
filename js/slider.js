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
    if (slider.classList.contains('guideAnimIntro')){
        slider.classList.remove('guideAnimIntro')
        slider.classList.add('guideAnimOutro')
        triangle.classList.remove('guideAnimIntro')
        triangle.classList.add('guideAnimOutro')
    } else {
        slider.classList.remove('guideAnimOutro')
        slider.classList.add('guideAnimIntro')
        triangle.classList.remove('guideAnimOutro')
        triangle.classList.add('guideAnimIntro')
    }
}