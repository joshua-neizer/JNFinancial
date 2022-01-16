// sets cookies for the webiste
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Gets the cookie from the browser
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function fixedNav() {
    var xPos = $(window).scrollTop(),
        width = $(window).width();
    if (xPos > 40 && width > 1300){
        $(".header").attr('style', "top: -40px;");
    } else {
        $(".header").attr('style', "");
    }
}

// Changes the navigation bar to mobile view
function mobileNav() {
    if (target == 0) {
        $(".responsive").attr('style', "height: 225px;");
        target = 1;
    } else {
        $(".responsive").attr('style', "");
        target = 0;
    }
}

function reset(){
    $(".responsive").attr('style', "");

    scrollNavSetup();
}

function changePage(page){
    setCookie('page', page, 7);

    if (prevPage != ""){
        $(prevPage).attr('style', "");
    }

    prevPage = page;

    $(page).attr('style', "color: var(--nav-text);");
    console.log(page);
}

function scrollNavSetup(){
    nav_pos = [
        $("#_home").height(), 
        $("#_financial").height(), 
        $("#_tools").height(), 
        $("#_about").height(),
        $("#_contact").height()
    ];

    for (i=0; i<5; i++){
        scroll_pos [i] = nav_pos.slice(0, i+1).reduce((a,b) => a + b);
    }
}

function setNavState(x_pos){
    if (x_pos <= scroll_pos [0]) {
        return 0;
    } else if (scroll_pos [0] < x_pos && x_pos <= scroll_pos [1]) {
        return 1;
    } else if (scroll_pos [1] < x_pos && x_pos <= scroll_pos [2]) {
        return 2;
    } else if (scroll_pos [2] < x_pos && x_pos <= scroll_pos [3]) {
        return 3;
    } else {
        return 4;
    }
}

function setNavPos(x_pos){
    switch (setNavState(x_pos + 100)) {
        case 0:
            changePage("#home");
            break;
        case 1:
            changePage("#financial");
            break;
        case 2:
            changePage("#tools");
            break;
        case 3:
            changePage("#about");
            break;
        case 4:
            changePage("#contact");
            break;
    }
}

$(document).ready(function() {
    var temp = getCookie("page");
    var page = (temp == null ? "#home" : temp);

    changePage(page);
    fixedNav();
    scrollNavSetup();
    $(window).scroll(function(){
        fixedNav();
        setNavPos($(window).scrollTop());
    });
});

$('.nav-link').click(function () {
    $(".responsive").attr('style', "");
    target = 0;
});

var target = 0;
var prevPage = "";
var nav_pos = [0, 0, 0, 0, 0];
var scroll_pos = [0, 0, 0, 0, 0];

// ___Scrolling To Link___

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
// On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus
                var $target = $(target);
            });
        }
    }
}); 