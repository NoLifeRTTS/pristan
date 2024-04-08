

Array.prototype.map.call(document.querySelectorAll('.back'),function(element,index){
    element.addEventListener('click',function(){
		document.querySelector('.artilce1-block').style.display = 'none';
		document.querySelector('.artilce2-block').style.display = 'none';
        document.querySelector('.section1__inner').style.display = 'block';
  },false)
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

document.querySelector('.header__close').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.display = 'none';
});

document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.display = 'block';
});

document.querySelector('.btn-social .open').addEventListener('click', function() {
  if (document.querySelector('.btn-social .open').classList.contains('closed')) {
      document.querySelector('.btn-social .open').classList.remove("closed");
      document.querySelector('.btn-social .open').classList.add("opened");
      document.querySelector('.btn-social .socials').style.display = 'flex';
      document.getElementById('social').src = 'https://xn--80aacls5aidjgfm6k.xn--p1ai/img/close.svg';
      console.log(1);
  }
  else {
      document.querySelector('.btn-social .open').classList.add("closed");
      document.querySelector('.btn-social .open').classList.remove("opened");
      document.querySelector('.btn-social .socials').style.display = 'none';
      document.getElementById('social').src = 'https://xn--80aacls5aidjgfm6k.xn--p1ai/img/social.svg';
      console.log(2);
  }
});