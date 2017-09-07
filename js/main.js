console.log("Hello World!!");
import Typed from 'typed.js';

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 200
};

var typed = new Typed("#not-hidden", {
  stringsElement: '#hidden'
});
