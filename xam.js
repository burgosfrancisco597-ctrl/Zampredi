document.addEventListener('DOMContentLoaded', () => {
    const formTurno = document.getElementById('formTurno');
    const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
    const inputFecha = document.getElementById('fecha');

    // Bloquear fechas anteriores a hoy en el calendario
    if (inputFecha) {
        const hoy = new Date().toISOString().split('T')[0];
        inputFecha.setAttribute('min', hoy);
    }

    // Manejar el envío del formulario de turnos
    if (formTurno) {
        formTurno.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const tipoMoto = document.getElementById('tipoMoto').value.trim();
            const fecha = document.getElementById('fecha').value;
            const motivo = document.getElementById('motivo').value.trim();

            mensajeConfirmacion.innerHTML = `
                <strong>¡Turno solicitado con éxito, ${nombre}!</strong><br>
                Registramos tu consulta para tu <b>${tipoMoto}</b> el día <b>${fecha}</b>.<br>
                Te contactaremos pronto al <b>${telefono}</b>.
            `;
            mensajeConfirmacion.classList.remove('d-none');

            formTurno.reset();
        });
    }
});