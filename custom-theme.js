let colorWell = document.getElementById('colorWell')
let color1 = document.getElementById('color-1')
let color2 = document.getElementById('color-2')
let color3 = document.getElementById('color-3')
let body = document.getElementById('body')

colorWell.addEventListener('input', e =>{
    body.style.backgroundColor = e.target.value
})


color1.addEventListener('input', e =>{
    let dot1 = document.getElementById('dot-1')
    dot1.style.background = e.target.value
    body.style.setProperty('--link1Color', dot1.style.background)
})

color2.addEventListener('input', e =>{
    let dot2 = document.getElementById('dot-2')
    dot2.style.background = e.target.value
    body.style.setProperty('--link2Color', dot2.style.background)
})

color3.addEventListener('input', e =>{
    let dot3 = document.getElementById('dot-3')
    dot3.style.background = e.target.value
    body.style.setProperty('--link3Color', dot3.style.background)
})