const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
});

function resultado (msg) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = `${msg}`
}