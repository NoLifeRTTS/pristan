const swiper1 = new Swiper('.section2__slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination-1',
    },
});

Array.prototype.map.call(document.querySelectorAll('.help-fond'),function(element,index){
    element.addEventListener('click',function(){
		document.querySelector('.modal-bg').style.display = 'block';
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('.burger-menu').style.display = 'none';
  },false)
});

document.querySelector('.modal__close').addEventListener('click', function() {
    document.querySelector('.modal-bg').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
});

// document.querySelector('.copy').addEventListener('click', function() {
//     navigator.clipboard.writeText('2202 2029 4872 1778').then(function() {
//         console.log('Text copied to clipboard');
//     }).catch(function(error) {
//         console.error('Error:', error);
//     });
// });

// new ClipboardJS('.copy'); 

document.querySelector('.header__close').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.display = 'none';
});

document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.display = 'block';
});

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