const swiper = new Swiper('.section6__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination-3',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, 
    breakpoints: {
        540: {
            slidesPerView: 2,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 65,
            centeredSlides: false,
        },
        1025: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
        },
    }, 
});

const swiper1 = new Swiper('.section2__slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination-1',
    },
});

const swiper2 = new Swiper('.section5__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: -30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination-2',
    },
});

document.querySelector('.header__close').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.display = 'none';
});

document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.display = 'block';
});

document.querySelector('.modal__close').addEventListener('click', function() {
    document.querySelector('.modal-bg').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
});

Array.prototype.map.call(document.querySelectorAll('.help-fond'),function(element,index){
    element.addEventListener('click',function(){
		document.querySelector('.modal-bg').style.display = 'block';
    document.querySelector('.modal').style.display = 'flex';
    document.querySelector('.burger-menu').style.display = 'none';
  },false)
})

document.querySelector('.section1__btn .btn-social .open').addEventListener('click', function() {
    if (document.querySelector('.section1__btn .btn-social .open').classList.contains('closed')) {
        document.querySelector('.section1__btn .btn-social .open').classList.remove("closed");
        document.querySelector('.section1__btn .btn-social .open').classList.add("opened");
        document.querySelector('.btn-social .socials').style.display = 'flex';
        document.querySelector('.btn-social .icon').style.display = 'none';
        document.getElementById('social').src = 'img/close.svg';
        console.log(1);
    }
    else {
        document.querySelector('.section1__btn .btn-social .open').classList.add("closed");
        document.querySelector('.section1__btn .btn-social .open').classList.remove("opened");
        document.querySelector('.btn-social .socials').style.display = 'none';
        document.querySelector('.btn-social .icon').style.display = 'flex';
        document.getElementById('social').src = 'img/social.svg';
        console.log(2);
    }
});

// document.querySelector('.copy').addEventListener('click', function() {
//     navigator.clipboard.writeText('2202 2029 4872 1778').then(function() {
//         console.log('Text copied to clipboard');
//     }).catch(function(error) {
//         console.error('Error:', error);
//     });
// });

// new ClipboardJS('.copy'); 

// document.querySelector('.modal__cart').addEventListener('click', function() {
//     document.querySelector('.modal__cart').classList.add('active');
//     document.querySelector('.modal__qr').classList.remove('active');
//     document.querySelector('.modal__code').style.display = "none";
//     document.querySelector('.modal__img').style.display = "block";
//     document.querySelector('.modal__btn').style.display = "block";
// });

// document.querySelector('.modal__qr').addEventListener('click', function() {
//     document.querySelector('.modal__qr').classList.add('active');
//     document.querySelector('.modal__cart').classList.remove('active');
//     document.querySelector('.modal__btn').style.display = "none";
//     document.querySelector('.modal__img').style.display = "none";
//     document.querySelector('.modal__code').style.display = "flex";
// });