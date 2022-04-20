
let valorPlatos = parseInt(prompt("Indique un valor del 1 al 100 para lavar los platos"));
let valorBaño = parseInt(prompt("Indique un valor del 1 al 100 para limpiar el baño"));
let valorCocinar = parseInt(prompt("Indique un valor del 1 al 100 para Cocinar"));
let valorBarrer = parseInt(prompt("Indique un valor del 1 al 100 para Barrer"));
let valorCama = parseInt(prompt("Indique un valor del 1 al 100 para hacer la cama"));
let valorBasura = parseInt(prompt("Indique un valor del 1 al 100 para sacar la basura"));
let dia = 1
let puntosUs1 = 0
let puntosUs2 = 0
let puntosUs3 = 0
let puntosUs4 = 0
let usuarioUno
let usuarioDos
let usuarioTres
let usuarioCuatro

if((valorPlatos > 100) || (valorPlatos <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
}else{
    console.log("Lavar los platos = "+valorPlatos+"pts");
}
if((valorBaño > 100) || (valorBaño <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
}else{
    console.log("Limpiar el baño = "+valorBaño+"pts");
}
if((valorCocinar > 100) || (valorCocinar <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
}else{
    console.log("Cocinar = "+valorCocinar+"pts");
}
if((valorBarrer > 100) || (valorBarrer <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
}else{
    console.log("Barrer = "+valorBarrer+"pts");
}
if((valorCama > 100) || (valorCama <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
}else{
    console.log("Hacer la cama = "+valorCama+"pts");
}
if((valorBasura > 100) || (valorBasura <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
}else{
    console.log("Sacar la basura = "+valorBasura+"pts");
}

let habitantes = prompt("¿Cuantas personas viven en la casa?");
switch(habitantes){
    case "1":
        alert("No tiene mucho sentido que dividas las tareas");
        break;
    case "2":
        familiaDeDos()
        break;
    case "3":
        familiaDeDos()
        familiaDeTres()
        break;
    case "4":
        familiaDeDos()
        familiaDeTres()
        familiaDeCuatro()
        break;
    default:
        alert("Es mas de lo que podemos manejar");
        break;
}

function familiaDeDos(){
    usuarioUno = prompt("Ingresa el nombre del primer miembro");
    usuarioDos = prompt("Ingresa el nombre del segundo miembro");
    console.log("Miembro 1: "+usuarioUno);
    console.log("Miembro 2: "+usuarioDos);
}
function familiaDeTres(){
    usuarioTres = prompt("Ingresa el nombre del tercer miembro");
    console.log("Miembro 3: "+usuarioTres);
}
function familiaDeCuatro(){
    usuarioCuatro = prompt("Ingresa el nombre del cuarto miembro");
    console.log("Miembro 4: "+usuarioCuatro);
}

while(dia<=1){
    console.log("Dia "+dia)
    let lavarPlatos = prompt("¿Quien lavo los platos hoy?")
    switch(lavarPlatos){
        case usuarioUno:
            puntosUs1+=valorPlatos;
            break;
        case usuarioDos:
            puntosUs2+=valorPlatos;
            break;
        case usuarioTres:
            puntosUs3+=valorPlatos;
            break;
        case usuarioCuatro:
            puntosUs4+=valorPlatos;
            break;
        default:
            break;
    }
    let limpiarBaño = prompt("¿Quien limpio el baño hoy?")
    switch(limpiarBaño){
        case usuarioUno:
            puntosUs1+=valorBaño;
            break;
        case usuarioDos:
            puntosUs2+=valorBaño;
            break;
        case usuarioTres:
            puntosUs3+=valorBaño;
            break;
        case usuarioCuatro:
            puntosUs4+=valorBaño;
            break;
        default:
            break;
    }
    let cocinar = prompt("¿Quien cocino hoy?")
    switch(cocinar){
        case usuarioUno:
            puntosUs1+=valorCocinar;
            break;
        case usuarioDos:
            puntosUs2+=valorCocinar;
            break;
        case usuarioTres:
            puntosUs3+=valorCocinar;
            break;
        case usuarioCuatro:
            puntosUs4+=valorCocinar;
            break;
        default:
            break;
    }
    let barrer = prompt("¿Quien barrió hoy?")
    switch(barrer){
        case usuarioUno:
            puntosUs1+=valorBarrer;
            break;
        case usuarioDos:
            puntosUs2+=valorBarrer;
            break;
        case usuarioTres:
            puntosUs3+=valorBarrer;
            break;
        case usuarioCuatro:
            puntosUs4+=valorBarrer;
            break;
        default:
            break;
    }
    let hacerCama = prompt("¿Quien hizo la cama hoy?")
    switch(hacerCama){
        case usuarioUno:
            puntosUs1+=valorCama;
            break;
        case usuarioDos:
            puntosUs2+=valorCama;
            break;
        case usuarioTres:
            puntosUs3+=valorCama;
            break;
        case usuarioCuatro:
            puntosUs4+=valorCama;
            break;
        default:
            break;
    }
    let sacarBasura = prompt("¿Quien saco la basura hoy?")
    switch(sacarBasura){
        case usuarioUno:
            puntosUs1+=valorBasura;
            break;
        case usuarioDos:
            puntosUs2+=valorBasura;
            break;
        case usuarioTres:
            puntosUs3+=valorBasura;
            break;
        case usuarioCuatro:
            puntosUs4+=valorBasura;
            break;
        default:
            break;
    }

    if(habitantes==2){
        console.log(usuarioUno+" tiene "+puntosUs1+"pts")
        console.log(usuarioDos+" tiene "+puntosUs2+"pts")
    }else if(habitantes==3){
        console.log(usuarioUno+" tiene "+puntosUs1+"pts")
        console.log(usuarioDos+" tiene "+puntosUs2+"pts")
        console.log(usuarioTres+" tiene "+puntosUs3+"pts")
    }else if(habitantes==4){
        console.log(usuarioUno+" tiene "+puntosUs1+"pts")
        console.log(usuarioDos+" tiene "+puntosUs2+"pts")
        console.log(usuarioTres+" tiene "+puntosUs3+"pts")
        console.log(usuarioCuatro+" tiene "+puntosUs4+"pts")
    }
    

dia+=1
}












