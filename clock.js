function Counter(elem, delay) {
  var value = parseInt(elem.innerHTML, 10);
  var interval;

  function increment() {
    return (value += 1);
  }

  function updateDisplay(value) {
    elem.innerHTML = value;
  }

  function run() {
    updateDisplay(increment());
  }

  function start() {
    interval = window.setInterval(run, delay);
  }

  // exports
  // This actually creates a function that our counter can call
  // you'll see it used below.
  //
  // The other functions above cannot be accessed from outside
  // this function.
  this.start = start;
}

var elem = document.getElementById("txt");

counter = new Counter(elem, 500);
counter.start();
