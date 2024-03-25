
/**
 * Suma dos números enteros.
 * @param {number} a - Debe ser un número entero.
 * @param {number} b - Debe ser un número entero.
 * @returns {number|string} - El resultado de la suma, o un mensaje de error si los argumentos no son válidos.
 */
function suma(a,b){
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    } else {
        return "Ambos argumentos deben ser números.";
    }
}

console.log(suma(5,10));

/**
 * Divide dos números enteros.
 * @param {number} a - El dividendo, debe ser un número entero.
 * @param {number} b - El divisor, debe ser un número entero distinto de cero.
 * @returns {number|string} - El resultado de la división, o un mensaje de error si los argumentos no son válidos.
 */
function division(a,b){
    if (Number.isInteger(a) && Number.isInteger(b) && b !== 0) {
        return a / b;
    } else {
        return "Ambos argumentos deben ser números enteros y el divisor no puede ser cero.";
    }
}

console.log(division(20,2));
console.log(division(20,0));


/**
 * Busca el mayor en una coleccion de numeros.
 * @param {number[]} numbers - Un array de números.
 * @returns {number} - El numero mayor de la coleccion.
 */

function mayorArray(arrayNumeros){
    let mayor = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        if(arrayNumeros[i] > mayor){
            mayor = arrayNumeros[i];
        }
    }
    return mayor;
}

let numeros = [2,8,9,7,5,6];

console.log(mayorArray(numeros));