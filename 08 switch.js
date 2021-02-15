
// Switch

let day = 'monday';

switch (day) {
    case 'monday':
        console.log('Reunión a las 10 am.');
        break;
    case 'tuesday':
        console.log('Hacer deporte a las 10 am.');
        break;
    case 'wednesday': // Se ejecutaría lo mismo para miércoles y jueves.
    case 'thursday':
        console.log('Comida negocios a las 14.');
        break;
    case 'friday':
        console.log('Reunión a las 18.');
        break;
    default:         // El default se ejecutará si todos los demás casos fallan.
        console.log('No es un día válido.')
}

// Mismo caso pero hecho con IF.

if (day === 'monday') {
    console.log('Lunes: Hacer deporte.');

} else if (day === 'tuesday') {
    console.log('Martes: Agenda vacía.');

} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Comida de negocios a las 14.');

} else if (day === 'friday') {
    console.log('Ya es finde!');

} else if (day === 'saturday' || day === 'sunday') {
    console.log('FINDEEEEEEEEEEEEEE AAAA');

} else {
    console.log('No es un día válido.');
}