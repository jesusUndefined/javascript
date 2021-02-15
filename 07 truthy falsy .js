
// Truthy and Falsy
// Hay 5 tipos de valores falsos: 
// 0, '', undefined, null y NaN. False obviamente también.
// Los 0, '' y undefined no se pasarán a true si se usa la conversión de Boolean().

console.log(Boolean(0)); // NO CONVIERTE A TRUE
console.log(Boolean(undefined)); // NO CONVIERTE A TRUE 
console.log(Boolean('Olakease')); // Sí convierte a true
console.log(Boolean({})); // Sí convierte a true
console.log(Boolean('')); // NO CONVIERTE A TRUE

