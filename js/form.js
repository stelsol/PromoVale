// script.js
const form = document.querySelector('#formu');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    alert("Informações enviadas!");
});
