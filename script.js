$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20)
    {
    $('.navbar').addClass('sticky');
    }    
    else{    
        $('.navbar').removeClass('sticky');
        }
 });
$('.menu-btn').click(function(){
     $('.menu-btn i').toggleClass("active");
     $('.navbar.menu').toggleClass("active");
    
   });
var typed=new Typed(".typing",{
    strings:["Web developer","Student","Learner"],
    typeSpeed:100,
    backspeed:60,
    loop:true
});
var typed=new Typed(".typing-2",{
    strings:["Web developer","Student","Learner"],
    typeSpeed:50,
    backspeed:30,
    loop:true
});


$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoPlayTimeOut:2000,
    autoPlayHoverPause:true,
    responsive: {
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        0:{
            items:3,
            nav:false
        },
    }
    }); 
});