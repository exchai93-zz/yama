import Typed from 'typed.js';

function typeOutTitle() {
  return new Typed("#unhidden-title", {
    stringsElement: '#hidden-title',
    typeSpeed: 150
  });
}

function typeOutTimer() {
  return new Typed("#unhidden-timer", {
    stringsElement: '#hidden-timer',
    typeSpeed: 150,
    onComplete: function(){
      console.log("hello");
    }
  });
}

function typeOutDate() {
  return new Typed('#unhidden-date', {
    stringsElement: '#hidden-date',
    typeSpeed: 150
  });
}

setTimeout(typeOutTitle, 2000);
timer();
setTimeout(typeOutTimer, 6000);
setTimeout(typeOutDate, 10000);


function timer() {
  var countDownDate = new Date("September 22 , 2017, 00:00:00").getTime();
  var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor( distance / (1000 * 60 * 60 * 24) );
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("time").innerHTML = days + ":" + hours + ":" + minutes;
  });
}
