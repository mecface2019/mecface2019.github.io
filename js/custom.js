
// // Navbar
// $(document).ready(function(){
//   $(window).scroll(function () {
//     'use strict';
//     if ($(window).scrollTop() < 80) {
//         $('.navbar').css({
//             'margin-top': '-100px',
//             'opacity': '0'
//         });
//         $('.navbar-default').css({
//           'background-color': 'rgba(120,120,120,0)',

//         });

//     } else {
//         $('.navbar').css({
//             'margin-top': '0px',
//             'opacity': '1'
//         });
//         $('.navbar-default').css({
//             'background-color': 'rgba(120,120,120,0.8)',
//             'border-color': '#444'
//         });
//         $('.navbar-brand img').css({
//             'height': '35px',
//             'padding-top': '0px'
//         });
//         $('.navbar-nav > li > a').css({
//             'padding-top': '15px'

//         });


//     }

//   });
// });

// Timer

function makeTimer() {

    var endTime = new Date("25 July 2019 9:00:00 GMT+05:30");			
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<p>Days</p>");
    $("#hours").html(hours + "<p>Hours</p>");
    $("#minutes").html(minutes + "<p>Minutes</p>");
    $("#seconds").html(seconds + "<p>Seconds</p>");		

}

setInterval(function() { makeTimer(); }, 1000);



// Nav

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
