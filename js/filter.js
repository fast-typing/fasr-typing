let forms = document.getElementById('forms');

function filterShowHide() {
    if (forms.style.opacity == '0'){
        forms.style.display = 'flex'
        forms.style.opacity = '1'
    } else {
        forms.classList.add('filters-animation-outro')
        setTimeout(() => {
            // forms.classList.remove('filters-animation-outro')
            // forms.classList.remove('filters-animation-intro')

            forms.style.display = 'none'
        }, 300);
        forms.style.opacity = '0'
    }
}