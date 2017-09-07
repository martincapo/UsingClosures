var countdownGenerator = function (x) {
  /* your code here */
  var msg = '';
  return function() {
    if(x === 0) {
      msg = "Blast Off!"
    } else if(x < 0) {
      msg = "Rockets already gone, bub!";
    } else {
      msg = "T-minus " + x + "...";
    }
    console.log(msg);
    x --;
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!