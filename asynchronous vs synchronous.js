let a = true;
let b = 1;

let interval = setInterval(
() => {
  while (a === 5) {
    console.log('While is executed');
    a = 4;
  }
  
  console.log(b, a);
  
  if(b === 10) {
  clearInterval(interval);
  }
  
  b++;
}, 1000);

setTimeout(() => {
   a = 5;
}, 5000);

setTimeout(() => {
   a = 5;
}, 9000);

console.log('The value of a is: ' + a);

a = 5;

console.log('This will execute first even if it is written last!');
