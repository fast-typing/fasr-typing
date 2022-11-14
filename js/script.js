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
} else if (localStorage.getItem('test') == 2){
    let theme = document.getElementById('theme')
    theme.href = '/css/theme-2.css'
} else {
    let theme = document.getElementById('theme')
    theme.href = '/css/theme-3.css'
} 

let regImg = document.getElementById("reg-img")
let logo = document.querySelector('.logo')
setTimeout(() => {
    regImg.classList.remove('dropDown')
    logo.classList.remove('dropDown')
}, 1500);
