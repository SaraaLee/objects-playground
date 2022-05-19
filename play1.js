/**
 * Los objetos en JavaScript nos permiten almacenar información de forma estrcturada https://www.w3schools.com/js/js_objects.asp
 * 
 */

let gatito = {
    fisicas: {
        edad: 2,
        raza: "Persa",
        vacunasAdministradas: {
            rabia: false,
            triplegatuna: true,
            vihgatuno: true
        }
    },
    caracter: {
        iqGatuno: 56,
        esTravieso: false,
        esCazador: true,
        estaEnCelo: true
    }
}

// console.log("Gato #1", gatito);

// console.log("Quiero acceder a la raza del gatito: ", gatito.fisicas.raza)

// /**
//  * Los objetos pueden incluso contener datos estructurados como arrays, u otros objetos!
//  */

let gatito_dos = {
    edad: 5,
    raza: "Vulgaris",
    vacunado: false,
    latas_favoritas: ["Purina", "Wild Cat"],
    hermanos: gatito
}

console.log("Como podría saber si una de las latas favoritas de este gato es 'Whiskas'");

let resultado = gatito_dos.latas_favoritas.includes("Whiskas");
console.log(resultado);

// Cómo actualizado a 6 la edad de gatito_dos?
gatito_dos.edad += 1; // gatito_dos.edad = gatito_dos.edad + 1; // equivalente

// El gatito dos tiene una nueva lata de comida favorita. Se llama "Nelly". Añade esta lata al gatito_dos
gatito_dos.latas_favoritas.push("Nelly");
console.log(gatito_dos);
