var anArray = [];

function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push("'I am ' + i + ' strange loop'");
    }
  }
  return array;
}
forLoop(anArray)

function whileLoop(n) {
  while(n > 0) {
    console.log(--n)
  }
  return 'done'
}
whileLoop(5)

function doWhileLoop(array) {
  var array = [];
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  do {
    console.log('doo-bee-doo-bee-doo')
  } while (array.length > 0 && maybeTrue());
  return array;
}
doWhileLoop(anArray)
