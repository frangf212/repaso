//Come cocos
//Matriz 10x10 o como te de la real gana
//El coco es el 1
//Solo se mueve el 1, se puede mover a adyacentes
//De sus adyacentes se mueve al mayor
//cuando se come a 1 ficha se pone a la ficha comida a 0
//a 0 nunca te puedes mover
//el juego termina cuando solo haya 1's y 0's o cuando ningun coco se pueda mover
let barbaridad = Array.from({ length: 5 }, () => Array(5).fill(0));
let numCocos = 0
let cons = 5
//EMPEZAMOS A JUGAR 

creoTablero()
let sigue = true
while (juegoTerminado() && sigue) {
    console.log(barbaridad)
    numCocos = cuentoCocosIniciales()
    if (numCocos > 1) {
        sigue = moverCoco()
    }
    console.log(barbaridad)
    
}

function creoTablero() {
    for (let i = 0; i < cons; i++) {
        for (let j = 0; j < cons; j++) {
            let number = Math.random() * 10;
            number = Math.floor(number)
            barbaridad[i][j] = number
        }
    }
}

//Miro a ver si solo hay 1's y 0's 
function juegoTerminado() {
    let seguir = true

    for (let i = 0; i < cons; i++) {
        for (let j = 0; j < cons; j++) {
            if (barbaridad[i][j] > 1) {
                return seguir
            }
        }
    }


    return false
}

function cuentoCocosIniciales() {
    let numCocos = 0
    for (let i = 0; i < cons; i++) {
        for (let j = 0; j < cons; j++) {
            if (barbaridad[i][j] == 1) {
                numCocos += 1
            }
        }
    }
    return numCocos
}

function moverCoco() {
    //Hago lo de mover con booleanos porque puede darse el caso que un coco
    //no se pueda mover porque este encerrado por lo que el programa termina
    let muevoDef = false
    let muevo = false
    for (let i = 0; i < cons; i++) {
        for (let j = 0; j < cons; j++) {
            if (esCoco(barbaridad[i][j])) {
                console.log("Deberia mover ahora")
                muevo = adyacentesCoco(i, j)
                if (!muevoDef && muevo) {
                    muevoDef = true
                }
            }
        }
    }
    return muevoDef
}

function esCoco(elemento) {
    let coco = false
    if (elemento == 1) {
        coco = true
    }
    return coco
}

function adyacentesCoco(x, y) {
    //alert("tenemos Coco"+x+" "+y)
    let mayorAdyacente = 0
    let ganadorX, ganadorY = 0
    let muevo = false
    for (let auxX = x - 1; auxX <= x+1; auxX++) {
        for (let auxY = y - 1; auxY <= y + 1; auxY++) {
            //alert(auxX+" "+auxY+" "+y)
            if (auxX >= 0 && auxY >= 0) {
                if (auxX != x || auxY != y) {
                    if (!esCoco(barbaridad[auxX][auxY])) {
                        if (barbaridad[auxX][auxY] > mayorAdyacente) {
                            ganadorX = auxX
                            ganadorY = auxY
                        }
                    }
                }
            }
        }
    }
    if (mayorAdyacente > 0) {
        muevo = true
        muevoCoco(ganadorX, ganadorY, x, y)
    }

    return muevo
}

function muevoCoco(auxX, auxY, x, y) {
    barbaridad[x][y] = 0
    barbaridad[auxX][auxY] = 1
}



