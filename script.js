window.onload = function(){ 

let switchThemeDefault = document.getElementById('btn1')

switchThemeDefault.onclick = function () {
    let theme = document.getElementById('theme')
    
    theme.href = 'theme-light.css'
}


let switchTheme1 = document.getElementById('btn2')

switchTheme1.onclick = function () {
    let theme = document.getElementById('theme')

    theme.href = 'theme-1.css'
}


let switchTheme2 = document.getElementById('btn3')

switchTheme2.onclick = function () {
    let theme = document.getElementById('theme')
    
    theme.href = 'theme-2.css'
}


};
