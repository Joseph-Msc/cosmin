function a() {
  console.log('a');
  setTimeout(
    () => {
      console.log('b');
    },
    0
  );
  b();
  console.log('c');
}

a();

function b() {
  let a = 0;
  while(a < 1000000000) {
  	a++;
	}
	console.log('d');
}

// a() - l:13
// a - l:2
// setTimeout() - l:3
// b() - l:9
// d - l:20
// c - l:10
// b - l:5
