let masa
do {
    masa = Number (prompt("Ingrese su peso en Kilogramos."))
} while (isNaN (masa) || (masa < 0) || (masa > 635));
do {
    estatura = Number (prompt("Ingrese su estatura en metros."))
} while (isNaN (estatura) || (estatura < 0) || (estatura > 2.51));

let imc = masa/(estatura^2)
  let tipo
if (imc < 18.5) {
    tipo = "de bajo peso"
}else{
    if (imc <= 24.9) {
        tipo = "normal"
    }else{
        if (imc <= 30) {
            tipo = "de obesidad"
        }else{
            if (imc <= 34.9) {
                tipo = "de obesidad de tipo 1"
            }else{
                if (imc <= 39.9) {
                    tipo = "de obesidad de tipo 2"
                }else{
                    tipo = "de obesidad de tipo 3"
                    
                    
                }
            }
        }
    }
}
document.getElementById ("IMC").innerHTML= "Su IMC es " + tipo