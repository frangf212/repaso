let digitos = 1

function contarDigitos(valor){
    if (valor < 10){
        return digitos
    } else {
        digitos++
        contarDigitos(Math.floor(valor/10))
    }
    return digitos
}

console.log(contarDigitos(200))