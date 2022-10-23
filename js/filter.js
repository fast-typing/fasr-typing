let forms = document.getElementById('forms');

function filterShowHide() {
    if (forms.style.opacity == '0'){
        forms.classList.add('filters-animation-intro')
        
        setTimeout(() => {
            forms.classList.remove('filters-animation-intro')
        }, 500);
        
        forms.style.opacity = '1'
    } else {
        forms.classList.add('filters-animation-outro')
        
        setTimeout(() => {
            forms.classList.remove('filters-animation-outro')
        }, 500);
        
        forms.style.opacity = '0'
    }
}