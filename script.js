var i;

function switchThemeDefault() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-1.css'
    localStorage.setItem('test', 1)
    
}

function switchTheme1() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-3.css'
    localStorage.setItem('test', 3)
    
}

function switchTheme2() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-2.css'
    localStorage.setItem('test', 2)
}

function switchTheme3() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-4.css'
    localStorage.setItem('test', 4)
}

function switchTheme4() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-5.css'
    localStorage.setItem('test', 5)
}

function switchTheme5() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-dark.css'
    localStorage.setItem('test', 6)
}

function switchTheme6() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-7.css'
    localStorage.setItem('test', 7)
}


if (localStorage.getItem('test') == 2){
    let theme = document.getElementById('theme')
    theme.href = 'theme-2.css'
} else if (localStorage.getItem('test') == 3){
    let theme = document.getElementById('theme')
    theme.href = 'theme-3.css'
} else if (localStorage.getItem('test') == 4){
    let theme = document.getElementById('theme')
    theme.href = 'theme-4.css'
} else if (localStorage.getItem('test') == 5) {
    let theme = document.getElementById('theme')
    theme.href = 'theme-5.css'
} else if (localStorage.getItem('test') == 6) {
    let theme = document.getElementById('theme')
    theme.href = 'theme-dark.css'
} else if (localStorage.getItem('test') == 7) {
    let theme = document.getElementById('theme')
    theme.href = 'theme-7.css'
} else {
    let theme = document.getElementById('theme')
    theme.href = 'theme-1.css'
}
