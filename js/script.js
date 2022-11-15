var typed = new Typed(".typping", {
    strings:["", "Web Designer", "Web Developer", "Grafic Designer", "YouTuber"],
    typeSpeed:100,
    Backspeed:60,
    loop:true
});




$(window).scroll(function(){
    $(".navbar").toggleClass('scrolled', $(this).scrollTop()>100)
  
});

var webLinks = document.querySelector(".web-links");
window.onscroll = () =>{
    webLinks.classList.add('active');
}



// barfiler
$(document).ready(function(){
    $('#bar1').barfiller({barColor: "#990000",duration: 2000});
    $('#bar2').barfiller({barColor: "#990000",duration: 2000});
    $('#bar3').barfiller({barColor: "#990000",duration: 2000});
    $('#bar4').barfiller({barColor: "#990000",duration: 2000});
    $('#bar5').barfiller({barColor: "#990000",duration: 2000});
});


$('.counter').counterUp({
    delay: 10,
    time: 2000
});