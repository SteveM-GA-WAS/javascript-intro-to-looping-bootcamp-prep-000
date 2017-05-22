var gifts = ['teddy bear', 'drone', 'doll']

function forLoop(anArg) {
  for (let i = 0; i < 25; i++) {
  if (i = 1) {
    anArg.push("I am 1 strange loop.")
  } else {
    anArg.push("I am ${i} strange loops.")
  }
 }
 return anArg
}
forLoop(gifts)

function whileLoop(num) {
  while (countdown > 0) {
   console.log(--countdown)
   }
 return 'done'
}
whileLoop(5)

function doWhileLoop(anArray) {
  do {
  anArray.pop()
   } while (array.length > 0);
   return anArray
}
doWhileLoop(gifts)
