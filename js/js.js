/*JS REGISTER*/

function register() {
    document.getElementById("bg-register").style.display = "block";
    document.getElementById("register").style.bottom = 0 + "%";
}

function re_register() {
    document.getElementById("bg-register").style.display = "none";
    document.getElementById("register").style.bottom = 100 + "%";
}

/*JS LOGIN*/

function login() {
    document.getElementById("bg-login").style.display = "block";
    document.getElementById("login").style.bottom = 0 + "%";
}

function re_login() {
    document.getElementById("bg-login").style.display = "none";
    document.getElementById("login").style.bottom = 100 + "%";
}

/*fixed nav */
$(window).scroll(function(){
    var sticky = $('#myMenu'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });
