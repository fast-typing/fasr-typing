
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
    // // let colorWell = document.getElementById('colorMainBG')
    // // let colorAddBG = document.getElementById('colorAddBG')
    // // let color1 = document.getElementById('color-1')
    // // let color2 = document.getElementById('color-2')
    // // let color3 = document.getElementById('color-3')
    // // let textColor = document.getElementById('textColor')
    // let dot1 = document.getElementById('dot-1')
    // let dot2 = document.getElementById('dot-2')
    // let dot3 = document.getElementById('dot-3')
    // // let tag1 = document.getElementById('1')
    // // let tag2 = document.getElementById('2')
    // // let tag3 = document.getElementById('3')
    // // let tag4 = document.getElementById('4')
    // let nav = document.getElementById('5')
    // let body = document.getElementById('body')

    // // colorWell.addEventListener('input', e =>{
    // //     body.style.backgroundColor = e.target.value
    // //     localStorage.setItem('a', e.target.value)
    // // })

    // // color1.addEventListener('input', e =>{
    // //     dot1.style.background = e.target.value
    // //     body.style.setProperty('--link1Color', dot1.style.background)
    // //     localStorage.setItem('b', e.target.value)
    // // })

    // // color2.addEventListener('input', e =>{
    // //     dot2.style.background = e.target.value
    // //     body.style.setProperty('--link2Color', dot2.style.background)
    // //     localStorage.setItem('c', e.target.value)
    // // })

    // // color3.addEventListener('input', e =>{
    // //     dot3.style.background = e.target.value
    // //     body.style.setProperty('--link3Color', dot3.style.background)
    // //     localStorage.setItem('d', e.target.value)
    // // })

    // // colorAddBG.addEventListener('input', e =>{
    // //     tag1.style.background = e.target.value
    // //     tag2.style.background = e.target.value
    // //     tag3.style.background = e.target.value
    // //     tag4.style.background = e.target.value
    // //     nav.style.background = e.target.value
    // //     localStorage.setItem('e', e.target.value)
    // // }) 

    // // textColor.addEventListener('input', e =>{
    // //     tag1.style.color = e.target.value
    // //     tag2.style.color = e.target.value
    // //     tag3.style.color = e.target.value
    // //     tag4.style.color = e.target.value
    // //     localStorage.setItem('f', e.target.value)
    // // }) 
    // localStorage.setItem('test', 4)
    // body.style.backgroundColor = localStorage.getItem('a')
    // dot1.style.background = localStorage.getItem('b')
    // dot2.style.background = localStorage.getItem('c')
    // dot3.style.background = localStorage.getItem('d')
    // // tag1.style.color = localStorage.getItem('f')
    // // tag1.style.background = localStorage.getItem('e')
    // // tag2.style.color = localStorage.getItem('f')
    // // tag2.style.background = localStorage.getItem('e')
    // // tag3.style.color = localStorage.getItem('f')
    // // tag3.style.background = localStorage.getItem('e')
    // // tag4.style.color = localStorage.getItem('f')
    // // tag4.style.background = localStorage.getItem('e')
    // nav.style.background = localStorage.getItem('e')

    

    var style = document.createElement('style');
    style.innerHTML = '.sad { --txtMainColor: #f2f3f4;  --link1Color: #d92139;    --link2Color: #e99a24;     --link3Color: #10a44a;   background-color: rgb(75, 75, 75); color: var(--txtMainColor); --bgcolor: rgb(37, 37, 37); }';
    document.getElementById('body').className = 'sad';

}

if (localStorage.getItem('test') == 1) {
    let theme = document.getElementById('theme')
    theme.href = 'theme-1.css'
} else if (localStorage.getItem('test') == 2){
    let theme = document.getElementById('theme')
    theme.href = 'theme-2.css'
} else if (localStorage.getItem('test') == 3){
    let theme = document.getElementById('theme')
    theme.href = 'theme-3.css'
} else {
    switchTheme4()
}