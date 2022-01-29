//News carousel animation
$(document).ready(function(){
  //owl carousel script
  $(".carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverpause: true,
  });
})
//Typing text animation
$(document).ready(function(){
  //typing animation script
  var typed = new Typed(".typing", {
    strings:["Welcome", "Hello", "Bonjour"],
    typeSpeed: 100,
    backSpped: 60,
    loop: true
  });
})
