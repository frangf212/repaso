/*Contexto:
Durante una inspección con dron en una playa, se ha generado una cuadrícula donde:

1 representa la presencia de una persona.

0 representa una zona vacía.

El dron necesita identificar "grupos de personas" 
(llamados "islas"), es decir, conjuntos de personas conectadas adyacentemente 
(arriba, abajo, izquierda o derecha, pero no en diagonal).
*/
let longitud = 10
let numeroIslas = 0
let isla = Array.from({ length: longitud }, () => Array(longitud).fill(0));
rellenarIsla(isla)
console.log(isla)
numeroIslas = empezamosABuscar(isla)
console.log(numeroIslas)

function rellenarIsla(isla){
    for(let i  = 0; i < longitud;i++){
        for(let j = 0; j < longitud;j++){
            isla[i][j]= Math.floor(Math.random()*2)
        }
    }
}


function empezamosABuscar(isla){

    for(let i  = 0; i < longitud;i++){
            for(let j = 0; j < longitud;j++){
                if(isla[i][j] == 1){
                    numeroIslas++
                    contarIslas(i,j,isla)
                    isla[i][j] = 5
                    
                }
                
            }         
    }
    return numeroIslas
}

function contarIslas(i,j,isla){
    
        if (i < 0 || j < 0 || i >= longitud || j >= longitud || isla[i][j] == "5" || isla[i][j] == "0"){
            return 
        } else {
            isla[i][j] = 5
            contarIslas(i-1, j,isla)
            contarIslas(i+1, j, isla)
            contarIslas(i, j-1,isla)
            contarIslas(i,j+1,isla)
        }
        
    
        

}
