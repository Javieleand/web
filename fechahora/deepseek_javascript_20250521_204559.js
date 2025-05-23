function obtenerFechaEspañaSimple() {
    const ahora = new Date();
    
    // Ajustar a hora española (UTC+1/+2)
    const offsetEspaña = ahora.getTimezoneOffset() + (ahora.getTimezoneOffset() > 0 ? 120 : 60);
    ahora.setMinutes(ahora.getMinutes() + offsetEspaña);
    
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const año = ahora.getFullYear();
    
    return `${dia}-${mes}-${año}`;
}