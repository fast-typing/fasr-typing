var text = document.getElementById('text').innerText;
var inputTime = 60;
var quanWords = 50;
var textDefault = document.getElementById("text").innerText;
var engText = "I think Pudge-Chen combo is really IMBALANCED! NaVi used this bug and won last game. First, this combo is not that hard for pro gamers. Second, this combo is different from the same one in war3 dota. Third, 2 normal skills shouldn't kill a hero with aegis easily. NICE BALANCE";
var rusText = 'ПУДЖ ГОПНИК. пудж в кофточке и спортивках, не хотелось бы встретить такого на районе, иначе придется отдать своё мясо ему. ПУДЖ СПРОТСМЕН. Пудж настолько богат что покупает себе помимо мома костюмчик адидас. Что добавляет + 15 к скорости бега. ПУДЖ АНИМЕШНИК. Такую прическу хотят все ДЕВАЧКИ из доты. ПУДЖ ИМБА';
text = text.split(' ');
document.getElementById('poleVvode').setAttribute('autocomplete', 'off');
var oldWords = [];
var i = 0;
var input = document.getElementById('poleVvode');

function filter() {
    inputTime = document.getElementById('time').value;
    quanWords = document.getElementById('words').value;
    if (document.getElementById('rus').checked == true) {
        document.getElementById('text').innerText = rusText;
        text = rusText.slice(0,rusText.length).split(' ');
    } else {
        document.getElementById('text').innerText = engText;
        text = engText.slice(0,engText.length).split(' ');
    }
    
}

function poleVvode() {
    // if (text.length > quanWords) {
    //     text = text.slice()
    // }
    // var mas = input.value.split('')
    // var length = mas.length - 1;
    // console.log(text[i] + ' ' == input.value)
    // console.log(mas[length] == ' ')
    // mas[length] == ' '

    if (text[i]  == input.value) {
        input.value = '';
        var word = document.createElement('span');
        word.style.opacity = '0.3'
        word.innerHTML = text[i];
        oldWords.push(word.outerHTML);
        delete text[i];
        document.getElementById("text").innerHTML = oldWords.join(' ') + text.join(" ");
        i++;
       } 
    if (inputTime == '') {
        inputTime = 60;
    }
    setTimeout(() => {
        var poleVvode = document.getElementById('poleVvode');
        poleVvode.value = '';
        poleVvode.setAttribute('disabled', 'disabled');
        poleVvode.setAttribute('placeholder', 'time is over!');
        var wpm = Math.round(i/(inputTime/60));
        console.log(`Words per minute ${wpm}`);
        // let wpmBlock = document.createTextNode(`Word per minute: ${wpm}`);
    }, inputTime*1000);
}

function restart() {
    if (document.getElementById('rus').checked == true) {
        document.getElementById('text').innerText = rusText;
        text = rusText.slice(0,rusText.length).split(' ');
        
    } else {
        document.getElementById('text').innerText = engText;
        text = engText.slice(0,engText.length).split(' ');
    }
    var poleVvode = document.getElementById('poleVvode');
    poleVvode.setAttribute('placeholder', 'write there');
    poleVvode.removeAttribute('disabled');
    oldWords = [];
    i = 0;
}

// let allay = document.getElementById('allay')
// let p = document.getElementById('p')
// allay.addEventListener("click", function() {
//     p.classList.add('allay-animated-intro');
//     setTimeout(() => {
//         p.classList.add('allay-animated-outro');
//         }, 600);
// });
  
// p.addEventListener("animationend", AnimationHandler, false);
  
// function AnimationHandler () {
//     p.classList.remove('allay-animated-intro');
//     p.classList.remove('allay-animated-outro');
// }
