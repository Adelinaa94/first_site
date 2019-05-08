$( document ).ready(function() {
   $(".radio-block").click(function (){
        $(this).children(".label").addClass("label--active");
        $(this).siblings().children(".label").removeClass("label--active");
   });
});

var btn = document.querySelector('.ham-btn');
var nav = document.querySelector('.nav');
var btnTwo = document.querySelector('.cross_btn');
btn.addEventListener('click', function(){
        nav.classList.add('nav--mobile');
        btnTwo.classList.add('cross_btn--active');
});
btnTwo.addEventListener('click', function(){
        nav.classList.remove('nav--mobile');
        btnTwo.classList.remove('cross_btn--active');

});