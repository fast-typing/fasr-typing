let colorWell = document.getElementById('colorMainBG')
let colorAddBG = document.getElementById('colorAddBG')
let color1 = document.getElementById('color-1')
let color2 = document.getElementById('color-2')
let color3 = document.getElementById('color-3')
let textColor = document.getElementById('textColor')
let dot1 = document.getElementById('dot-1')
let dot2 = document.getElementById('dot-2')
let dot3 = document.getElementById('dot-3')
let tag1 = document.getElementById('1')
let tag2 = document.getElementById('2')
let tag3 = document.getElementById('3')
let tag4 = document.getElementById('4')
let nav = document.getElementById('5')
let body = document.getElementById('body')

colorWell.addEventListener('input', e =>{
    body.style.backgroundColor = e.target.value
})

color1.addEventListener('input', e =>{
    dot1.style.background = e.target.value
    body.style.setProperty('--link1Color', dot1.style.background)
})

color2.addEventListener('input', e =>{
    dot2.style.background = e.target.value
    body.style.setProperty('--link2Color', dot2.style.background)
})

color3.addEventListener('input', e =>{
    dot3.style.background = e.target.value
    body.style.setProperty('--link3Color', dot3.style.background)
})

colorAddBG.addEventListener('input', e =>{
    tag1.style.background = e.target.value
    tag2.style.background = e.target.value
    tag3.style.background = e.target.value
    tag4.style.background = e.target.value
    nav.style.background = e.target.value
}) 

textColor.addEventListener('input', e =>{
    tag1.style.color = e.target.value
    tag2.style.color = e.target.value
    tag3.style.color = e.target.value
    tag4.style.color = e.target.value
}) 
