let validez = false;

let archivoSeleccionado = false;

class AFD{
    constructor(estados, alfabeto, transiciones, estadosFinales, estadoInicial){
        this.estados = estados;
        this.alfabeto = alfabeto;
        this.transiciones = transiciones;
        this.estadosFinales = estadosFinales;
        this.estadoInicial = estadoInicial;
    }

    evaluar(cadena) {
        //cadena = "ab";
        console.log(cadena)
        let estadoActual = this.estadoInicial;
        
        let i=0;
        for(let caracter of cadena){
            if(!alfabeto.includes(caracter)){
                console.log("CADENA CON CARACTERES INVÁLIDOS");
                return;
            }

            estadoActual = transiciones[estadoActual][caracter];

        }

        if(!estadosFinales.includes(estadoActual)){
            return false;
        }else{
            return true;
        }
    }
}

/*
//SE CREA EL OBJ DE TIPO AFD

let estados = 
let alfabeto = 
let transiciones = 
let estadosFinales = 
let estadoInicial = 

let automata = new AFD();
*/

//const estados = new Set(["q0", "q1", "q2"]);
let estados = [];
//const alfabeto = new Set(["0", "1"]);
let alfabeto = [];
let transiciones = {};
let estadoInicial;
//let estadosFinales = ["q2"];
let estadosFinales = [];

//PARA LEER EL ARCHIVO

let r1; //alfabeto
let r2; //estados del autómata
let r3; //estado inicial
let r4; // filas en la función de transiciones
let r5; // Función de transición

let renglones = [];

document.getElementById("file-upload").addEventListener("change",

(event) =>{

    const archivo = event.target.files[0]; // Obtener el primer archivo seleccionado

    if (archivo) {
        const lector = new FileReader(); // Crear un lector de archivos

        lector.onload = function(e) {
            document.getElementById("contenidoArchivo").textContent = e.target.result; // Mostrar contenido

            let i=0;

            e.target.result.split("\n").forEach(renglon => {
                renglones[i] = renglon;
                i++;
            });

            //función CREAR OBJETO
//            console.log("dd");
            crearAutomata();
//            console.log("dd");
        };

        lector.readAsText(archivo); // Leer el archivo como texto
        archivoSeleccionado = true;

        alert("Se ha seleccionado correctamente un archivo :D")
    } else {
        alert("No se seleccionó ningún archivo.");
        archivoSeleccionado = false;
    }
});

/*
function imprimirFuncion(){
    transiciones.forEach((e)=>{
        console.log(e);
    });
}*/

function crearAutomata(){
    
    renglones[0].split(" ").forEach(c => {
        alfabeto.push(c);
    });

    renglones[1].split(" ").forEach(c => {
        estados.push(c);
    });

    estadoInicial = renglones[2];
    
    renglones[3].split(" ").forEach(c => {
        estadosFinales.push(c);
    });

    //VAMOS A FORMAR LA ESTRUCTURA INICIAL DEL OBJETO DE OBJETOS


    //debo de meter un forEach para crear un objeto con cada palabra detectada por el renglón

    //el elemento primero va a ser el iesimo elemento del arreglo

    //el elemento segunod va a ser el elemento que estoy leyendo

    //SON TODOS LAS FILAS QUE TIENE NUESTRA FUNCIÓN DE TRANSICIÓN

    let tam;
    tam = renglones[4];

    for(let i=0 ; i<tam ; i++){

        let j = 0;
        transiciones[estados[i]] = {};
    
        renglones[i+5].split(" ").forEach(c => {
    
            let letra = alfabeto[j];
            //console.log(letra);
            //console.log(estados[i]);
            transiciones[estados[i]][letra] = c;
            j++;
        });
    
    }


    for(let i=0 ; i<estados.length ; i++){
        console.log(estados[i])
    }

    console.log("sdds")

    for(let i=0 ; i<alfabeto.length ; i++){
        console.log(alfabeto[i])
    }
/*
    console.log("jhh")
    Object.entries(transiciones).forEach(([estado, transicion]) => {
        console.log(`Estado: ${estado}`);
        console.log("Transiciones:", transicion);
    });
    */

}


document.querySelector(".botonEvaluar").addEventListener("click", ()=>{

    if(!archivoSeleccionado){
        alert("INGRESE UN ARCHIVO :)");
    }else{
        const automata = new AFD(estados, alfabeto, transiciones, estadosFinales, estadoInicial);

        let palabraAEvaluar = document.querySelector(".palabraAEvaluar");
        //let palabra = document.getElementById("palabra");

        let inputRes = document.getElementById("palabra");
        let piolin = document.querySelector(".piolin");
    
        if(!automata.evaluar(palabraAEvaluar.value)){
            inputRes.innerHTML = "<p>Palabra INVÁLIDA</p>";
            piolin.innerHTML = `<img src="./img/enojado.png">`            
        }else{
            inputRes.innerHTML = "<p>Palabra VÁLIDA</p>";
            piolin.innerHTML = `<img src="./img/Tweety piolin en movimiento (25)_thumb.gif">`
        }
    }

})