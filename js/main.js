let dia = 1

const usuarios = [{nombre:"",puntos:0},{nombre:"",puntos:0},{nombre:"",puntos:0},{nombre:"",puntos:0}];

const tareas = [{nombre: "Lavar los platos", valor: 0},{nombre: "Limpiar el baño", valor: 0},{nombre: "Cocinar", valor:0},{nombre:"Barrer",valor:0},{nombre:"Hacer la cama",valor:0},{nombre:"Sacar la basura",valor:0}];

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", cargarValores);

function cargarValores(evt){
    tareas[0].valor = document.getElementById("lavarPlatos").value;
    tareas[1].valor = document.getElementById("limpiarBano").value;
    tareas[2].valor = document.getElementById("cocinar").value;
    tareas[3].valor = document.getElementById("barrer").value;
    tareas[4].valor = document.getElementById("hacerCama").value;
    tareas[5].valor = document.getElementById("basura").value;
    evt.preventDefault();
}

const resultado1 = document.getElementById("resultado1")
const resultado2 = document.getElementById("resultado2")
const resultado3 = document.getElementById("resultado3")
const resultado4 = document.getElementById("resultado4")
const resultado5 = document.getElementById("resultado5")
const resultado6 = document.getElementById("resultado6")
const resultado7 = document.getElementById("resultado7")

function res1() {
    if((tareas[0].valor > 100) || (tareas[0].valor <= 0)){
        return () => resultado1.textContent("Por favor ingrese un valor del 1 al 100");
    }else{
        return () => resultado1.textContent(`Lavar los platos ${tareas[0].valor}pts`);
    }
}
function res2() {
    if((tareas[1].valor > 100) || (tareas[1].valor <= 0)){
        return () => resultado2.textContent("Por favor ingrese un valor del 1 al 100");
    }else{
        return () => resultado2.textContent(`Limpiar el baño ${tareas[1].valor}pts`);
    }
}
function res3() {
    if((tareas[2].valor > 100) || (tareas[2].valor <= 0)){
        return () => resultado3.textContent("Por favor ingrese un valor del 1 al 100");
    }else{  
        return () => resultado3.textContent(`Cocinar ${tareas[2].valor}pts`);
    }
}
function res4() {
    if((tareas[3].valor > 100) || (tareas[3].valor <= 0)){
        return () => resultado4.textContent("Por favor ingrese un valor del 1 al 100");
    }else{
        return () => resultado4.textContent(`Barrer ${tareas[3].valor}pts`);
    }
}
function res5() {
    if((tareas[4].valor > 100) || (tareas[4].valor <= 0)){
        return () => resultado5.textContent("Por favor ingrese un valor del 1 al 100");
    }else{
        return () => resultado5.textContent(`Hacer la cama ${tareas[4].valor}pts`);
    }
}
function res6() {
    if((tareas[5].valor > 100) || (tareas[5].valor <= 0)){
        return () => resultado6.textContent("Por favor ingrese un valor del 1 al 100");
    }else{
        return () => resultado6.textContent(`Sacar la basura ${tareas[5].valor}pts`);
    }
}

const valorCasa = tareas.reduce((acc,el) => acc+el.valor,0);
console.log("limpiar toda la casa vale "+valorCasa+"pts");

let habitantes = document.getElementById("personas").value;
switch(habitantes){
    case "1":
        resultado7.textContent = "No tiene mucho sentido que dividas las tareas";
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
        habitantes.value = "Es mas de lo que podemos manejar";
        break;
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

    const boton1 = document.createElement("input");
    boton1.type = "submit";
    boton1.value = "Cargar";

    const resultado8 = document.createElement("div");
    resultado8.id = "resultado8";

    divMiembro1.appendChild(label1)
    divMiembro1.appendChild(input1)
    divMiembro1.appendChild(boton1)
    divMiembro1.appendChild(resultado8)

    const divMiembro2 = document.createElement("div")

    const label2 = document.createElement("label");
    label2.for = "miembro2";
    label2.textContent = "Ingresa el nombre del primer miembro";

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "miembro2";
    input2.name = "miembro2";

    const boton2 = document.createElement("input");
    boton2.type = "submit";
    boton2.value = "Cargar";

    const resultado9 = document.createElement("div");
    resultado9.id = "resultado9";

    divMiembro2.appendChild(label2)
    divMiembro2.appendChild(input2)
    divMiembro2.appendChild(boton2)
    divMiembro2.appendChild(resultado9)

    usuarios[0].nombre = input1.value;
    usuarios[1].nombre = input2.value;
    resultado8.textContent = `Miembro 1: ${usuarios[0].nombre}`;
    resultado9.textContent = `Miembro 2: ${usuarios[1].nombre}`;
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

    const boton3 = document.createElement("input");
    boton3.type = "submit";
    boton3.value = "Cargar";

    const resultado10 = document.createElement("div");
    resultado10.id = "resultado10";

    divMiembro3.appendChild(label3)
    divMiembro3.appendChild(input3)
    divMiembro3.appendChild(boton3)
    divMiembro3.appendChild(resultado10)

    usuarios[2].nombre = input3.value;
    resultado10.textContent = `Miembro 3: ${usuarios[2].nombre}`;
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

    const boton4 = document.createElement("input");
    boton4.type = "submit";
    boton4.value = "Cargar";

    const resultado11 = document.createElement("div");
    resultado11.id = "resultado11";

    divMiembro4.appendChild(label4)
    divMiembro4.appendChild(input4)
    divMiembro4.appendChild(boton4)
    divMiembro4.appendChild(resultado11)

    usuarios[3].nombre = input4.value;
    resultado11.textContent = `Miembro 4: ${usuarios[3].nombre}`;
}

while(dia<=1){
    console.log("Dia "+dia)
    let lavarPlatos = document.getElementById("platos").value;
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
    let limpiarBaño = document.getElementById("baño").value;
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










