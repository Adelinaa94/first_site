$( document ).ready(function() {
   $(".radio-block").click(function (){
        $(this).children(".label").addClass("label--active");
        $(this).siblings().children(".label").removeClass("label--active");
   });
});