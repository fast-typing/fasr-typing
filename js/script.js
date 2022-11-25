const buttonWrapper = document.querySelector('.burger')
const menu = document.querySelector('.options')
const burger_line1 = document.querySelector('.line-1')
const burger_line3 = document.querySelector('.line-3')
buttonWrapper.addEventListener('click', () => {
    menu.classList.toggle('margin')
    buttonWrapper.classList.toggle('rotate')
    burger_line1.classList.toggle('opacity0')
    burger_line3.classList.toggle('rotate90')
})

function switchTheme1() {
    let theme = document.getElementById('theme')
    theme.href = '/css/theme-1.css'
    localStorage.setItem('test', 1)
}

function switchTheme2() {
    let theme = document.getElementById('theme')
    theme.href = '/css/theme-2.css'
    localStorage.setItem('test', 2)
}

function switchTheme3() {
    let theme = document.getElementById('theme')
    theme.href = '/css/theme-3.css'
    localStorage.setItem('test', 3)
}


if (localStorage.getItem('test') == 1) {
    let theme = document.getElementById('theme')
    theme.href = '/css/theme-1.css'
} else if (localStorage.getItem('test') == 2) {
    let theme = document.getElementById('theme')
    theme.href = '/css/theme-2.css'
} else {
    let theme = document.getElementById('theme')
    theme.href = '/css/theme-3.css'
}

// function SigninSignup() {
//     localStorage.setItem('network', 1)
//     let network = document.getElementById('network')
//     let networkText = document.getElementById('networkText')
//     network.style.backgroundColor = '#76bf57'
//     networkText.innerText = 'online'
// }

// if (localStorage.getItem('network') == 1) {
//     let network = document.getElementById('network')
//     let networkText = document.getElementById('networkText')
//     network.style.backgroundColor = '#76bf57'
//     networkText.innerText = 'online'
// }