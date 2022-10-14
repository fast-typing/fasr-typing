document.getElementById('poleVvode').setAttribute('autocomplete', 'off')
var text = document.getElementById('text')
var input = document.getElementById('poleVvode')
var textDefault = document.getElementById("text").innerText
let result = document.getElementById('result')
let wpmDiv = document.getElementById('WPM')
let cpmDiv = document.getElementById('CPM')
let divTime = document.getElementById('curTime')
var engText = 'man out other so what time just begin while number part turn real leave might want point in English form off child few small since against ask late home city put close case force meet once water upon war though young less enough almost read include president nothing yet simple within love human along appear doctor believe speak active interest large person end open public follow during present without build hear light unite live every country bring center let better big boy cost business value second why clear expect student month drive concern best door hope example inform body again hold govern around possible head consider word program problem side try provide continue name certain power pay result question family complete act sense mind experience art next near direct ever least probable understand reach effect different idea whole control however lead system set order eye plan run keep face study woman member until far night always service away report car law industry important girl god several matter usual rather condition field pass fall note special talk particular today measure fact group play stand increase early course change help line something company week church toward start social room figure nature per often kind among white reason action return foot care walk teach low hour type carry rate remain full street in English easy although purpose test fight watch situation south outside moment spirit train college religion perhaps music grow free cause manage answer break organize half fire lose money stop actual ago difference stage father table rest bear entire market prepare serve age book board recent sound office cut step class already effort wait department able political learn voice air together explain offer plant charge ground west picture hard front lie true history position above strong friend necessary add court deal shall cover common subject draw short wife treat limit road modern dark surface rule regard dance peace observe future wall tax support party whether either land material happen education Death letter color behind produce send term total university rise century farm claim firm operation further pressure property morning amount top'
var rusText = 'над взять никто сделать дверь перед нужный понимать казаться работа три ваш уж земля конец несколько час голос город последний пока хорошо давать вода более хотя всегда второй куда пойти стол ребенок увидеть сила отец женщина машина случай ночь сразу мир совсем остаться обруч вид выйти дать работать любить старый почти ряд оказаться начало твой вопрос много война снова ответить между подумать опять белый деньги значить про лишь минута жена посмотреть правда главный страна свет ждать мать будто никогда товарищ дорога однако лежать именно окно никакой найти писать комната Москва часть вообще книга маленький улица решить далекий душа чуть вернуться утро некоторый считать сколько помнить вечер вечер пол таки получить народ плечо хоть сегодня бог вместе взгляд ходить зачем советский русский бывать полный прийти палец Россия любой история наконец мысль узнать назад общий заметить словно прошлый уйти известный давно слышать слушать бояться сын нельзя прямо долго быстро лес похожий пора пять глядеть оно сесть имя живот разговор тело молодой стена красный читать право старик ранний хотеться мама оставаться высокий путь поэтому совершенно кроме тысяча месяц брать написать целый огромный начинать спина настоящий пусть язык точно среди чувствовать сердце вести иногда мальчик успеть небо живой смерть продолжать девушка образ корм забыть вокруг письмо власть черный пройти появиться воздух разный выходить просить брат собственный отношение затем пытаться показать вспомнить система четыре квартира держать также любовь солдат откуда чтоб называть третий хозяин вроде уходить подойти поднять особенно спрашивать начальник оба бросить школа парень кровь двадцать солнце неделя послать находиться ребята поставить встать например шаг мужчина равно нос мало внимание капитан ухо туда сюда играть следовать рассказать великий действительно слишком тяжелый спать оставить войти длинный чувство молчать рассказывать отвечать становиться остановиться берег семья искать искать генерал момент десять начать следующий личный труд верить группа немного впрочем видно являться муж разве движение порядок ответ тихо знакомый газета помощь сильный скорый собака дерево снег сон смысл смочь против бежать двор форма простой приехать иной кричать возможность общество зеленый грудь угол открыть происходить ладно черный век карман ехать немец наверное губа дядя приходить часто домой огонь писатель армия состояние зуб очередь кой подняться камень гость показаться ветер'
var oldWords = []
let NowArr = []
let arrWords = []
var inputTime = 60
var inputWords = 40
var i = 0
let quanSymb = 0
let zapusk = 0
let currTime = inputTime
var wpm, timerFunc, interFunc

engText = engText.split(' ')
rusText = rusText.split(' ')

function randomArr(array) {
    array.sort(() => Math.random() - 0.5)

    for (let a = 0; a < inputWords; a++) {
        NowArr.push(array[a]);
    }

    text.innerText = NowArr.join(' ')
}

randomArr(engText);

function filter( ) {
    inputTime = document.getElementById('time').value
    inputWords = document.getElementById('words').value
    NowArr = []
    currTime = 0
    restartAll()

    if (inputWords == '') {
        inputWords = 30; 
    }

    if (inputTime == '') {
        inputTime = 30;
    }

    if (inputWords > 50) {
        inputWords = 50
        document.getElementById('words').value = 50
    } else if (inputWords < 20) {
        inputWords = 20
        document.getElementById('words').value = 20
    }

    if (inputTime > 180) {
        inputTime = 180
        document.getElementById('time').value = 180
    } else if (inputTime < 30) {
        inputTime = 30
        document.getElementById('time').value = 30
    }

    if (document.getElementById('rus').checked == true) {
        randomArr(rusText)
    } else {
        randomArr(engText)
    } 

    restartAll()
}

input.addEventListener('input', poleVvode)

function poleVvode() {
    if (i == 0){
        timer()
        currentTime()
    }

    if (NowArr[i] == input.value) {
        input.value = ''
        let word = document.createElement('span')
        word.style.opacity = '0.3'
        word.innerHTML = NowArr[i]
        oldWords.push(word.outerHTML)
        arrWords.push(NowArr[i])
        delete NowArr[i]
        document.getElementById("text").innerHTML = oldWords.join(' ') + NowArr.join(" ")
        i++
    }  
}

function currentTime() {
    zapusk++
    if (input.value != '' && zapusk == 1) {
        currTime = inputTime
        divTime.innerText = currTime
        interFunc = setInterval(() => {
            currTime -= 1
            divTime.innerText = currTime
            if (currTime <= 0) {
                clearInterval(interFunc)
                divTime.style.color = 'var(--txtMainColor)'
                divTime.innerText = '--'
            }
        }, 1000);
    }
}

function timer() {
    quanSymb = 0
    let drugoiZapusk = zapusk
    drugoiZapusk++
    if (input.value != '' && drugoiZapusk == 1) {
        timerFunc = setTimeout(() => {
            
            var poleVvode = document.getElementById('poleVvode')
            poleVvode.value = ''
            poleVvode.setAttribute('disabled', 'disabled')
            poleVvode.setAttribute('placeholder', 'time is over!')
            wpm = Math.round(i/(inputTime/60))
            let word
            
            for (c = 0; c < i; c++) {
                word = arrWords[c]
                quanSymb += word.length
            }

            quanSymb = Math.round(quanSymb/(inputTime/60))

            wpmDiv.innerText = 'wpm: ' + Math.round(i/(inputTime/60))
            cpmDiv.innerText = 'cpm: ' + Math.round(quanSymb)
            console.log('asdasddsa')
        }, inputTime*1000);
    }
}

function restart() {
    NowArr = []

    if (document.getElementById('rus').checked == true) {
        randomArr(rusText)
    } else {
        randomArr(engText)
    }

    restartAll()
    currTime = 0; 
    var poleVvode = document.getElementById('poleVvode')
    poleVvode.setAttribute('placeholder', 'write there')
    poleVvode.removeAttribute('disabled')
    oldWords = []
    i = 0
}

function restartAll() {
    clearTimeout(timerFunc)
    clearInterval(interFunc)
    divTime.innerText = '--'
    wpmDiv.innerText = 'wpm: -'
    cpmDiv.innerText = 'cpm: -'
    zapusk = 0
}
