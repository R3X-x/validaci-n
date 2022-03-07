let urlFeliz = "https://w7.pngwing.com/pngs/778/387/png-transparent-smiley-thumb-signal-emoticon-smiley-miscellaneous-face-smiley.png"
let urlTriste = "https://cdn-0.emojis.wiki/emoji-pics/facebook/pensive-face-facebook.png"
let imgHtml = document.querySelector("#nota")
let numero1
do {
    numero1 = Number (prompt("Ingrese su primer resultado."))
} while (isNaN(numero1) || (numero1 < 0) || (numero1 > 10));
let numero2
do {
    numero2 = Number (prompt("Ingrese su segundo resultado."))
} while (isNaN(numero2) || (numero2 < 0) || (numero2 > 10));
let numero3
do {
    numero3 = Number (prompt("Ingrese su tercer resultado."))
} while (isNaN(numero3) || (numero3 < 0) || (numero3 > 10));
var numero4 = ((numero1 + numero2 + numero3)/3)
if (numero4 >= 6){
    imgHtml.src = urlFeliz
}else{
    imgHtml.src = urlTriste
}
