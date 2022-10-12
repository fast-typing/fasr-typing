let href = window.location.href;    //ВАЖНО!!!!
if(href == "http://127.0.0.1:5500/colors.html"){    //ВАЖНО!!!!
    let colorMainBG = document.getElementById('colorMainBG')
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
    
    colorMainBG.addEventListener('input', e =>{
        body.style.backgroundColor = e.target.value

        localStorage.setItem('colorMainBG', e.target.value)
    })
    
    color1.addEventListener('input', e =>{
        dot1.style.background = e.target.value
        body.style.setProperty('--link1Color', dot1.style.background)
        
        localStorage.setItem('color1', e.target.value)
    })
    
    color2.addEventListener('input', e =>{
        dot2.style.background = e.target.value
        body.style.setProperty('--link2Color', dot2.style.background)

        localStorage.setItem('color2', e.target.value)
    })
    
    color3.addEventListener('input', e =>{
        dot3.style.background = e.target.value
        body.style.setProperty('--link3Color', dot3.style.background)
        
        localStorage.setItem('color3', e.target.value)
    })
    colorAddBG.addEventListener('input', e =>{
        tag.forEach((d)=>{
            d.style.background = e.target.value
        })
        nav.style.background = e.target.value

        localStorage.setItem('colorAddBG', e.target.value)
    }) 
    var clr;
    textColor.addEventListener('input', e =>{
        tag.forEach((d)=>{
            d.style.color = e.target.value
        })

        localStorage.setItem('textColor', e.target.value)   //ВАЖНО!!!!
    }) 
    tag.forEach((d)=>{
        d.style.color = localStorage.getItem('textColor')
    })
} else {
    let bodyText= document.querySelector('body')     
    let MainText= document.querySelector('.text')
    let ButonText= document.querySelector('input') 
    let nav = document.querySelectorAll('.nav-link')
    bodyText.style.color = localStorage.getItem('textColor')  
    MainText.style.color = localStorage.getItem('textColor') 
    ButonText.style.color = localStorage.getItem('textColor') 
    nav.forEach((dsf)=>{
        dsf.style.color = localStorage.getItem('textColor') 
    })
}

