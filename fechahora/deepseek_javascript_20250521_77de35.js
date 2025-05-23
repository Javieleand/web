function obtenerFechaEspaña() {
    const ahora = new Date();
    const opciones = { timeZone: 'Europe/Madrid' };
    
    const dia = ahora.toLocaleDateString('es-ES', { ...opciones, day: '2-digit' });
    const mes = ahora.toLocaleDateString('es-ES', { ...opciones, month: '2-digit' });
    const año = ahora.toLocaleDateString('es-ES', { ...opciones, year: 'numeric' });
    
    return `${dia}-${mes}-${año}`;
}

// Uso:
console.log(obtenerFechaEspaña()); // Ejemplo: "22-05-2023"