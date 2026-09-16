const fechaEvento = new Date('2026-10-12T15:00:00');

const elDias = document.getElementById('dias');
const elHoras = document.getElementById('horas');
const elMinutos = document.getElementById('minutos');
const elSegundos = document.getElementById('segundos');

function actualizarContador() {
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        elDias.textContent = '00';
        elHoras.textContent = '00';
        elMinutos.textContent = '00';
        elSegundos.textContent = '00';
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / 86400000);
    const horas = Math.floor((diferencia % 86400000) / 3600000);
    const minutos = Math.floor((diferencia % 3600000) / 60000);
    const segundos = Math.floor((diferencia % 60000) / 1000);

    elDias.textContent = String(dias).padStart(2, '0');
    elHoras.textContent = String(horas).padStart(2, '0');
    elMinutos.textContent = String(minutos).padStart(2, '0');
    elSegundos.textContent = String(segundos).padStart(2, '0');
}

actualizarContador();
const intervalo = setInterval(actualizarContador, 1000);
