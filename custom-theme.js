let gref = window.location.href;    //ВАЖНО!!!!
if(gref == "http://127.0.0.1:5500/colors.html"){    //ВАЖНО!!!!
    let colorWell = document.getElementById('colorMainBG')
    let colorAddBG = document.getElementById('colorAddBG')
    let color1 = document.getElementById('color-1')
    let color2 = document.getElementById('color-2')
    let color3 = document.getElementById('color-3')
    let textColor = document.getElementById('textColor')
    let dot1 = document.getElementById('dot-1')
    let dot2 = document.getElementById('dot-2')
    let dot3 = document.getElementById('dot-3')
    let tag =  document.querySelectorAll("li");
    let nav = document.getElementById('5')
    let body = document.getElementById('body')
    let body1 = document.querySelector(".body1")
    let bttn = document.querySelector("#btn6")
    
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
        tag.forEach((d)=>{
            d.style.background = e.target.value
        })
        a = e.target.value;
        nav.style.background = e.target.value
    }) 
    var clr;
    textColor.addEventListener('input', e =>{
        tag.forEach((d)=>{
            d.style.color = e.target.value
        })
        localStorage.setItem('colorText', e.target.value)   //ВАЖНО!!!!

    }) 
    bttn.addEventListener("click", ()=>{
        body1.style.backgroundColor = `${a}`
    })
} else {
    let f = document.querySelector('.text')     //ВАЖНО!!!!
    f.style.color = localStorage.getItem('colorText')       //ВАЖНО!!!!
}

