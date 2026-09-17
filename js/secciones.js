const secciones = document.querySelectorAll('.seccion');

if (secciones.length > 1) {
    const nav = document.createElement('div');
    nav.className = 'secciones-nav';

    const etiqueta = document.createElement('div');
    etiqueta.className = 'secciones-etiqueta';
    document.body.appendChild(etiqueta);

    const puntos = [];

    secciones.forEach((seccion, indice) => {
        const punto = document.createElement('button');
        punto.type = 'button';
        punto.className = 'secciones-punto';
        punto.setAttribute('aria-label', seccion.dataset.label || `Sección ${indice + 1}`);

        punto.addEventListener('click', () => {
            seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        nav.appendChild(punto);
        puntos.push(punto);
    });

    document.body.appendChild(nav);

    let etiquetaTimeout;

    const mostrarEtiqueta = (texto) => {
        etiqueta.textContent = texto;
        etiqueta.classList.add('visible');
        clearTimeout(etiquetaTimeout);
        etiquetaTimeout = setTimeout(() => {
            etiqueta.classList.remove('visible');
        }, 1400);
    };

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;

            const indice = Array.from(secciones).indexOf(entrada.target);

            puntos.forEach((punto) => punto.classList.remove('activo'));
            puntos[indice].classList.add('activo');
            mostrarEtiqueta(entrada.target.dataset.label || `Sección ${indice + 1}`);
        });
    }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' });

    secciones.forEach((seccion) => observador.observe(seccion));
}
