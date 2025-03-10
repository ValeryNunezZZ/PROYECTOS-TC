/*LENGUAJES HTML TEXT AREAS*/

const lenguajeUno = document.querySelector(".lenguaje_uno");
const lenguajeDos = document.querySelector(".lenguaje_dos");
const lenguajeTres = document.querySelector(".lenguaje_tres");


let setLenguajeUno = new Set();
let setLenguajeDos = new Set();
let setLenguajeTres = new Set();

let setResultante = new Set();
let setResultanteDos = new Set();

const resTextArea = document.querySelector(".resTextArea");

/*

setLenguajeUno.add("buenas");
setLenguajeUno.add("noches");
setLenguajeUno.add("hola");
setLenguajeUno.add("tardes");

setLenguajeDos.add("Uuuuuuu");
setLenguajeDos.add("hola");
setLenguajeDos.add("prueba");
setLenguajeDos.add("okay");

*/

/*
const fs = require('fs').promises;

const leerArchivo = async (name) => {
    try {
        let data = await fs.readFile(name, 'utf8');
        let arregloPalabras = data.split(" ");

        for (let palabra of arregloPalabras) {
            setLenguajeUno.add(palabra);
        }

        imprimirResultadosSinBorrar(setLenguajeUno); // Run after reading the file
    } catch (err) {
        console.error(err);
    }
};

const imprimirResultadosSinBorrar = (setCaso) => {
    for (let value of setCaso) {
        console.log(value);
    }
};

leerArchivo('exampleUno.txt');

*/

const leerArchivo = (name, setCorrespondiente, textAreaCorrespondiente) => {


fetch(name)
.then(response => response.text())
.then(data => {
    
    let arregloPalabras = data.split(" ");

    let mostrarEnTextArea = "";

    for(let i=0 ; i<arregloPalabras.length ; i++){
        //console.log(arregloPalabras[i]);
        setCorrespondiente.add(arregloPalabras[i]);
        mostrarEnTextArea += arregloPalabras[i];
        mostrarEnTextArea += " "
        //console.log(arregloPalabras[i])
    }

    textAreaCorrespondiente.textContent = mostrarEnTextArea;

})
.catch(error => console.error('Error:', error));

}

const imprimirResultadosSinBorrar = (setCaso) => {
    for(let value of setCaso){
        console.log(value);
    }
}


leerArchivo('exampleUno.txt', setLenguajeUno, lenguajeUno);
leerArchivo('exampleDos.txt', setLenguajeDos, lenguajeDos);
leerArchivo('exampleTres.txt', setLenguajeTres, lenguajeTres);


const union = (primero, segundo) => {

    for(let value of primero){
        setResultante.add(value)
    }

    for(let value of segundo){
        setResultante.add(value);
    }
}

const concatenar = (primero, segundo) => {

    for(let valueOne of primero){
        for(let valueDos of segundo){
            setResultante.add(valueOne + valueDos);
        }
    }

}

const reflexion = (primero) => {

    for(let value of primero){
        
        let cadenaVolteada = "";

        for(let i=value.length-1 ; i>=0 ; i--){
            cadenaVolteada += value[i];
        }

        setResultante.add(cadenaVolteada);
    }
}

const potencia = (veces, primero) => {

    //-5 a 10
    let negativo = false;
    if(veces == 0){
        let concatenacion = "";

        concatenacion = "A^(0) = { λ }";
    
        resTextArea.textContent = concatenacion;
        return;
    }
    
    if(veces < 0) negativo = true;

    veces = Math.abs(veces);

    let setAux = new Set(primero); 
    let pos = 1;

    while(pos < veces){

        let setRes = new Set();

        for(let valueOne of setAux){
            for(let valueDos of primero){
                setRes.add(valueOne + valueDos);
            }
        }
        //veces = 3;
        setAux = setRes;

        pos++;
    }

    if(negativo){
        reflexion(setAux);
    }else{
        setResultante = setAux;
    }
    
    
}

const imprimirUnionUno = (setCaso) => {

    let concatenacion = "";

    concatenacion += "A U B = { "

    let pos = 0;

    for(let value of setCaso){
        concatenacion += value;
        if(pos < setCaso.size-1){
            concatenacion += ", ";
        }
        pos++;
    }

    concatenacion += " }"

    resTextArea.textContent = concatenacion;

    setCaso.clear();
}

const imprimirConcatenarUno = (setCaso) => {

    let concatenacion = "";

    concatenacion += "AA = { "

    let pos;

    pos = 0;

    for(let value of setCaso){
        concatenacion += value;
        if(pos < setCaso.size-1){
            concatenacion += ", ";
        }

        pos++;
    }

    concatenacion += " }"

    resTextArea.textContent = concatenacion;

    setCaso.clear();
}

const imprimirConcatenarDos = (setCaso, setCasoDos) => {

    let concatenacion = "";

    concatenacion += "AB = { "

    let pos = 0;

    for(let value of setCaso){
        concatenacion += value;
        if(pos < setCaso.size-1){
            concatenacion += ", ";
        }

        pos++;
    }

    concatenacion += " }"

    concatenacion += "\n\n";

    concatenacion += "BA = { "

    pos = 0;

    for(let value of setCasoDos){
        concatenacion += value;
        if(pos < setCasoDos.size-1){
            concatenacion += ", ";
        }
        
        pos++;
    }

    concatenacion += " }"

    resTextArea.textContent = concatenacion;

    setCaso.clear();
    setCasoDos.clear();
}

const imprimirCerraduraPositiva = (setCaso) => {

    let concatenacion = "";

    concatenacion += "A+ = { "

    let pos;

    pos = 0;

    for(let value of setCaso){
        concatenacion += value;
        if(pos < setCaso.size-1){
            concatenacion += ", ";
        }

        pos++;
    }

    concatenacion += "... }"

    resTextArea.textContent = concatenacion;

    setCaso.clear();
}

const imprimirCerraduraK = (setCaso) => {

    let concatenacion = "";

    concatenacion += "A* = { λ, "

    let pos;

    pos = 0;

    for(let value of setCaso){
        concatenacion += value;
        if(pos < setCaso.size-1){
            concatenacion += ", ";
        }

        pos++;
    }

    concatenacion += "... }"

    resTextArea.textContent = concatenacion;

    setCaso.clear();
}

const imprimirReflexion = (setCaso) => {

    let concatenacion = "";

    concatenacion += "A^(-1) = { "

    let pos;

    pos = 0;

    for(let value of setCaso){
        concatenacion += value;
        if(pos < setCaso.size-1){
            concatenacion += ", ";
        }

        pos++;
    }

    concatenacion += " }"

    resTextArea.textContent = concatenacion;

    setCaso.clear();
}

const imprimirPotencia = (n, setCaso) => {

    let concatenacion = "";

    concatenacion += `A^(${n}) = { `

    let pos;

    pos = 0;

    for(let value of setCaso){
        concatenacion += value;
        if(pos < setCaso.size-1){
            concatenacion += ", ";
        }

        pos++;
    }

    concatenacion += " }"

    resTextArea.textContent = concatenacion;

    setCaso.clear();
}


const cerraduraKleane = (primero) => {
    potencia(4, primero);
}

const cerraduraPositiva = (primero) => {
    potencia(4, primero);
}

//VALIDAR CHECK-BOXES

let lUState;
let lDState;
let lTState;

const cbLenguajes = document.querySelectorAll(".checkbox_Lenguajes");

function validarCheckBoxes(){
    let cunatosCuales = [];

    count = 0;
    lUState = false;
    lDState = false;
    lTState = false;

    if(cbLenguajes[0].checked){
        count++;
        lUState = true;
    }

    if(cbLenguajes[1].checked){
        count++;
        lDState = true;
    }

    if(cbLenguajes[2].checked){
        count++;
        lTState = true;
    }

    cunatosCuales.push(count);
    cunatosCuales.push(lUState);
    cunatosCuales.push(lDState);
    cunatosCuales.push(lTState);

    return cunatosCuales;
}


//EVENTOS

const menuBotones = document.querySelectorAll(".menu_button");

menuBotones[0].addEventListener("click", () => {

    let cuantos = validarCheckBoxes();

    if(cuantos[0] > 2){
        alert("Seleccionar SÓLO DOS para la opción UNIR");
    }else if(cuantos[0] < 1){
        alert("Seleccionar AL MENOS UNO para la opción UNIR");
    }else{

        let primero = null;
        let segundo = null;

        if(cuantos[0] == 1){
            if(cuantos[1]) primero = new Set(setLenguajeUno);
            if(cuantos[2]) primero = new Set(setLenguajeDos);
            if(cuantos[3]) primero = new Set(setLenguajeTres);

            union(primero, primero);
            imprimirUnionUno(setResultante);

        }else{

            let i=1;

            while(primero == null){
                if(cuantos[i] && i == 1) primero = new Set(setLenguajeUno);
                if(cuantos[i] && i == 2) primero = new Set(setLenguajeDos);
                if(cuantos[i] && i == 3) primero = new Set(setLenguajeTres);

                i++;
            }

            while(segundo == null){
                if(cuantos[i] && i == 1) segundo = new Set(setLenguajeUno);
                if(cuantos[i] && i == 2) segundo = new Set(setLenguajeDos);
                if(cuantos[i] && i == 3) segundo = new Set(setLenguajeTres);
                
                i++;
            }

            union(primero, segundo);
            imprimirUnionUno(setResultante);
        }
        

        //if(lUState) primero = new Set(setLenguajeUno);

        
    }
    
});

menuBotones[1].addEventListener("click", () => {

    let cuantos = validarCheckBoxes();

    if(cuantos[0] > 2){
        alert("Seleccionar SÓLO DOS para la opción CONCATENAR");
    }else if(cuantos[0] < 1){
        alert("Seleccionar AL MENOS UNO para la opción CONCATENAR");
    }else{

        let primero = null;
        let segundo = null;

        if(cuantos[0] == 1){
            if(cuantos[1]) primero = new Set(setLenguajeUno);
            if(cuantos[2]) primero = new Set(setLenguajeDos);
            if(cuantos[3]) primero = new Set(setLenguajeTres);

            concatenar(primero, primero);
            imprimirConcatenarUno(setResultante);

        }else{

            let i=1;

            while(primero == null){
                if(cuantos[i] && i == 1) primero = new Set(setLenguajeUno);
                if(cuantos[i] && i == 2) primero = new Set(setLenguajeDos);
                if(cuantos[i] && i == 3) primero = new Set(setLenguajeTres);

                i++;
            }

            while(segundo == null){
                if(cuantos[i] && i == 1) segundo = new Set(setLenguajeUno);
                if(cuantos[i] && i == 2) segundo = new Set(setLenguajeDos);
                if(cuantos[i] && i == 3) segundo = new Set(setLenguajeTres);
                
                i++;
            }

            concatenar(primero, segundo);
            let aux = new Set(setResultante);

            setResultante.clear();

            concatenar(segundo, primero);

            imprimirConcatenarDos(setResultante, aux);
        }
        

        //if(lUState) primero = new Set(setLenguajeUno);

        
    }
    
})

menuBotones[2].addEventListener("click", () => {

    let cuantos = validarCheckBoxes();

    if(cuantos[0] > 1){
        alert("Seleccionar SÓLO UNO para la opción CERRADURA (+)");
    }else if(cuantos[0] < 1){
        alert("Seleccionar AL MENOS UNO para la opción CERRADURA (+)");
    }else{

        let primero = null;
            if(cuantos[1]) primero = new Set(setLenguajeUno);
            if(cuantos[2]) primero = new Set(setLenguajeDos);
            if(cuantos[3]) primero = new Set(setLenguajeTres);

            cerraduraPositiva(primero);
            imprimirCerraduraPositiva(setResultante);
        
    }
    
})

menuBotones[3].addEventListener("click", () => {

    let cuantos = validarCheckBoxes();

    if(cuantos[0] > 1){
        alert("Seleccionar SÓLO UNO para la opción CERRADURA (*)");
    }else if(cuantos[0] < 1){
        alert("Seleccionar AL MENOS UNO para la opción CERRADURA (*)");
    }else{

        let primero = null;
            if(cuantos[1]) primero = new Set(setLenguajeUno);
            if(cuantos[2]) primero = new Set(setLenguajeDos);
            if(cuantos[3]) primero = new Set(setLenguajeTres);

            cerraduraKleane(primero);
            imprimirCerraduraK(setResultante);
        
    }
    
})

menuBotones[4].addEventListener("click", () => {

    let cuantos = validarCheckBoxes();

    if(cuantos[0] > 1){
        alert("Seleccionar SÓLO UNO para la opción REFLEXIÓN");
    }else if(cuantos[0] < 1){
        alert("Seleccionar AL MENOS UNO para la opción REFLEXIÓN");
    }else{

        let primero = null;
            if(cuantos[1]) primero = new Set(setLenguajeUno);
            if(cuantos[2]) primero = new Set(setLenguajeDos);
            if(cuantos[3]) primero = new Set(setLenguajeTres);

            reflexion(primero);
            imprimirReflexion(setResultante);
        
    }
    
})

const potenciaValue = document.querySelector(".menu_input");

menuBotones[5].addEventListener("click", () => {

    let cuantos = validarCheckBoxes();

    if(cuantos[0] > 1){
        alert("Seleccionar SÓLO UNO para la opción POTENCIA");
    }else if(cuantos[0] < 1){
        alert("Seleccionar AL MENOS UNO para la opción POTENCIA");
    }else{
        if(potenciaValue.value == "" || parseInt(potenciaValue.value) < -5 || parseInt(potenciaValue.value) > 5){
            alert("Ingresa una potencia entre -5 y 5");
        }else{
            let primero = null;
            if(cuantos[1]) primero = new Set(setLenguajeUno);
            if(cuantos[2]) primero = new Set(setLenguajeDos);
            if(cuantos[3]) primero = new Set(setLenguajeTres);

            potencia(potenciaValue.value, primero);
            if(potenciaValue.value != 0) imprimirPotencia(potenciaValue.value, setResultante);
        }

    }
    
})


function downloadFile() {
    // Get text from the textarea
    let text = document.querySelector(".resTextArea").value;

    // Create a Blob with the text content
    let blob = new Blob([text], { type: "text/plain" });

    // Create a temporary anchor element
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "myTextFile.txt"; // File name

    // Trigger the download
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
}