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

function SigninSignup() {
    localStorage.setItem('network', 1)
    let network = document.getElementById('network')
    let networkText = document.getElementById('networkText')
    network.style.backgroundColor = '#76bf57'
    networkText.innerText = 'online'
}

if (localStorage.getItem('network') == 1) {
    let network = document.getElementById('network')
    let networkText = document.getElementById('networkText')
    network.style.backgroundColor = '#76bf57'
    networkText.innerText = 'online'
}