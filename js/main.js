let dia = 1
let habitantes = document.getElementById("personas");
let LavarPlatosTarea = document.getElementById("lavarPlatos");
let limpiarBanoTarea = document.getElementById("limpiarBano");
let cocinarTarea = document.getElementById("cocinar");
let barrerTarea = document.getElementById("barrer");
let hacerCamaTarea = document.getElementById("hacerCama");
let basuraTarea = document.getElementById("basura");
let miembro1 = document.getElementById("divMiembro1");
let miembro2 = document.getElementById("divMiembro2");
let miembro3 = document.getElementById("divMiembro3");
let miembro4 = document.getElementById("divMiembro4");
let botonNombres = document.getElementById("botonMiembros");
let quienHizo = document.getElementById("quienHizo");
let asignarLasTareas = document.getElementById("asignarTareas");
let puntuacionDiaria = document.getElementById("puntuacionDiaria");
let section = document.getElementById("section");
let section2 = document.getElementById("section2");
let formulario = document.getElementById("formulario");
const resultadoMiembro1 = document.getElementById("resultadoMiembro1");
const resultadoMiembro2 = document.getElementById("resultadoMiembro2");
const resultadoMiembro3 = document.getElementById("resultadoMiembro3");
const resultadoMiembro4 = document.getElementById("resultadoMiembro4");
const resultadoMiembro0 = document.getElementById("resultadoMiembro0");
const resultados = document.getElementById("resultados")
let usuarios = [{},{},{},{}];
let tareas = [{},{},{},{},{},{}];
const cargarTareasJSON = ()=>{
    fetch("json/datos.json")
        .then((res)=>{
            return res.json()
        })
        .then((datos)=>{
            tareas = datos
        })
        .catch((err)=>{
            console.log(err)
        })
}
const cargar = document.getElementById("cargar");
LavarPlatosTarea.addEventListener("click", cargarTareasJSON);
cargar.addEventListener("click", cargarValores);

function cargarValores(evt){
    evt.preventDefault();
    limpiarHTML()
    borrarForm()
    let valorPlatos = Number(LavarPlatosTarea.value)
    tareas[0].valor = valorPlatos;
    let valorBano = Number(limpiarBanoTarea.value)
    tareas[1].valor = valorBano;
    let valorCocina = Number(cocinarTarea.value)
    tareas[2].valor = valorCocina;
    let valorBarrer = Number(barrerTarea.value)
    tareas[3].valor = valorBarrer;
    let valorCama = Number(hacerCamaTarea.value)
    tareas[4].valor = valorCama;
    let valorBasura = Number(basuraTarea.value)
    tareas[5].valor = valorBasura;
    const valorCasa = tareas.reduce((acc,el) => acc+el.valor,0);
    Swal.fire(`Limpiar toda la casa vale ${valorCasa}pts.`)
    resultados.innerHTML = `Lavar los platos ${tareas[0].valor}pts. - Limpiar el Baño ${tareas[1].valor}pts.<br>Cocinar ${tareas[2].valor}pts. - Barrer ${tareas[3].valor}pts.<br>Hacer la cama ${tareas[4].valor}pts. - sacar la basura ${tareas[5].valor}pts.`
    resultados.className = "resultados"
    switchHabitantes(habitantes.value)
    const ingresarMiembros = document.getElementById("nombres");
    ingresarMiembros.addEventListener("click", cargarDatos);
    function cargarDatos (evt) {
        evt.preventDefault()
        limpiarHTML2()
        let nombreMiembro1 = document.getElementById("miembro1");
        let nombreMiembro2 = document.getElementById("miembro2");
        let nombreMiembro3 = document.getElementById("miembro3");
        let nombreMiembro4 = document.getElementById("miembro4");
        if(nombreMiembro1 != null) {
            usuarios[0].nombre = nombreMiembro1.value
            usuarios[0].valor = 0
            resultadoMiembro1.className = "resultados"
            resultadoMiembro1.textContent = `Miembro 1: ${usuarios[0].nombre}`;
        }
        if(nombreMiembro2 != null) {
            usuarios[1].nombre = nombreMiembro2.value
            usuarios[1].valor = 0
            resultadoMiembro2.className = "resultados"
            resultadoMiembro2.textContent = `Miembro 2: ${usuarios[1].nombre}`;
        }
        if(nombreMiembro3 != null) {
            usuarios[2].nombre = nombreMiembro3.value
            usuarios[2].valor = 0
            resultadoMiembro3.className = "resultados"
            resultadoMiembro3.textContent = `Miembro 3: ${usuarios[2].nombre}`;
        }
        if(nombreMiembro4 != null) {
            usuarios[3].nombre = nombreMiembro4.value
            usuarios[3].valor = 0
            resultadoMiembro4.className = "resultados"
            resultadoMiembro4.textContent = `Miembro 4: ${usuarios[3].nombre}`;
        }
        quienLoHizo()
        asignarTareas()
        borrarForm2()
        const darTareas = document.getElementById("asignar");
        darTareas.addEventListener("click", cargarTareas);
        function cargarTareas (evt) {
            evt.preventDefault()
            let quienPlatos = document.getElementById("quienPlatos");
            let quienBano = document.getElementById("quienBano");
            let quienCocina = document.getElementById("quienCocina");
            let quienBarre = document.getElementById("quienBarre");
            let quienCama = document.getElementById("quienCama");
            let quienBasura = document.getElementById("quienBasura");
            switchPlatos(quienPlatos.value)
            switchBano(quienBano.value)
            switchCocina(quienCocina.value)
            switchBarre(quienBarre.value)
            switchCama(quienCama.value)
            switchBasura(quienBasura.value)
            if(habitantes.value=="2"){
                puntuacionDiaria.innerHTML = `${usuarios[0].nombre} tiene ${usuarios[0].valor}pts <br> ${usuarios[1].nombre} tiene ${usuarios[1].valor}pts`
            }else if(habitantes.value=="3"){
                puntuacionDiaria.innerHTML = `${usuarios[0].nombre} tiene ${usuarios[0].valor}pts <br> ${usuarios[1].nombre} tiene ${usuarios[1].valor}pts <br> ${usuarios[2].nombre} tiene ${usuarios[2].valor}pts`
            }else if(habitantes.value=="4"){
                puntuacionDiaria.innerHTML = `${usuarios[0].nombre} tiene ${usuarios[0].valor}pts <br> ${usuarios[1].nombre} tiene ${usuarios[1].valor}pts <br> ${usuarios[2].nombre} tiene ${usuarios[2].valor}pts <br> ${usuarios[3].nombre} tiene ${usuarios[3].valor}pts`
            }
            Swal.fire(puntuacionDiaria)
            const usuariosJSON = JSON.stringify(usuarios);
            localStorage.setItem("usuarios", usuariosJSON);
        }
    }
}
function borrarForm (){
    section = section.removeChild(formulario)
    section = document.getElementById("section");
}
function borrarForm2 (){
    section = section.removeChild(section2)
}
function limpiarHTML(){
    while(resultadoMiembro0.textContent!=""){
        resultadoMiembro0.textContent = "";
    }
    while (miembro1.firstChild){
        miembro1.removeChild(miembro1.firstChild);
    }
    while(miembro2.firstChild){
        miembro2.removeChild(miembro2.firstChild);
    }
    while(miembro3.firstChild){
        miembro3.removeChild(miembro3.firstChild);
    }
    while(miembro4.firstChild){
        miembro4.removeChild(miembro4.firstChild);
    }
    while(botonMiembros.firstChild){
        botonMiembros.removeChild(botonMiembros.firstChild);
    }
}
function limpiarHTML2(){
    while(quienHizo.firstChild){
        quienHizo.removeChild(quienHizo.firstChild);
    }
    while(asignarLasTareas.firstChild){
        asignarLasTareas.removeChild(asignarLasTareas.firstChild)
    }
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
        resultadoMiembro0.textContent = "Es mas de lo que podemos manejar";
        break;
    }
}
function familiaDeDos(){
    const divMiembro1 = document.createElement("div");
    divMiembro1.className = "cuadro"

    const label1 = document.createElement("label");
    label1.for = "miembro1";
    label1.textContent = "Ingresa el nombre del primer miembro";

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "miembro1";
    input1.name = "miembro1";


    divMiembro1.appendChild(label1)
    divMiembro1.appendChild(input1)

    const divMiembro2 = document.createElement("div")
    divMiembro2.className = "cuadro"

    const label2 = document.createElement("label");
    label2.for = "miembro2";
    label2.textContent = "Ingresa el nombre del segundo miembro";

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "miembro2";
    input2.name = "miembro2";


    divMiembro2.appendChild(label2)
    divMiembro2.appendChild(input2)

    miembro1.appendChild(divMiembro1);
    miembro2.appendChild(divMiembro2);
}
function familiaDeTres(){
    const divMiembro3 = document.createElement("div")
    divMiembro3.className = "cuadro"

    const label3 = document.createElement("label");
    label3.for = "miembro3";
    label3.textContent = "Ingresa el nombre del primer miembro";

    const input3 = document.createElement("input");
    input3.type = "text";
    input3.id = "miembro3";
    input3.name = "miembro3";

    divMiembro3.appendChild(label3)
    divMiembro3.appendChild(input3)

    

    miembro3.appendChild(divMiembro3);
}
function familiaDeCuatro(){
    const divMiembro4 = document.createElement("div")
    divMiembro4.className = "cuadro"

    const label4 = document.createElement("label");
    label4.for = "miembro4";
    label4.textContent = "Ingresa el nombre del primer miembro";

    const input4 = document.createElement("input");
    input4.type = "text";
    input4.id = "miembro4";
    input4.name = "miembro4";

    divMiembro4.appendChild(label4)
    divMiembro4.appendChild(input4)


    miembro4.appendChild(divMiembro4);
}
function cargarNombres() {
    const botonMiembros = document.createElement("div");
    const boton = document.createElement("input");
    boton.className = "boton";
    boton.type = "submit";
    boton.id = "nombres"
    boton.value = "Cargar Miembros";

    botonMiembros.appendChild(boton)
    botonNombres.appendChild(botonMiembros)
}
function quienLoHizo() {
    const divQuienPlatos = document.createElement("div");
    divQuienPlatos.className = "cuadro"
    const labelPlatos = document.createElement("label");
    labelPlatos.for = "quienPlatos";
    labelPlatos.textContent = "¿Quién lavo los platos hoy?";
    const inputPlatos = document.createElement("input");
    inputPlatos.type = "text";
    inputPlatos.id = "quienPlatos";
    inputPlatos.name = "quienPlatos";
    divQuienPlatos.appendChild(labelPlatos);
    divQuienPlatos.appendChild(inputPlatos);

    const divQuienBano = document.createElement("div");
    divQuienBano.className = "cuadro"
    const labelBano = document.createElement("label");
    labelBano.for = "quienBano";
    labelBano.textContent = "¿Quién limpio el baño hoy?";
    const inputBano = document.createElement("input");
    inputBano.type = "text";
    inputBano.id = "quienBano";
    inputBano.name = "quienBano";
    divQuienBano.appendChild(labelBano);
    divQuienBano.appendChild(inputBano);

    const divQuienCocina = document.createElement("div");
    divQuienCocina.className = "cuadro"
    const labelCocina = document.createElement("label");
    labelCocina.for = "quienCocina";
    labelCocina.textContent = "¿Quién cocinó hoy?";
    const inputCocina = document.createElement("input");
    inputCocina.type = "text";
    inputCocina.id = "quienCocina";
    inputCocina.name = "quienCocina";
    divQuienCocina.appendChild(labelCocina);
    divQuienCocina.appendChild(inputCocina);

    const divQuienBarre = document.createElement("div");
    divQuienBarre.className = "cuadro"
    const labelBarre = document.createElement("label");
    labelBarre.for = "quienBarre";
    labelBarre.textContent = "¿Quién barrió hoy?";
    const inputBarre = document.createElement("input");
    inputBarre.type = "text";
    inputBarre.id = "quienBarre";
    inputBarre.name = "quienBarre";
    divQuienBarre.appendChild(labelBarre);
    divQuienBarre.appendChild(inputBarre);

    const divQuienCama = document.createElement("div");
    divQuienCama.className = "cuadro"
    const labelCama = document.createElement("label");
    labelCama.for = "quienCama";
    labelCama.textContent = "¿Quién hizo la cama hoy?";
    const inputCama = document.createElement("input");
    inputCama.type = "text";
    inputCama.id = "quienCama";
    inputCama.name = "quienCama";
    divQuienCama.appendChild(labelCama);
    divQuienCama.appendChild(inputCama);

    const divQuienBasura = document.createElement("div");
    divQuienBasura.className = "cuadro"
    const labelBasura = document.createElement("label");
    labelBasura.for = "quienBasura";
    labelBasura.textContent = "¿Quién sacó la basura hoy?";
    const inputBasura = document.createElement("input");
    inputBasura.type = "text";
    inputBasura.id = "quienBasura";
    inputBasura.name = "quienBasura";
    divQuienBasura.appendChild(labelBasura);
    divQuienBasura.appendChild(inputBasura);

    quienHizo.appendChild(divQuienPlatos);
    quienHizo.appendChild(divQuienBano);
    quienHizo.appendChild(divQuienCocina);
    quienHizo.appendChild(divQuienBarre);
    quienHizo.appendChild(divQuienCama);
    quienHizo.appendChild(divQuienBasura);
}
function asignarTareas() {
    const asignar = document.createElement("div");
    const botonAsignar = document.createElement("input");
    botonAsignar.className = "boton"
    botonAsignar.type = "submit";
    botonAsignar.id = "asignar"
    botonAsignar.value = "Asignar Tareas";

    asignar.appendChild(botonAsignar)
    asignarLasTareas.appendChild(asignar)
}
const switchPlatos = (quienPlatos) => {
    switch(quienPlatos){
        case usuarios[0].nombre:
            usuarios[0].valor+=tareas[0].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].valor+=tareas[0].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].valor+=tareas[0].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].valor+=tareas[0].valor;
            break;
        default:
            break;
    }
}
const switchBano = (quienBano) => {
    switch(quienBano){
        case usuarios[0].nombre:
            usuarios[0].valor+=tareas[1].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].valor+=tareas[1].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].valor+=tareas[1].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].valor+=tareas[1].valor;
            break;
        default:
            break;
    }
}
const switchCocina = (quienCocina) => {
    switch(quienCocina){
        case usuarios[0].nombre:
            usuarios[0].valor+=tareas[2].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].valor+=tareas[2].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].valor+=tareas[2].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].valor+=tareas[2].valor;
            break;
        default:
            break;
    }
}
const switchBarre = (quienBarre) => {
    switch(quienBarre){
        case usuarios[0].nombre:
            usuarios[0].valor+=tareas[3].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].valor+=tareas[3].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].valor+=tareas[3].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].valor+=tareas[3].valor;
            break;
        default:
            break;
    }
}
const switchCama = (quienCama) => {
    switch(quienCama){
        case usuarios[0].nombre:
            usuarios[0].valor+=tareas[4].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].valor+=tareas[4].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].valor+=tareas[4].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].valor+=tareas[4].valor;
            break;
        default:
            break;
    }
}
const switchBasura = (quienBasura) => {
    switch(quienBasura){
        case usuarios[0].nombre:
            usuarios[0].valor+=tareas[5].valor;
            break;
        case usuarios[1].nombre:
            usuarios[1].valor+=tareas[5].valor;
            break;
        case usuarios[2].nombre:
            usuarios[2].valor+=tareas[5].valor;
            break;
        case usuarios[3].nombre:
            usuarios[3].valor+=tareas[5].valor;
            break;
        default:
            break;
    }
}
