var text = document.getElementById('text').innerText

text = text.slice(0, text.length).split(' ')
var i = 0;
var input = document.getElementById('poleVvode')

function poleVvode() {
    console.log(text[i])
    if (text[i] == input.value) {
        input.value = ''
        i++
       } 
    setTimeout(() => {
        var poleVvode = document.getElementById('poleVvode');
        poleVvode.oninput = e => {
            e.target.value = ''; 
          }
    }, 60000)
}