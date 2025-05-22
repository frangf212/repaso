class Usuario {
    constructor(id,nombre,rol,estado){
        this.id = id
        this.nombre = nombre
        if(rol !="admin" && rol!="dkd"){
            throw new Error("que haces")
        } else {
            this.rol = rol 
        }
       
        this.estado = estado
    }
    dameNota(){
        return 5+5
    }
        
    
}
let listaUsuarios = []
function agregarUsuario(usuario){
    listaUsuarios.forEach(element => {
        if (element.id == usuario.id){
            throw new Error("Este id ya esta en la lista de usuarios")
        }
    });
    listaUsuarios.push(usuario)
    
}



let usuario = new Usuario(1,"Francisco","admin",false)
let usuario1 = new Usuario(2,"Juan","admin",true)
let usuario3 = new Usuario(3,"Roberto","admin",true)
let usuario4 = new Usuario(4,"Pepe","admin",false,)


agregarUsuario(usuario)
agregarUsuario(usuario1)
agregarUsuario(usuario3)
agregarUsuario(usuario4)

desactivarUsuario(listaUsuarios,"Roberto")
//agregarUsuario(usuario)
let listaDesactivados = filtrarDesastivados();

function desactivarUsuario(pam1){
    for (let i = 0; i < listaUsuarios.length; i++){
        if(listaUsuarios[i].nombre == pam1){
            listaUsuarios[i].estado = false
        } 
    }
}


function filtrarDesastivados(){
    let listaDesactivados = []
    listaUsuarios.forEach(element => {
        if(!element.estado){
            listaDesactivados.push(element)
        }
    });
    return listaDesactivados
}