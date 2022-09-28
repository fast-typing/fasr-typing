var text = document.getElementById("text").innerText;
let textDefault = document.getElementById("text").innerText;
text = text.slice(0, text.length).split(" ");
var i = 0;
var input = document.getElementById("poleVvode");

let pudge = "Ну что как всегдаВАлл Пик захожу яПуджа выбираю";
function poleVvode(inpt) {
  console.log(text[i]);
  console.log(inpt);
  if (text[i] == input.value) {
    input.value = "";
    delete text[i];
    document.getElementById("text").innerText = text.join(" ");
    i++;
  }
  setTimeout(() => {
    var poleVvode = document.getElementById("poleVvode");
    poleVvode.setAttribute("disabled", "disabled");
    poleVvode.setAttribute("placeholder", "time is over!");
    input.value = "";
  }, (inpt = 60000));
}

function poleRestart() {
  document.getElementById("text").innerText = textDefault;
  var poleVvode = document.getElementById("poleVvode");
  poleVvode.removeAttribute("disabled");
  input.value = "";
}

function filterShow(){
  if(document.querySelector("#rus").hasAttribute("checked")){
    document.getElementById("text").innerText = pudge;
  }
}
