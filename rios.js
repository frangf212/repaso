var rios = Array.from({ length: 6 }, () => Array(6).fill(0));
var noOperables = Array.from({ length: 6 }, () => Array(6).fill(0));
let mensaje =""
//x=1
rios[0][0]=0
rios[0][1]=3
rios[0][2]=8
rios[0][3]=6
rios[0][4]=3
rios[0][5]=4
//x=2
rios[1][0]=21
rios[1][1]=0
rios[1][2]=14
rios[1][3]=10
rios[1][4]=0
rios[1][5]=0
//x=3
rios[2][0]=0
rios[2][1]=10
rios[2][2]=0
rios[2][3]=5
rios[2][4]=5
rios[2][5]=0
//x=4
rios[3][0]=4
rios[3][1]=20
rios[3][2]=0
rios[3][3]=0
rios[3][4]=0
rios[3][5]=0
//x=5
rios[4][0]=13
rios[4][1]=0
rios[4][2]=5
rios[4][3]=1
rios[4][4]=0
rios[4][5]=6
//x=6
rios[5][0]=3
rios[5][1]=16
rios[5][2]=6
rios[5][3]=1
rios[5][4]=0
rios[5][5]=0

console.log(rios)
secos = [2]

function establecerNoOperables(){
    
    for (let i = 0 ;i < noOperables.length; i++){
        for (let j = 0; j < noOperables.length; j++){
            noOperables[i][j]=false
        }
    }
    //noOperables[1][2] = true
    //noOperables[1][5] = true
    noOperables[2][3] = true

    console.log(noOperables)
}
establecerNoOperables()


let origen = parseInt(prompt("Dime el camino de origen"))
let destino = parseInt(prompt("Dime el destino"))
if (origen == destino){
    mensaje = document.getElementById("resultado")
    mensaje.innerHTML = "El origen y destino no puede ser el mismo"
}else {
    camino = 0
    let cAux = origen
    recorrido = [parseInt(cAux+1)]
    mejor = 0
    empezamos(origen,destino,camino,recorrido,mejor)
    mensaje = document.getElementById("resultado")
    if (mensaje.innerHTML.length == 0){
        mensaje.innerHTML = "Soy un fraude y no llego"
    }
   
}

function empezamos(origen,destino,camino,recorrido,mejor){
    for(let i = 0; i < rios.length; i++){
        if(rios[origen][i] != origen && rios[origen][i] != 0 && comprobarCamino(origen, destino)){
            
            camino = camino + rios[origen][i]
            let c = i+1
            recorrido.push(c)
            if(i == destino){
                if (mejor > camino || mejor == 0){
                    alert(mejor)
                    mejor = camino
                    mensaje = document.getElementById("resultado")
                    mensaje.innerHTML = mensaje.innerHTML +"/n El camino mas corto es "+mejor +" con el siguiente recorrido "+recorrido
                    
                }
                
            } else {
                empezamos(i,destino,camino,recorrido,mejor)
            }

        

        }

    }
}
function comprobarCamino(origen, destino){
    let esValido = true 
    if (secos.includes(destino) || noOperables[origen][destino]== true){
        esValido = false
    } 
    //compruebo si ya he pasado por ahi para no hacer un bucle infinito
    if(recorrido.includes(destino)){
        esValido = false
    }
    return esValido 
}