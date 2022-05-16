let dia = 1
let LavarPlatosTarea = document.getElementById("lavarPlatos");
let habitantes = document.getElementById("personas");
let lavarPlatos = document.getElementById("platos");
let miembro1 = document.getElementById("divMiembro1");
let miembro2 = document.getElementById("divMiembro2");
let miembro3 = document.getElementById("divMiembro3");
let miembro4 = document.getElementById("divMiembro4");
let botonNombres = document.getElementById("botonMiembros");
let nombreMiembro1 = document.getElementById("miembro1");
let nombreMiembro2 = document.getElementById("miembro2");
let nombreMiembro3 = document.getElementById("miembro3");
let nombreMiembro4 = document.getElementById("miembro4");
let quienHizo = document.getElementById("quienHizo");
let asignarLasTareas = document.getElementById("asignarTareas");
const resultadoPlatos = document.getElementById("resultadoPlatos");
const resultadoMiembro0 = document.getElementById("resultadoMiembro0");
const resultadoMiembro1 = document.getElementById("resultadoMiembro1");
const resultadoMiembro2 = document.getElementById("resultadoMiembro2");
const resultadoMiembro3 = document.getElementById("resultadoMiembro3");
const resultadoMiembro4 = document.getElementById("resultadoMiembro4");
const valorTotal = document.getElementById("valorCasa");

const usuarios = [{},{},{},{}];

const tareas = [{nombre: "Lavar los platos", valor: 0},
                {nombre: "Limpiar el baño", valor: 0},
                {nombre: "Cocinar", valor:0},
                {nombre:"Barrer",valor:0},
                {nombre:"Hacer la cama",valor:0},
                {nombre:"Sacar la basura",valor:0}
            ];

const cargar = document.getElementById("cargar");
cargar.addEventListener("click", cargarValores);


function cargarValores(evt){
    let valorPlatos = Number(LavarPlatosTarea.value)
    tareas[0].valor = valorPlatos;
    evt.preventDefault();
    res1(valorPlatos);
    const valorCasa = tareas.reduce((acc,el) => acc+el.valor,0);
    valorTotal.innerHTML = "Limpiar toda la casa vale "+valorCasa+"pts";
    switchHabitantes(habitantes.value)

    const ingresarMiembros = document.getElementById("nombres");
    ingresarMiembros.addEventListener("click", cargarDatos);

    function cargarDatos (evt) {
        console.log(usuarios)
        evt.preventDefault()
        console.log(nombreMiembro1)
        quienLoHizo()
        asignarTareas()
    }
    

    
}

function res1(valorPlatos) {
    if((valorPlatos > 100) || (valorPlatos <= 0)){
        return resultadoPlatos.innerHTML="Por favor ingrese un valor del 1 al 100";
    }
resultadoPlatos.innerHTML=`Lavar los platos ${valorPlatos}pts`;
}



const switchHabitantes = (habitantes) => {
    switch(habitantes){
    case "1":
        resultadoMiembro0.textContent = "No tiene mucho sentido que dividas las tareas";
        break;
    case "2":
        familiaDeDos()
        cargarNombres()
        break;
    case "3":
        familiaDeDos()
        familiaDeTres()
        cargarNombres()
        break;
    case "4":
        familiaDeDos()
        familiaDeTres()
        familiaDeCuatro()
        cargarNombres()
        break;
    default:
        habitantes.value = "Es mas de lo que podemos manejar";
        break;
    }
}


function familiaDeDos(){
    const divMiembro1 = document.createElement("div");

    const label1 = document.createElement("label");
    label1.for = "miembro1";
    label1.textContent = "Ingresa el nombre del primer miembro";

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "miembro1";
    input1.name = "miembro1";

    const resultadoMiembro1 = document.createElement("div");
    resultadoMiembro1.id = "resultadoMiembro1";

    divMiembro1.appendChild(label1)
    divMiembro1.appendChild(input1)
    divMiembro1.appendChild(resultadoMiembro1)

    const divMiembro2 = document.createElement("div")

    const label2 = document.createElement("label");
    label2.for = "miembro2";
    label2.textContent = "Ingresa el nombre del segundo miembro";

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "miembro2";
    input2.name = "miembro2";

    const resultadoMiembro2 = document.createElement("div");
    resultadoMiembro2.id = "resultadoMiembro2";

    divMiembro2.appendChild(label2)
    divMiembro2.appendChild(input2)
    divMiembro2.appendChild(resultadoMiembro2)

    
    if(input1.value !="") {
        resultadoMiembro1.textContent = `Miembro 1: ${usuarios[0].nombre}`;
    }
    if(input2.value !="") {
        resultadoMiembro2.textContent = `Miembro 2: ${usuarios[1].nombre}`;
    }

    usuarios[0].nombre = nombreMiembro1
    usuarios[0].valor = 0
    usuarios[1].nombre = nombreMiembro2
    usuarios[1].valor = 0

    miembro1.appendChild(divMiembro1);
    miembro2.appendChild(divMiembro2);
}

function familiaDeTres(){
    const divMiembro3 = document.createElement("div")

    const label3 = document.createElement("label");
    label3.for = "miembro3";
    label3.textContent = "Ingresa el nombre del primer miembro";

    const input3 = document.createElement("input");
    input3.type = "text";
    input3.id = "miembro3";
    input3.name = "miembro3";

    const resultadoMiembro3 = document.createElement("div");
    resultadoMiembro3.id = "resultadoMiembro3";

    divMiembro3.appendChild(label3)
    divMiembro3.appendChild(input3)
    divMiembro3.appendChild(resultadoMiembro3)

    usuarios[2].nombre = nombreMiembro3
    usuarios[2].valor = 0
    
    if(input3.value !="") {
        resultadoMiembro3.textContent = `Miembro 3: ${usuarios[2].nombre}`;
    }
    miembro3.appendChild(divMiembro3);
}
function familiaDeCuatro(){
    const divMiembro4 = document.createElement("div")

    const label4 = document.createElement("label");
    label4.for = "miembro4";
    label4.textContent = "Ingresa el nombre del primer miembro";

    const input4 = document.createElement("input");
    input4.type = "text";
    input4.id = "miembro4";
    input4.name = "miembro4";

    const resultadoMiembro4 = document.createElement("div");
    resultadoMiembro4.id = "resultadoMiembro4";

    divMiembro4.appendChild(label4)
    divMiembro4.appendChild(input4)
    divMiembro4.appendChild(resultadoMiembro4)

    usuarios[3].nombre = input4.value;
    if(input4.value !="") {
        resultadoMiembro4.textContent = `Miembro 4: ${usuarios[3].nombre}`;
    }
    miembro4.appendChild(divMiembro4);
}

function cargarNombres() {
    const botonMiembros = document.createElement("div");
    const boton = document.createElement("input");
    boton.type = "submit";
    boton.id = "nombres"
    boton.value = "Cargar Miembros";

    botonMiembros.appendChild(boton)
    botonNombres.appendChild(botonMiembros)
}

function quienLoHizo() {
    const divQuienPlatos = document.createElement("div")

    const labelPlatos = document.createElement("label");
    labelPlatos.for = "quienPlatos";
    labelPlatos.textContent = "¿Quien lavo los platos hoy?";

    const inputPlatos = document.createElement("input");
    inputPlatos.type = "text";
    inputPlatos.id = "quienPlatos";
    inputPlatos.name = "quienPlatos";

    divQuienPlatos.appendChild(labelPlatos)
    divQuienPlatos.appendChild(inputPlatos)

    quienHizo.appendChild(divQuienPlatos);
}

function asignarTareas() {
    const asignar = document.createElement("div");
    const botonAsignar = document.createElement("input");
    botonAsignar.type = "submit";
    botonAsignar.id = "Asignar"
    botonAsignar.value = "Asignar Tareas";

    asignar.appendChild(botonAsignar)
    asignarLasTareas.appendChild(asignar)
}





/* while(dia<=1){
    console.log("Dia "+dia)
    switch(lavarPlatos){
        case usuarios[0].nombre:
            usuarios[0].puntos+=LavarPlatosTarea;
            break;
        case usuarios[1].nombre:
            usuarios[1].puntos+=LavarPlatosTarea;
            break;
        case usuarios[2].nombre:
            usuarios[2].puntos+=LavarPlatosTarea;
            break;
        case usuarios[3].nombre:
            usuarios[3].puntos+=LavarPlatosTarea;
            break;
        default:
            break;
    } */
    /* let limpiarBaño = document.getElementById("baño").value;
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
    let cocinar = document.getElementById("cocina").value;
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
    let barrer = document.getElementById("barrerCasa").value;
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
    let hacerCama = document.getElementById("cama").value;
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
    let sacarBasura = document.getElementById("basura").value;
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
    } */

/*     if(habitantes==2){
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
} */










