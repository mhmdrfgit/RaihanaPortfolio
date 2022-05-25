$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');        
    })

    //smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top,
        },500,'linear');
    });
});

function show_pproject() {
    var x = document.getElementById("p-project");
    var y = document.getElementById("c-project");
    var z = document.getElementById("artwork");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

  } else {
    x.style.display = "none";
  }
  }

  function show_cproject() {
    var x = document.getElementById("c-project");
    var y = document.getElementById("p-project");
    var z = document.getElementById("artwork");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  } else {
    x.style.display = "none";
  }
  }
  function show_artwork() {
    var x = document.getElementById("artwork");
    var y = document.getElementById("p-project");
    var z = document.getElementById("c-project");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  } else {
    x.style.display = "none";
  }
  }
  
  

