function establecer_recordatorio(fechaHoraRecordatorio, mensaje) {
    //Obtener al fecha y hora actuales
    const fechaActual = new Date();

    //convertir el texto de la fecha y hora del recordatorio en un objeto Date
    const horaRecordatorio = new Date(fechaHoraRecordatorio);

    //Calcular la diferencia en milisegundos entre la hora actual y la hora de recordatorio 
    const diferenciaTiempo = horaRecordatorio.getTime();

    //Si la diferencia es positiva, significa que el recordatorio es para el futuro 
    if (diferenciaTiempo > 0) {
        // Configurar un temporizador para mostrar el mensaje despues del tiempo calculado
        setTimeout (() => {
            // Obtener y mostrar la fecha y hora del recoratorio
            const anio = horaRecordatorio.getFullYear();
            const mes = horaRecordatorio.getMonth() + 1;
            const dia = horaRecordatorio.getDay();
            const horas = horaRecordatorio.getHours();
            const minutos = horaRecordatorio.getMinutes();
            const segundos = horaRecordatorio.getSeconds();

            console.log(`Recordatorio para ${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}: ${mensaje}`);
            
        },diferenciaTiempo);
    }else{
        // Si la hora ya paso, mostrar un mensaje informativo
        console.log("La fecha y hora ya han pasado.");
        
    }

}
//Recordatorio para la entrega de la practica
establecer_recordatorio("¡2024-09-06T18:33:25", "Entrega la practicaa!")