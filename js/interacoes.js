



//menu hamburguer
function mudoutamanho(){
    let menumobile = document.querySelector('.nav-list-segunda') 
    if(window.innerWidth >= 700){
        menumobile.style.display = 'none'
    }
    }
function menushow() {
    let menumobile = document.querySelector('.nav-list-segunda') 
    if(menumobile.style.display =='block'){
        menumobile.style.display = 'none'
    }else{
        menumobile.style.display = 'block';
    }
}
//! Quero estudar mais este script e entender melhor a lógica dele 

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carrossel-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicadores = document.querySelectorAll('.indicador');
    let currentIndex = 0;
    let intervalo;

    function moverParaSlide(index) {
        if (index < 0) index = slides.length - 1;
        else if (index >= slides.length) index = 0;

        currentIndex = index;
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        atualizarIndicadores();
    }

    function atualizarIndicadores() {
        indicadores.forEach((ind, i) => {
            ind.classList.toggle('active', i === currentIndex);
        });
    }

    function proximoSlide() {
        moverParaSlide(currentIndex + 1);
    }

    function iniciarAutoplay() {
        if (intervalo) clearInterval(intervalo);
        intervalo = setInterval(proximoSlide, 3000);
    }

    // Debounce para evitar cliques rápidos
    function debounce(func, timeout = 500) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    prevBtn.addEventListener('click', debounce(() => {
        clearInterval(intervalo);
        moverParaSlide(currentIndex - 1);
        iniciarAutoplay();
    }));

    nextBtn.addEventListener('click', debounce(() => {
        clearInterval(intervalo);
        moverParaSlide(currentIndex + 1);
        iniciarAutoplay();
    }));

    indicadores.forEach((indicador, i) => {
        indicador.addEventListener('click', debounce(() => {
            clearInterval(intervalo);
            moverParaSlide(i);
            iniciarAutoplay();
        }));
    });

    // Inicia o carrossel
    iniciarAutoplay();

    // Pausa ao passar o mouse
    const carrossel = document.querySelector('.carrossel');
    carrossel.addEventListener('mouseenter', () => clearInterval(intervalo));
    carrossel.addEventListener('mouseleave', iniciarAutoplay);
});

