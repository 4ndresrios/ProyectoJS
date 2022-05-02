let dia = 1

const usuarios = [{nombre:"",puntos:0},{nombre:"",puntos:0},{nombre:"",puntos:0},{nombre:"",puntos:0}];

const tareas = [{nombre: "Lavar los platos", valor: 0},{nombre: "Limpiar el baño", valor: 0},{nombre: "Cocinar", valor:0},{nombre:"Barrer",valor:0},{nombre:"Hacer la cama",valor:0},{nombre:"Sacar la basura",valor:0}];

tareas[0].valor = parseInt(prompt("Indique un valor del 1 al 100 para lavar los platos"));
if((tareas[0].valor > 100) || (tareas[0].valor <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
    tareas[0].valor = parseInt(prompt("Indique un valor del 1 al 100 para lavar los platos"));
}else{
    console.log("Lavar los platos = "+tareas[0].valor+"pts");
}
tareas[1].valor = parseInt(prompt("Indique un valor del 1 al 100 para limpiar el baño"));
if((tareas[1].valor > 100) || (tareas[1].valor <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
    tareas[1].valor = parseInt(prompt("Indique un valor del 1 al 100 para limpiar el baño"));
}else{
    console.log("Limpiar el baño = "+tareas[1].valor+"pts");
}
tareas[2].valor = parseInt(prompt("Indique un valor del 1 al 100 para Cocinar"));
if((tareas[2].valor > 100) || (tareas[2].valor <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
    tareas[2].valor = parseInt(prompt("Indique un valor del 1 al 100 para Cocinar"));
}else{
    console.log("Cocinar = "+tareas[2].valor+"pts");
}
tareas[3].valor = parseInt(prompt("Indique un valor del 1 al 100 para Barrer"));
if((tareas[3].valor > 100) || (tareas[3].valor <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
    tareas[3].valor = parseInt(prompt("Indique un valor del 1 al 100 para Barrer"));
}else{
    console.log("Barrer = "+tareas[3].valor+"pts");
}
tareas[4].valor = parseInt(prompt("Indique un valor del 1 al 100 para hacer la cama"));
if((tareas[4].valor > 100) || (tareas[4].valor <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
    tareas[4].valor = parseInt(prompt("Indique un valor del 1 al 100 para hacer la cama"));
}else{
    console.log("Hacer la cama = "+tareas[4].valor+"pts");
}
tareas[5].valor = parseInt(prompt("Indique un valor del 1 al 100 para sacar la basura"));
if((tareas[5].valor > 100) || (tareas[5].valor <= 0)){
    alert("Por favor ingrese un valor del 1 al 100");
    tareas[5].valor = parseInt(prompt("Indique un valor del 1 al 100 para sacar la basura"));
}else{
    console.log("Sacar la basura = "+tareas[5].valor+"pts");
}

const valorCasa = tareas.reduce((acc,el) => acc+el.valor,0);
console.log("limpiar la casa vale "+valorCasa+"pts");

let habitantes = prompt("¿Cuantas personas viven en la casa?");
switch(habitantes){
    case "1":
        alert("No tiene mucho sentido que dividas las tareas");
        habitantes = prompt("¿Cuantas personas viven en la casa?");
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
        habitantes = prompt("¿Cuantas personas viven en la casa?");
        break;
        
}

function familiaDeDos(){
    usuarios[0].nombre = prompt("Ingresa el nombre del primer miembro");
    usuarios[1].nombre = prompt("Ingresa el nombre del segundo miembro");
    console.log("Miembro 1: "+usuarios[0].nombre);
    console.log("Miembro 2: "+usuarios[1].nombre);
}
function familiaDeTres(){
    usuarios[2].nombre = prompt("Ingresa el nombre del tercer miembro");
    console.log("Miembro 3: "+usuarios[2].nombre);
}
function familiaDeCuatro(){
    usuarios[3].nombre = prompt("Ingresa el nombre del cuarto miembro");
    console.log("Miembro 4: "+usuarios[3].nombre);
}

while(dia<=1){
    console.log("Dia "+dia)
    let lavarPlatos = prompt("¿Quien lavo los platos hoy?")
    switch(lavarPlatos){
        case usuarios[0].nombre:
            usuarios[0].puntos+=tareas[0].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].puntos+=tareas[0].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].puntos+=tareas[0].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].puntos+=tareas[0].valor;
            break;
        default:
            break;
    }
    let limpiarBaño = prompt("¿Quien limpio el baño hoy?")
    switch(limpiarBaño){
        case usuarios[0].nombre:
            usuarios[0].puntos+=tareas[1].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].puntos+=tareas[1].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].puntos+=tareas[1].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].puntos+=tareas[1].valor;
            break;
        default:
            break;
    }
    let cocinar = prompt("¿Quien cocino hoy?")
    switch(cocinar){
        case usuarios[0].nombre:
            usuarios[0].puntos+=tareas[2].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].puntos+=tareas[2].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].puntos+=tareas[2].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].puntos+=tareas[2].valor;
            break;
        default:
            break;
    }
    let barrer = prompt("¿Quien barrió hoy?")
    switch(barrer){
        case usuarios[0].nombre:
            usuarios[0].puntos+=tareas[3].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].puntos+=tareas[3].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].puntos+=tareas[3].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].puntos+=tareas[3].valor;
            break;
        default:
            break;
    }
    let hacerCama = prompt("¿Quien hizo la cama hoy?")
    switch(hacerCama){
        case usuarios[0].nombre:
            usuarios[0].puntos+=tareas[4].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].puntos+=tareas[4].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].puntos+=tareas[4].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].puntos+=tareas[4].valor;
            break;
        default:
            break;
    }
    let sacarBasura = prompt("¿Quien saco la basura hoy?")
    switch(sacarBasura){
        case usuarios[0].nombre:
            usuarios[0].puntos+=tareas[5].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].puntos+=tareas[5].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].puntos+=tareas[5].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].puntos+=tareas[5].valor;
            break;
        default:
            break;
    }

    if(habitantes==2){
        console.log(usuarios[0].nombre+" tiene "+usuarios[0].puntos+"pts")
        console.log(usuarios[1].nombre+" tiene "+usuarios[1].puntos+"pts")
    }else if(habitantes==3){
        console.log(usuarios[0].nombre+" tiene "+usuarios[0].puntos+"pts")
        console.log(usuarios[1].nombre+" tiene "+usuarios[1].puntos+"pts")
        console.log(usuarios[2].nombre+" tiene "+usuarios[2].puntos+"pts")
    }else if(habitantes==4){
        console.log(usuarios[0].nombre+" tiene "+usuarios[0].puntos+"pts")
        console.log(usuarios[1].nombre+" tiene "+usuarios[1].puntos+"pts")
        console.log(usuarios[2].nombre+" tiene "+usuarios[2].puntos+"pts")
        console.log(usuarios[3].nombre+" tiene "+usuarios[3].puntos+"pts")
    }
    

dia+=1
}












