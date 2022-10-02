
function switchTheme1() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-1.css'
    localStorage.setItem('test', 1)
    
}

function switchTheme2() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-2.css'
    localStorage.setItem('test', 2)
}

function switchTheme3() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-3.css'
    localStorage.setItem('test', 3)
}

function switchTheme4() {
    let theme = document.getElementById('theme')
    theme.href = 'theme-4.css'
    localStorage.setItem('test', 4)
}


if (localStorage.getItem('test') == 2){
    let theme = document.getElementById('theme')
    theme.href = 'theme-2.css'
} else if (localStorage.getItem('test') == 3) {
    let theme = document.getElementById('theme')
    theme.href = 'theme-3.css'
} else if (localStorage.getItem('test') == 4) {
    let theme = document.getElementById('theme')
    theme.href = 'theme-4.css'
} else {
    let theme = document.getElementById('theme')
    theme.href = 'theme-1.css'
}
