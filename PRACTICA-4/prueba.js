/*estados = ['q0', 'q1', 'q2']


let tam = 4;

for(let i=0 ; i<tam ; i++){

    let j = 0;

    renglones[i].split(" ").forEach(c => {

        let letra = alfabeto[j];
        transiciones[estados[i]][letra] = c;
        j++;

    });

}

estados.forEach(e => {
    transiciones[e] = {};
})

const transiciones = {
    "q0": { "0": "q1", "1": "q0" },
    "q1": { "0": "q1", "1": "q2" },
    "q2": { "0": "q1", "1": "q0" }
};
*/