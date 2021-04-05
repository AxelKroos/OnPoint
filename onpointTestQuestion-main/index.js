let sliders = document.querySelector('.sliders');
let oneSlide = document.querySelector('#oneSlide');
let twoSlide = document.querySelector('#twoSlide');
let threeSlide = document.querySelector('#threeSlide');

let scroll = sliders.scrollTop;

/*Задаём функцию, проверяющую текущее положение экрана относительно топа*/
let check = () => {

    if (sliders.scrollTop < 600) {
        oneSlide.classList.add('active');
        twoSlide.classList.remove('active');
        threeSlide.classList.remove('active');
    } else if (sliders.scrollTop > 600 && sliders.scrollTop < 900) {
        twoSlide.classList.add('active');
        oneSlide.classList.remove('active');
        threeSlide.classList.remove('active');
    } else if (sliders.scrollTop > 1200 && sliders.scrollTop < 1700) {
        threeSlide.classList.add('active');
        oneSlide.classList.remove('active');
        twoSlide.classList.remove('active');
    }
}

check();

/*Вызываем верхнюю функцию после взаимодействия с экраном*/
sliders.addEventListener('touchend', () => {
    setTimeout(function() {
        scroll = sliders.scrollTop;
        check();
    }, 500);
})



/*Горизонтальный ползунок прокрутки*/
let gorizontal = document.querySelector('.gorizontal');
let valueX = document.querySelector('.slidecontainer input');

/*После действий с тачпадом проверяем положение горизонтального ползунка и пролистываем слайд*/
sliders.addEventListener('touchend', () => {
    if (valueX.value < 25) {
        valueX.value = 0;
        gorizontal.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else if (valueX.value > 25 && valueX.value < 74) {
        valueX.value = 50;
        gorizontal.scrollTo({
            left: 770,
            behavior: "smooth"
        });
    } else if (valueX.value > 75) {
        valueX.value = 100;
        gorizontal.scrollTo({
            left: 2000,
            behavior: "smooth"
        });
    }
});

