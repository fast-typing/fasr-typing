document.getElementById('poleVvode').setAttribute('autocomplete', 'off');
var text = document.getElementById('text');
var input = document.getElementById('poleVvode');
var textDefault = document.getElementById("text").innerText;
var engText = ['pudge', 'function', 'document', 'element', 'bookmark', 'attribute', 'condition', 'accessing', 'temperature', 'notebook', 'birthday','imbalanced','cool','Obama','crash','computer','text','firewall','hardware','development','netiquette','equipment','install','search','update','stack','application','development','debug','delete','disconnect','enable','reboot','verify','compile','database','eject','folder','layout','namespace','outsource','password','upload','interface','backup','class','variable','property','response','current'];
var rusText = ['пудж', 'ручка', 'модный', 'современный', 'пранк', 'цикада', 'кошка', 'узбекистак', 'таджик', 'микрофон', 'линейка', 'ластик', 'наушники', 'процессор', 'стол', 'полка', 'маркер', 'кубик', 'арбуз', 'черешня', 'фантик', 'лимонад', 'вирус', 'юбилей', 'работа', 'терпение', 'сковорода', 'хобот', 'утро', 'скакалка', 'цитрус', 'мигрень', 'йогурт', 'эскимо', 'жаргон', 'зарождение', 'пирог', 'ведро', 'лебедь', 'табуретка', 'тетрадка', 'тетрадка', 'чаепитие', 'работа', 'яблоко', 'шоколад', 'антиутопия', 'месяц', 'щегол', 'обводка'];
var oldWords = [];
let NowArr = [];
let arrWords = [];
var inputTime = 30;
var inputWords = 30;
var i = 0;
let quanSymb = 0;
var wpm;

function randomArr(array) {
    array.sort(() => Math.random() - 0.5);

    for (let a = 0; a < inputWords; a++) {
        NowArr.push(array[a]);
    }

    text.innerText = NowArr.join(' ');
}

randomArr(engText);


function filter( ) {
    inputTime = document.getElementById('time').value;
    inputWords = document.getElementById('words').value;
    NowArr = [];

    if (inputWords == '') {
        inputWords = 30; 
    }

    if (inputTime == '') {
        inputTime = 30;
    }

    if (inputWords > 50) {
        inputWords = 50;
        document.getElementById('words').value = 50;
    } else if (inputWords < 20) {
        inputWords = 20;
        document.getElementById('words').value = 20;
    }

    if (inputTime > 180) {
        inputTime = 180;
        document.getElementById('time').value = 180;
    } else if (inputTime < 30) {
        inputTime = 30;
        document.getElementById('time').value = 30;
    }

    if (document.getElementById('rus').checked == true) {
        randomArr(rusText);
    } else {
        randomArr(engText);
    } 
}


function poleVvode() {
    if (NowArr[i] == input.value) {
        input.value = '';
        var word = document.createElement('span');
        word.style.opacity = '0.3'
        word.innerHTML = NowArr[i];
        oldWords.push(word.outerHTML);
        arrWords.push(NowArr[i]);
        delete NowArr[i];
        document.getElementById("text").innerHTML = oldWords.join(' ') + NowArr.join(" ");
        i++;
    } 

    if (i == 1){
        timer();
    }
}

function timer() {
    setTimeout(() => {
        var poleVvode = document.getElementById('poleVvode');
        poleVvode.value = '';
        poleVvode.setAttribute('disabled', 'disabled');
        poleVvode.setAttribute('placeholder', 'time is over!');
        wpm = Math.round(i/(inputTime/60));
        
        
        for (c = 0; c < i; c++) {
            let word = arrWords[c];
            quanSymb += word.length;
        }

        quanSymb = Math.round(quanSymb/(inputTime/60))

        alert(`Words per minute ${wpm}`);
        alert(`Characters per minute ${quanSymb}`);

    }, inputTime*1000);
}

function restart() {
    NowArr = []

    if (document.getElementById('rus').checked == true) {
        randomArr(rusText)
    } else {
        randomArr(engText)
    }

    var poleVvode = document.getElementById('poleVvode');
    poleVvode.setAttribute('placeholder', 'write there');
    poleVvode.removeAttribute('disabled');
    oldWords = [];
    i = 0;
}